// import discord.js
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES" ,"GUILD_BANS","GUILD_EMOJIS_AND_STICKERS"] })

const prefix = process.env.PREFIX;
const mute = require('./command/mute')
const unmute = require('./command/unmute')
const kick = require('./command/kick')
const ban = require('./command/ban')
const warn = require('./command/warn')
const faq = require('./command/fap')
const badword = require('./command/badword')
const joke = require('./command/joke')
const info = require('./command/info')
const bot = require('./command/bot')
const web = require('./command/website')
const rules = require('./command/rules');
const main = require('./command/main')
const help = require('./command/help')
const mod = require('./command/mod')
const helpm = require('./command/modhelp')
const poli = require('./command/political')
const product = require('./command/product')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activities: [{ name: 'activity' }], status: 'online' });
  const statusArray = [
    'Kumi guys, WATCHING',
    'movie on netflix, WATCHING',
    'Kumi website, PLAYING',
    'kumi history, WATCHING',
    'random podcast, LISTENING',
    ' morning news, LISTENING',
    'Moderator working, WATCHING',
    ' american football with my best friend, PLAYING',
    'random music in spotify, LISTENING',
    '🗺️emoji war💂, PLAYING', 
    'kumi podcast, LISTENING',
    'Hide and seek, PLAYING',
    'giveaways, WATCHING',
    'Kumi butter balm, PLAYING',
    'everyone online, WATCHING',
    'Simon says not simoon says, PLAYING',
    'GTA V, PLAYING',
    'NETFLIX, WATCHING',
    'Freefire, PLAYING',
    'Roblox, PLAYING',
    'Monkeytype.com, PLAYING',
  ];

    setInterval(() => {
      client.user.setStatus('online');
      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
      const status = random[0];
      const mode = random[1];
      client.user.setActivity(status, { type: mode })

    }, 3000)
  mute(client)
  unmute(client)
  kick(client)
  ban(client)
  warn(client)
  faq(client)
  badword(client)
  joke(client)
  info(client)
  bot(client)
  web(client)
  rules(client)
  main(client)
  help(client)
  mod(client)
  helpm(client)
  poli(client)
  product(client)
});

client.login(process.env.DISCORD_TOKEN);