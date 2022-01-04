const util = require("util")

/**
 * @returns {exports}
 */
exports.command = function () {
  // till we have a better idea how to detect that an animation is finished
  const timeout = this.globals.waitForAnimationsTimeout
  console.log(util.format("waiting for %sms ...", timeout))
  this.pause(timeout)
  return this
}
