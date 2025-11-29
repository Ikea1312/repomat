const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const config = require("./config.json");
const qc = require("./qc-fetcher");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log(`Bot zalogowany jako ${client.user.tag}!`);
});

client.on("messageCreate", async (msg) => {
    if (msg.author.bot) return;

    if (msg.content.includes("weidian.com") || msg.content.includes("taobao.com")) {
        const url = msg.content.trim();
        
        msg.reply("⏳ Pobieram QC Photos…");
        
        const data = await qc.getQCPhotos(url);

        const embed = new EmbedBuilder()
            .setTitle(data.title)
            .setDescription(`**Cena:** ${data.price}\n**Waga:** ${data.weight}\n**Wyświetlenia:** ${data.views}`)
            .setColor("#2b94ff");

        msg.channel.send({ embeds: [embed] });

        for (const photo of data.photos) {
            await msg.channel.send(photo);
        }

        msg.channel.send("🔗 **Referrals:**\n" +
            "⚡ KakoBuy – https://ikako.vip/r/bz78w"
            
            
        );
    }
});

client.login(config.token);
