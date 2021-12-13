const router = require("express").Router()

const homeRoutes = require("./home-routes.js")

const apiRoutes = require("./api")

const dashBoard = require("./dashboard-routes")

router.use("/", homeRoutes)

router.use("/api", apiRoutes)

router.use("/dashboard", dashBoard)

router.use((req, res) => {
  res.status(404).end()
})

module.exports = router
