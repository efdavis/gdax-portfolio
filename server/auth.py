# Requires python-requests. Install with pip:
#
#   pip install requests
#
# or, with easy-install:
#
#   easy_install requests

import json, hmac, hashlib, time, requests, base64, subprocess, sys
from requests.auth import AuthBase


# Create custom authentication for Exchange
class CoinbaseExchangeAuth(AuthBase):
    def __init__(self, api_key, secret_key, passphrase):
        self.api_key = api_key
        self.secret_key = secret_key
        self.passphrase = passphrase

    def __call__(self, request):
        timestamp = str(time.time())
        message = timestamp + request.method + request.path_url + (request.body or '')
        hmac_key = base64.b64decode(self.secret_key)
        signature = hmac.new(hmac_key, message, hashlib.sha256)
        signature_b64 = signature.digest().encode('base64').rstrip('\n')

        request.headers.update({
            'CB-ACCESS-SIGN': signature_b64,
            'CB-ACCESS-TIMESTAMP': timestamp,
            'CB-ACCESS-KEY': self.api_key,
            'CB-ACCESS-PASSPHRASE': self.passphrase,
            'Content-Type': 'application/json'
        })
        return request

api_url = 'https://api.gdax.com/'

# Access the three API auth values from Apple's keychain
api_key = subprocess.check_output(['security', 'find-generic-password', '-l', 'API_KEY', '-w']).rstrip()
api_secret = subprocess.check_output(['security', 'find-generic-password', '-l', 'API_SECRET', '-w']).rstrip()
api_pass = subprocess.check_output(['security', 'find-generic-password', '-l', 'API_PASS', '-w']).rstrip()


auth = CoinbaseExchangeAuth(api_key, api_secret, api_pass)
  
# Get accounts and print response
r = requests.get(api_url + 'accounts', auth=auth)


print r.content.decode('utf-8')
sys.stdout.flush()

