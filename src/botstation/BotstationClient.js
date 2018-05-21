'use strict';
const request = require('request');


const response_url = 'https://dev.botstation.io/api/v1/message/5afa7f172d65a4219b7651c0';
const profile = {
    user_id: '',
    reply_token: '',
    send_channel: ''
}

var BotstationClient = function () {
}

BotstationClient.prototype.receiveMessage = (body) => {

    console.log(body.user_id);
    profile.user_id = body.user_id;
    profile.reply_token = body.reply_token || '';
    profile.send_channel = body.send_channel || '';
}

BotstationClient.prototype.sendMessage = (message) => new Promise((resolve) => {

    const options = {};
    options.uri = response_url;
    options.headers = {
        "Content-Type": "application/json"
    }
    options.method = 'POST';
    options.json = {
        user_id: profile.user_id,
        reply_token: profile.reply_token,
        send_channel: profile.send_channel,
        messages: [
            {
                type: 'text',
                text: message
            }
        ]
    }

    send(options, (err, res, body) => {
        console.log(err);
        console.log(body);
        resolve(res);
    })
})

BotstationClient.prototype.sendImage = (text) => {

}


const send = (options, callback) => {
    request(options, callback);
}


module.exports = BotstationClient;