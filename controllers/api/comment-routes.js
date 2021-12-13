const router = require("express").Router()
const {
  Comment
} = require("../../models")
const { getErrorObj } = require("../../utils/helpers.js")

router.get("/", (req, res) => {
  Comment.findAll({
    attributes: {
      exclude: ["password"]
    }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

router.post("/", (req, res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        const errObj = getErrorObj(err)
        if (errObj) res.status(400).json(errObj)
        else res.status(500).json(err)
      })
  }
})

router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: "No comment found with this id" })
        return
      }
      res.json(dbUserData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

module.exports = router
