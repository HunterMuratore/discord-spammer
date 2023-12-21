import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const header = {
    'Authorization': process.env.AUTH_TOKEN,
    'Content-Type': 'application/json',
};

const channelId = process.env.CHANNEL_ID;
const url = `https://discord.com/api/v9/channels/${channelId}/messages`;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function postMessages() {
    console.log('Started!');

    try {
        while (true) {
            const currentTime = new Date();
            const formattedTime = currentTime.toLocaleTimeString('en-US', { hour12: false });

            const payload = {
                content: formattedTime,
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: header,
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Failed to post message. Status: ${response.status}, ${response.statusText}`);
            }

            await sleep(2000); // Sleep for 2 seconds
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

postMessages();
