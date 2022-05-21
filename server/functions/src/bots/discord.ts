import { Client, Intents } from "discord.js";
import { token } from "../config/discordconfig.json";
// import * as functions from "firebase-functions";

const client = new Client({ intents : [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Ready!');
    client.channels.cache.forEach(channel => {
        if (channel.type === "GUILD_TEXT") {
            channel.messages.fetch().then(messages => {
                messages.forEach(msg => {
                    console.log(msg.content);
                });
            });
        }
    });
});


client.login(token);