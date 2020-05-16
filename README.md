barebones setup for JavaScript / Node projects replace this with a one-liner phrase describing this project or app

[![Codacy Badge](https://img.shields.io/badge/Code%20Quality-D-red)](https://img.shields.io/badge/Code%20Quality-D-red)

## About

What is this project about. Ok to enrich here or the section above it with an image. 

Once this repo has been setup on Codacy by the TTL, replace the above badge with the actual one from the Codacy dashboard, and add the code coverage badge as well. This is mandatory

This is a simple JavaScript starter repo template for setting up your project. The setup contains

-  Jest: For runnung tests. We strongly recommend that JavaScript projects use Jest

- Eslint & Prettier: For formatting code to match ESlint AirBnB coding standard. You might need to install the ESlint and Prettier plugins for your code editor to make the most of these utilities

## Why

Talk about what problem this solves, what SDG(s) and SGD targets it addresses and why these are imoirtant

## Usage
 How would someone use what you have built, include URLs to the deployed app, service e.t.c when you have it setup

## Setup

Install `npm` or `yarn` if you dont have any of them already installed. We recommend Yarn though.

After clonning the repo to your local machine and moving into the cloned folder, Run `yarn install` to get started by installing dependencies. 

`src/index.js` is the entry to the project and source code should go into the `src` folder.

All tests should be written in the `__tests__' folder. There's a sample in there.

This starter uses [Parcel](https://parceljs.org/getting_started.html) as the bundler. It is much simpler that WebPack and the others

### Hints

- Run `npm install` or `yarn install` to get started. We'll assume you are using Yarn.
- Install additional dependencies: `yarn add <dependency-name> [-D]`
- Run tests: `yarn test`
- Run tests with test coverage info: `yarn test:cover`
- Check the codebase for proper syntax and formatting compliance: `yarn lint`
- Run your app in local dev mode: `yarn start`. This puts the bundled app in a `dist` folder, set up a local web server at localhost:1234, and continues to watch for your code changes which it syncs with the local server. This means if you loaded the app in a browser, it will auto-refresh as you code along. Feel free to use whatever bundler best meets your needs. Parcel was only added as a sample and for those looking for a simple but effective solution to the hassle of bundlers. 

## Authors

List the team behind this project. Their names linked to their Github, LinkedIn, or Twitter accounts should siffice. Ok to signify the role they play in the project, including the TTL and mentor. 
- Brandon Samson
- Junior
- Jude 
- Labious Phetoane
- Joseph Lumbahe `[https://www.linkedin.com/in/joshlmb/]`

## Contributing
If this project sounds interesting to you and you'd like to contribute, thank you!
First, you can send a mail to buildforsdg@andela.com to indicate your interest, why you'd like to support and what forms of support you can bring to the table, but here are areas we think we'd need the most help in this project :
1.  area one (e.g this app is about human trafficking and you need feedback on your roadmap and feature list from the private sector / NGOs)
2.  area two (e.g you want people to opt-in and try using your staging app at staging.project-name.com and report any bugs via a form)
3.  area three (e.g here is the zoom link to our end-of sprint webinar, join and provide feedback as a stakeholder if you can)

## Acknowledgements

Did you use someone else’s code?
Do you want to thank someone explicitly?
Did someone’s blog post spark off a wonderful idea or give you a solution to nagging problem?

It's powerful to always give credit.

## LICENSE
MIT

## Authentication system BACKEND for user to login, register and have access control

Login and Registration Application using Node.js and the Express framework to build the registration form with validation, which persists its data to a MongoDB database.
- Validation with @hapi/joi
- Password reinforced with salt and hash
- bcrypt to decrypt them
- Added a jsonwebtoken to the auth
- Private routes with JWT
- MongoDB database
- Connected to Express server

**System requirements**
- Express
- Mongoose
- NodeJS
- Nodemon
- dotenv
- joi
- bcrypt
- JWT

**Check that Everything is Installed Correctly**
To check that Node and npm are installed correctly, open your terminal and type:

- node -v

followed by:

- npm -v
