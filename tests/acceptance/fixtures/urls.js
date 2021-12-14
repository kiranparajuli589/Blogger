require("dotenv").config()
const PORT = process.env.PORT || 3001
const HOST = process.env.HOST || "http://localhost"

const base = `${HOST}:${PORT}`

module.exports = {
  user: {
    list: base + "/api/users/",
    detail: base + "/api/users/%s/"
  },
  post: {
    list: base + "/api/posts/",
    detail: base + "/api/posts/%s/"
  }
}
