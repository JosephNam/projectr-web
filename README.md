# Projectr

This README contains links to documentation on Projectr's main backend API.

##[API Documentation](api_docs/api.md)
- Projectr exposes a basic REST API.
- All protected routes expect a JSON web token in the query string, request body, or as a cookie. An API call
to a protected route without a JWT will send back an error with status code 403.
- This documentation contains important information about what each endpoint expects and what the server
will respond with.

# Release Notes

### New Features

- Adding tags to profile
- Adding tags to projects
- Project matching results displayed in order of number of matching tags
- Adding custom tags

### Bug Fixes

- Validate user input on registering as a new user
- Fix tag searching returning non-matching tags

### Defects
- Cannot add posts to project pages - left out Features
- On reload, login screen does not redirect to project dashboard if user is logged in

# Install Guide

### Pre-requisites:
- [Install Node.js](https://nodejs.org)
- [Install Postgresql](https://www.postgresql.org/)

### Dependencies
- All required dependencies are listed in the package.json file included in the repository. Upon downloading both required 
repositories and installing Node.js, `cd` into the project directories and run `npm install`
- The configuration.json file in the top level directory contains a parameter called `databaseString`. This paramter must be set with 
the connection to the Postgres database you are using, along with the username and password if required.

### Download Instructions
- Run `git clone https://github.com/JosephNam/projectr-web.git` . This will download the Projectr-web repository.
- Run `git clone https://github.com/JosephNam/Projectr.git` . This will download the Projectr repository.
- Inside both repositories, run `npm install` to download both application and development dependencies. If you are 
developing on a Unix based system, you may have to run the above command with root privileges (`sudo npm install`).
- The first time downloading the repository, inside the projectr-web repo, run `webpack` to build the ES6 and ReactJS code into 
`bundle.js`.
- When you installed Postgresql, PG Admin was also installed. Using this tool, connect to the database you setup and run the SQL statements
in `db_docs/create_tables.sql` to create all required tables. 

### Build Instructions
- When developing, the ES6 code you write will need to be transpiled down to ES5 Javascript. To automate this process, 
open another terminal within the Projectr repository and run `gulp`. Anytime you make changes to a file, gulp will 
retranspile the code into the `dist` directory. For the projectr-web repo, run `webpack --watch` to have webpack
automatically transpile the web server code. If you have the two servers running, these will automatically restart 
upon files being modified.     

### Run Instructions
- Within both repositories, run `npm start` to start both the web and api servers. Again, if using a Unix-based system, you
may need to run the above with root privileges. Open a web browser and visit http://localhost:3000/app/login to view Projectr's home
page. 

### Troubleshooting

- After running `npm install`, the server may crash from unmet dependencies. To remedy this issue, get the name of the unmet dependency and manually type
`npm install {#dependencyName} --save` into the terminal. 




