# Quotes App Mocks

# Quick start
**Make sure you have Node version >= 7.0 and NPM >= 3**

```bash

# change directory to the mocks
cd mocks

# install the client dependencies with npm
npm install

# start the server
npm start

```
The server should be running and will be accepting requests
You should be able to make requests against it at [http://localhost:3002](http://localhost:3002).
[Postman](https://www.getpostman.com/) is a great client for testing this independently.

# Mocks for authentication responses (security service layer)
http://localhost:3002/security-services/v1/auth
Use Base Auth for credentials in HTTP header

=======================================================================================
Scenarios						        User Name		Password    Department    Redirect To:
=======================================================================================
Successful authentication	  UserA			  password    Quotes        Quotes Landing Page
Successful authentication	  BoxUser			password    Box           Quotes Landing Page
Successful authentication	  SalesUser		password    Sales         Sales Landing Page
Failed authentication			  UserA			  test        -             -
Failed authorization			  UserB			  password    -             -

========================================================================================

To simulate timeouts:
Decrease the timeout limit in security-service.js to lesser than limit for delay
delay: [1250, 1500]
req.setTimeout(5000, function()) // Decrease 5000

