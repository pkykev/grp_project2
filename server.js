const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

const sequelize = require('./config/connection');
// this is probably for storing session data like login and password info 
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);




// Set both boolean values to true when you first deploy to heroku; ater database has been built
// set first boolean value to false and keep it there

// When you run the seed file, it should build all your tables for you, which means you can keep the first 
// boolean value set to false
const syncValue = (process.env.NODE_ENV === "production" ? false : true) 

sequelize.sync({ force: syncValue }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
