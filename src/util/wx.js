// some wx fn
const encode = require('../util/encode')
const config = require('../config')
const xml = require('./xml')

// 返回 true ／ false
exports.auth = (ctx) => {
    const token = config.wx.token,
          signature = ctx.query.signature,
          timestamp = ctx.query.timestamp,
          nonce = ctx.query.nonce
        
        // 字典排序
        const arr = [token, timestamp, nonce].sort()
        const result = encode.sha1(arr.join(''))

        if (result === signature) {
            return true
        } else {
            return false
        }
}

exports.message = {
    text (msg, content) {
        return xml.jsonToXml({
            xml: {
                ToUserName: msg.FromUserName,
                FromUserName: msg.ToUserName,
                CreateTime: Date.now(),
                MsgType: msg.MsgType,
                Content: content
            }
        })
    }
}