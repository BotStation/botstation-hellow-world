const BotstationClient = require('../../botstation/BotstationClient');



var botstationClient = new BotstationClient();


exports.webhook = async (req, res) => {
    console.log(req.body);
    botstationClient.receiveMessage(req.body);
    res.sendStatus(200);
    await botstationClient.sendMessage('하이');
    await botstationClient.sendMessage('안녕하세요');

}