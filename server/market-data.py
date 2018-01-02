import gdax, time

foundEth = False;
foundBtc = False;
foundBch = False;
foundLtc = False;

# Get price ticker information from feed
class myWebsocketClient(gdax.WebsocketClient):
    

    def on_open(self):
        self.url = "wss://ws-feed.gdax.com/"
        self.products = ["ETH-USD", "BTC-USD", "LTC-USD", "BCH-USD"]
        self.message_count = 0
        print("BTC-USD")
    def on_message(self, msg):
        self.message_count += 1
        if 'price' in msg and 'type' in msg:
           # print("Currency type", msg["product_id"],  "Price: {:.3f}".format(float(msg["price"])))
            if (msg["product_id"] == 'BTC-USD'):
                foundBtc = True;
            if (msg["product_id"] == 'ETH-USD'):
                foundEth = True;
            if (msg["product_id"] == 'BCH-USD'):
                foundBch == True;
            if (msg["product_id"] == 'LTC-USD'):
                foundLtc == True;
    def on_close(self):
        print("-- Goodbye! --")

wsClient = myWebsocketClient()
wsClient.start()
print(wsClient.url, wsClient.products)


while ((not foundEth) or (not foundBtc) or (not foundLtc) or (not foundBch)):
    #do nothing
    #print ("\nmessage_count =", "{} \n".format(wsClient.message_count))
    time.sleep(1)
wsClient.close()