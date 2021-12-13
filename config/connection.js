const Sequelize = require("sequelize")
require("dotenv").config()

let sequelize

if (process.env.JAWSDB_URL) {
  /**
   *
   */
  sequelize = new Sequelize(process.env.JAWSDB_URL)
  if (sequelize) console.log("Boom! JAW DB commented.")
  else console.log("Sorry, cannot connect to JAW DB.")
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: "localhost",
    dialect: "mysql",
    port: 3306
  })
  if (!sequelize) console.log("Sorry, cannot connect to the local database.")
  else console.log("Boom! Local DB connected.")
}

module.exports = sequelize
