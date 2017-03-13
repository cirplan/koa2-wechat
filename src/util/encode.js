const crypto = require('crypto')

// sha1 encode
exports.sha1 = (str) => {
    const sha1 = crypto.createHash('sha1')
    sha1.update(str)
    return sha1.digest('hex')
}