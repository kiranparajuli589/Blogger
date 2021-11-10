const path = require('path');
const dotenv = require('dotenv').config()
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(session({
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  maxAge: Date.now() + (30 * 86400 * 1000),
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Listening at http://localhst:' + PORT));
});
