# Chapa Payment Integration
This is Unofficial implementation of payment with [Chapa API](https://developer.chapa.co/docs/overview) using [expressjs](https://github.com/expressjs/express)

# Getting started
To get the Node server running locally:
- Clone this repo
- <code>npm install</code> to install all required dependencies
- <code>npm run dev</code> to start the local server
- <code>https://localhost:4400</code> go to this URL after the server starts running

# Code Overview

## Dependencies
- [expressjs](https://github.com/expressjs/express) - The server for handeling and routing HTTP requests
- [axios](https://github.com/axios/axios) - The Promise based HTTP client
- [ejs](https://github.com/mde/ejs) - The view engine or the front end of our app

## Application structure
- <code>index.js</code> - The entry point to our application
- <code>views/</code> - This folder contains our front end

# Running phase and requirements

In order to make a test transaction

- Go to [Chapa](https://dashboard.chapa.co/register) and register
- After registration go to setting > API and get your SECRET-KEY
- Paste the KEY in the proper section inside <code>index.js</code>
- Also get a Testing card from Chapa [Here](https://developer.chapa.co/docs/testing-cards/)
- Now you are good to go
