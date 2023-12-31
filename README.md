# Discord Spammer

## Description

This is a small file used to make staggered requests to the Discord messages API forcing an account to send messages in a specified channel on a set interval.

Discord Spammer is **NOT** a Discord Bot. In order to use this you must make a throwaway account and use that account's authentication token.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Questions](#questions)

## Installation

### Using This Code

1. Clone this repo onto your local system.

2. Run `npm install` to install all dependencies.

3. Create a .env file and copy the contents of .env.template into it. See [Getting An Authentication Token](#getting-an-authentication-token) and [Getting The Channel ID](#getting-the-channel-id)

4. In the terminal run `npm start` to start the spammer. To stop it manually, `Ctrl + C` while clicked in the terminal.

5. Happy Spamming!!

### Getting An Authentication Token

1. Register a new Discord account here: <https://discord.com/>.

2. Go to the Discord website using your desktop browser and log into your account.

3. Open the developer tools (F12) and go to the Network tab.

4. Refresh the page and in the fliter bar search `/api`.

5. Find either the `profile` or `library` name and click on it to open the Headers.

6. In Headers scroll down to Authorization and copy the token. Paste this Auth token into the AUTH_TOKEN variable of your .env file

>**NEVER SHARE YOUR AUTHENTICATION TOKEN WITH ANYONE**

### Getting The Channel ID

1. On your main Discord account go to your settings and click on the `Advanced` tab. Turn on Developer Mode here.

2. Navigate to the Discord server where you want the spammer to run.

3. Right click on the channel you want to spam in and at the bottom click on `Copy Channel ID` (It might be best to create a dedicated spam channel that only this account can type in).

4. Paste this Channel ID into the CHANNEL_ID variable of your .env file

## Questions

If you have an questions about the app or would like to contribute in any way please feel free to reach out to me!

### Answers

>If you log out of the Discord spam account on your web app the Authentication token might change. If you are receiving a 401 Unauthorized error you likely have to repeat [these](#getting-an-authentication-token) steps to get a new AUTH token.

Email:
>[muratoreh@gmail.com](mailto:muratoreh@gmail.com?subject=[GitHub]%20Form%20Forwarder)

GitHub account:
>[https://github.com/HunterMuratore](https://github.com/HunterMuratore)

Portfolio:
>[https://huntermuratore.com](https://huntermuratore.com)
