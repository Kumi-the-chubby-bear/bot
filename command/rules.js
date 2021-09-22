const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const info = new MessageEmbed()
	.setDescription('📰 You can read rules in <#884401760435834890>')


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content.startsWith( prefix + 'rules')) {
            message.reply({ embeds: [info] });
        }          
    })

}