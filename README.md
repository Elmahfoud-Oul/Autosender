Auto Bump Script Teps steup:


This script is written in Node.js and uses the discord.js-selfbot-v13 library to create a self-bot that automatically bumps a Discord server using the /disboard bump command. Self-bots are against Discord's terms of service and can lead to account suspension, so it is not recommended to use this script.

Here are the steps to run the script:

Install Node.js and npm on your computer.

Create a new folder and open a terminal or command prompt inside it.

Run npm init and follow the prompts to create a new package.json file.

Run npm install discord.js-selfbot-v13 dotenv to install the required libraries.

Create a new file named index.js in the folder and paste the script into it.

Create a .env file in the folder and add the following lines, replacing the placeholders with your own values:

token=your_discord_account_token
bumpChannel=your_discord_bump_channel_id

Your Discord account token can be obtained from the Discord Developer Portal by creating a new application and generating a bot token. Make sure to keep your token secret and never share it with anyone.

To find the ID of the bump channel, right-click on the channel in Discord and select "Copy ID".

Save the files and run node index.js in the terminal to start the bot.

Here's a breakdown of the script:

The first two lines import the Client class from the discord.js-selfbot-v13 library and create a new instance of it called client.
The third line loads environment variables from the .env file using the dotenv library.
The channel variable is declared but not assigned a value yet.
The client listens for the ready event, which is emitted when the bot has successfully logged in to Discord. When this happens, the script logs a message to the console and fetches the bump channel using the ID from the .env file.
The bump function sends the /disboard bump command to the bump channel using the sendSlash method from discord.js-selfbot-v13. It then logs a message to the console and schedules another bump after a random delay between 2 and 3 hours (in milliseconds).
The client logs in to Discord using the account token from the .env file.


Note that self-bots are not allowed by Discord's terms of service and using them can result in account suspension. Additionally, the /disboard bump command is considered spamming and can also result in disciplinary action by Discord. It is recommended to use bots instead of self-bots and follow Discord's guidelines.
