import { Client, Intents } from "discord.js";
import { token } from "../config/discordconfig.json";
import { Message } from "../utils/type";
import { db } from "../config/firebase";

const client = new Client({ intents : [Intents.FLAGS.GUILDS] })

async function get_users() {
    const users = await (await db.collection("users").get()).docs;
    return users;
};

const users = get_users();

let msgs: Message[] = [];

client.once('ready', () => {
    console.log('Ready!');
    client.channels.cache.forEach(channel => {
        if (channel.type === "GUILD_TEXT") {
            channel.messages.fetch().then(messages => {
                messages.forEach(msg =>  {
                    const username = `${msg.author.username}#${msg.author.discriminator}`;
                    console.log(username);
                    users.then(us => {
                        us.forEach(u => {
                            const data = u.data();
                            if(username === data.username) {
                                console.log(username);
                                console.log(data);
                            }
                        })
                    });
                    
                    // let m = {
                    //     "avatar": msg.author.avatarURL(),
                    //     "username": `${msg.author.username} ${msg.author.discriminator}`,
                        
                    // };
                });
            });
        }
    });
});


client.login(token);