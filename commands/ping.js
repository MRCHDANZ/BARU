module.exports = {
    name: 'ping',
    description: "command ping",
    execute(message, args) {
        message.channel.send('nyari dulu..').then(msg => {
        const ping = msg.createdTimestamp - message.createdTimestamp;
        msg.edit(`🌏 ${ping}ms`)
        })
    }
}
