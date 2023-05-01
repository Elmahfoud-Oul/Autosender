<!DOCTYPE html>
<html>

<head>
  
</head>

<body>
  <h1>Auto Bump Script Steps Setup:</h1>

  <h4>
    This script is written in Node.js and uses the discord.js-selfbot-v13 library to create a self-bot that automatically bumps a Discord server using the /disboard bump command. Self-bots are against Discord's terms of service and can lead to account suspension, so it is not recommended to use this script.
  </h4>

  <h3>Here are the steps to run the script:</h3>

  <ol>
    <li>Install Node.js and npm on your computer.</li>
    <li>Create a new folder and open a terminal or command prompt inside it.</li>
    <li>Run <code>npm init</code> and follow the prompts to create a new <code>package.json</code> file.</li>
    <li>Run <code>npm install discord.js-selfbot-v13 dotenv</code> to install the required libraries.</li>
    <li>Create a new file named <code>index.js</code> in the folder and paste the script into it.</li>
    <li>Create a <code>.env</code> file in the folder and add the following lines, replacing the placeholders with your own values:</li>
  </ol>

  <pre>
token=your_discord_account_token
bumpChannel=your_discord_bump_channel_id
  </pre>

  <h4>Your Discord account token can be obtained from the Discord Developer Portal by creating a new application and generating a bot token. Make sure to keep your token secret and never share it with anyone.</h4>

  <h4>To find the ID of the bump channel, right-click on the channel in Discord and select "Copy ID".</h4>

  <h4>Save the files and run <code>node index.js</code> in the terminal to start the bot.</h4>

  <h3>Here's a breakdown of the script:</h3>

  <ul>
    <li>The first two lines import the Client class from the discord.js-selfbot-v13 library and create a new instance of it called client.</li>
    <li>The third line loads environment variables from the .env file using the dotenv library.</li>
    <li>The <code>channel</code> variable is declared but not assigned a value yet.</li>
    <li>The client listens for the <code>ready</code> event, which is emitted when the bot has successfully logged in to Discord. When this happens, the script logs a message to the console and fetches the bump channel using the ID from the .env file. The fetched channel is then assigned to the <code>channel</code> variable.

The <code>bump()</code> function is declared as an asynchronous function that sends the <code>/disboard bump</code> command to the bump channel using the <code>sendSlash()</code> method from discord.js-selfbot-v13. The function then logs a message to the console using <code>console.count()</code> and schedules another bump after a random delay between 2 and 3 hours (in milliseconds) using the <code>setTimeout()</code> function.



Finally, the client logs in to Discord using the account token from the .env file using the <code>client.login()</code> method. Once logged in, the client listens for events and runs the appropriate functions as defined in the script.

<h2><code>This Script Was Made By Dev El Mahfoud</code> </h2>
