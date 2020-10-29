const {
    Client,
    MessageEmbed,
    Collection,
    GuildMember
} = require('discord.js');
const bot = new Client;

const token = 'NzY4MjQwNDExNjEyNjc2MTI4.X49low.-TeNStDI12TZxb3NM4v0nJJgvHA';
var PREFIX = '%';
var version = '1.0.1';
const fs = require('fs');

const Commands = new Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of files) {
    const command = require(`./commands/${file}`);
    Commands.set(command.name, command)
}
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '🔔welcome');
    const rule = member.guild.channels.cache.find(ch => ch.name === '✅verif-role');

    if(!channel) return;

    if(member.guild.name === '𝗗 𝗔 𝗡 𝗭') {
        channel.send(`Hallo ${member}, selamat datang jangan lupa ${rule}! @𝘼 𝙑 𝘼 𝙆 𝙀 𝙍 `);
    }
});


  bot.on('ready' , () => {
    console.log('Danz Online!');

    bot.user.setActivity('MRCHDANZ Channel', {
        type: "WATCHING"
    }).catch(console.error);
    
});

bot.on('message' , message => {
    let args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0]) {

    case 'ping':
        Commands.get('ping').execute(message, args);
        break;
    }
})

bot.login(token);


