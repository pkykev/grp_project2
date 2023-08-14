const path = require('path');
// do you really need ('path')?
const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
// dotenv package serves (process.env)

// import handlebar and helpers into server to tell handlebars to use them
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');


// this is for session managment with cookies
const session = require('express-session');
const routes = require('./controllers');

//DB///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//hooks up seqelize session storage
// this is for storing session data into the db
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const PORT = process.env.PORT;
/
// tells handlebars where to look when calling helper functions
const hbs = exphbs.create({ helpers });

// this sets up sessions and stores it in db
const sess = {
  // this is a secret passkey for encrypting sessions
  secret: 'Gary we changed this enjoy',
  cookie: {
    maxAge: 24 * 60 * 60 * 2000  // this is in miliseconds making this 2 days because 1000ms per second 
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// only need the save() method when you add or modify session data from the req obj -- the res goes inside this method becuase the res is modified by the req being modified -- middleware intercepting -- req.session is an empty object we can modify
// Add express-session and store as Express.js middleware to be called later in the request obj
app.use(session(sess));


// tells express that handlebars is our engine with res.render
app.engine('handlebars', hbs.engine);
// sets engine
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// sets the default/static to public
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);




// Set both boolean values to true when you first deploy to heroku; ater database has been built
// set first boolean value to false and keep it there

// When you run the seed file, it should build all your tables for you, which means you can keep the first 
// boolean value set to false
const syncValue = (process.env.NODE_ENV === "production" ? false : true) 

sequelize.sync({ force: syncValue }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
