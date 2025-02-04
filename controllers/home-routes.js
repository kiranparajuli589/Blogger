const router = require("express").Router()
const withAuth = require("../utils/auth")
const {
  Post,
  User,
  Comment
} = require("../models")

router.get("/", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "post",
      "title",
      "created_at"
    ],
    include: [{
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
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({
        plain: true
      }))
      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/")
    return
  }

  res.render("login")
})

router.get("/post/:id", withAuth, (req, res) => {
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
    include: [{
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
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({
          message: "No post found with this id"
        })
        return
      }

      const post = dbPostData.get({
        plain: true
      })

      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router
