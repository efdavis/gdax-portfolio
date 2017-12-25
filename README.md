
## Quick start

1. Clone this repo using `git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git`
2. Move to the appropriate directory: `cd react-boilerplate`.<br />
3. Run `npm run setup` in order to install dependencies and clean the git repo.<br />
   *We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`*<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*
4. Run `npm run clean` to delete the example app.

Now you're ready to rumble!

##  Auth instructions 

1.  On the GDAX web page, select “API” from the menu.  Select “Create API Key’.  Select all of the permissions.
2.  Add three items to your Apple keychain in the “passwords” section.
       Use the following names:

       * API_KEY
       * API_PASS
       * API_SECRET

       Copy the values from the GDAX web page. 
3.  Run auth.py, follow the prompts when prompted

python auth.py

pip2 install
python server/auth.py

