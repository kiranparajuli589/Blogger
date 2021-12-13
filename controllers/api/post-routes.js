const router = require("express").Router()
const { Post, User, Comment } = require("../../models")
const withAuth = require("../../utils/auth")
const { getErrorObj } = require("../../utils/helpers.js")

router.get("/", (req, res) => {
  Post.findAll({
    order: [["created_at", "DESC"]],
    attributes: [
      "id",
      "post",
      "title",
      "created_at"
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"]
        }
      },
      {
        model: User,
        attributes: ["username"]
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      "id",
      "post",
      "title",
      "created_at"
    ],
    include: [
      {
        model: User,
        attributes: ["username"]
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" })
        return
      }
      res.json(dbPostData)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post("/", withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    post: req.body.post,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      const errObj = getErrorObj(err)
      if (errObj) res.status(400).json(errObj)
      else res.status(500).json(err)
    })
})

router.put("/:id", (req, res) => {
  Post.update(
    {
      title: req.body.title,
      post: req.body.post
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" })
        return
      }
      res.json(dbPostData)
    })
    .catch(err => {
      const errObj = getErrorObj(err)
      if (errObj) res.status(400).json(errObj)
      else res.status(500).json(err)
    })
})

router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" })
        return
      }
      res.json(dbPostData)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router
