const command = require('./command') 
const { Permissions } = require('discord.js');
module.exports = (client) => {
  command(client, 'mute', (message) => {
    const { member, mentions } = message

    if (member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)){
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        console.log(message.author.username,' use mute command');
        let verifyRole = message.guild.roles.cache.find(
            role => role.name === 'Member'
        );

      
          targetMember.roles.remove(verifyRole);
        const tag = `<@${targetMember.id}>`
        message.reply(`${tag} has been muted,`)
      } else {
        message.reply(`Please tag someone to muted.`)
      }
    } else {
        message.delete();
        message.author.send(
        `You do not have any permission to use mute command in kumi sever.`
      )
    }
  })
}