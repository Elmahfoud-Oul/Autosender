const { Client } = require('discord.js-selfbot-v13')
const client = new Client()

require('dotenv').config()

let channel;

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    channel = await client.channels.fetch(process.env.bumpChannel)

    bump()
})

async function bump() {
    await channel.sendSlash('302050872383242240', 'bump')
    console.count('Successful Bumped!')

    setTimeout(function () {
        bump()
    }, Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000)
}

client.login(process.env.token)
