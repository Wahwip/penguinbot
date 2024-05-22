const Discord = require('discord.js');

require("./keepalive.js")
const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ]});
const prefix = ''; // The bot command prefix

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);

  try {
    // Replace 'GUILD_ID_TO_MANAGE' with the ID of the guild where you want to manage commands
    const guildId = '839505683422511114';

    // Creating commands
    const help = new Discord.SlashCommandBuilder()
      .setName('help')
      .setDescription('Replies with server Information!');
    const info = new Discord.SlashCommandBuilder()
      .setName('info')
      .setDescription('Replies with server Information!');
    const infobot = new Discord.SlashCommandBuilder()
      .setName('infobot')
      .setDescription('Replies with bot Information!');

    await client.guilds.cache.get(guildId)?.commands.create(help.toJSON());
    await client.guilds.cache.get(guildId)?.commands.create(info.toJSON());
    await client.guilds.cache.get(guildId)?.commands.create(infobot.toJSON());

    console.log('Commands created successfully!');

    // Replace 'COMMAND_ID_TO_DELETE' with the ID of the command you want to delete

  } catch (error) {
    console.error('Error:', error);
  }
});


client.on(Discord.Events.InteractionCreate, interaction => {
  if(!interaction.isChatInputCommand()) return;
  if(interaction.commandName === "help"){
    interaction.reply("Halo! Untuk melihat informasi yang ada di server ini, silahkan untuk melihat kategori (Informasi). Di kategori tersebut terdapat beberapa informasi channel termasuk aturan.");
  } else if(interaction.commandName === "info"){
    interaction.reply("Server ini dibuat oleh RaihanRamalda pada tanggal 05/05/2021!");
  } else if(interaction.commandName === "infobot"){
    interaction.reply("Bot ini dibuat oleh RobertBobert2021. Fungsi bot ini yaitu untuk memberikan informasi terhadap bot/server dan untuk membuat server ini bisa semakin ramai karena bot ini memiliki system Autoresponder.");
  }
})

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    // Remove the prefix and split the command and arguments
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    if (command === 'halo') {
      const user = message.author;
      message.channel.send(`Halo juga, ${user}!`);
    } else if (command === 'assalamualaikum') {
        const user = message.author;
      message.channel.send(`Waalaikumusalam, ${user}!`);
    } else if (command === 'sepi') {
      message.channel.send("Seperti Biasa Sering Kejadian Kayak Gini 🗿🗿");
    } else if (command === 'p') {
        message.channel.send("Fix, anda kurang sopan. Bilang halo knp -_-");
    } else if (command === 'ngapain?') {
        message.channel.send("Yntkts...");
    } else if (command === 'waduh') {
        message.channel.send("Waduh!!!");
    } else if (command === '#help') {
        message.channel.send("Minimal anda tidak caper, karena ujung - ujungnya anda akan di TO hahaha...");
    } else if (command === 'agus') {
        message.channel.send("Waduh, Agus kasihan.. 🗿");
    } else if (command === 'rickroll') {
        message.channel.send("Never Gonna Give You Up");
    } else if (command === 'rickroll2') {
        message.channel.send("Never Gonna Let You Down");
    } else if (command === 'rickroll3') {
        message.channel.send("Never Gonna Run Around and Desert you");
    } else if (command === 'help') {
        message.channel.send("Silahkan baca peraturan, dan jika anda ingin melanggar, nikmatilah timeout-nya dan nikmatilah konsekuensinya.");
    } else if (command === 'ngeri') {
        message.channel.send("Iya cuy...🥶");
    } else if (command === 'laper') {
        message.channel.send("Ya makan dong :v");
    } else if (command === 'aoaan') {
        message.channel.send("Aoaan apaan dah...");
    } else if (command === 'weh') {
        message.channel.send("Ada apa ui?!?!");
    } else if (command === 'penguin') {
        message.channel.send("Wah bisa - bisa saya laporin nih");
    } else if (command === 'gabut') {
        message.channel.send("Iya bang, jangan lupa minum.");
    } else if (command === 'makan') {
        message.channel.send("Hati - hati kalau ada yang puasa anda di TO hahahaaaa...");
    } else if (command === 'kasar') {
        const user = message.author;
      message.channel.send(`/Warn ${user} telah bilang kasar!`);
    } else if (command === 'toxic') {
        const user = message.author;
      message.channel.send(`/Warn ${user} telah toxic!`);
    }    
  })

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('MTEyNTIzNjYzNTEyNzI3MTQ1Ng.GFHowO.FwOYZhiRury6K7COY_Y29i04sCwrVfE-E8AgaA')
  .then(() => console.log('Bot is logged in'))
  .catch(console.error);
