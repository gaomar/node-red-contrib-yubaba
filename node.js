module.exports = function(RED) {
    function main(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            const name = msg.payload;
            const random = Math.round(Math.random() * name.length) - 1;
            const newName = name.substr(random, 1);
            msg.payload = `フン。 ${name} というのかい。贅沢な名だねぇ。今からお前の名前は　${newName}　だ。いいかい、 ${newName} だよ。分かったら返事をするんだ、 ${newName} !!`;
            node.send(msg);
        });
    }
    RED.nodes.registerType("湯婆婆", main);
 }
 