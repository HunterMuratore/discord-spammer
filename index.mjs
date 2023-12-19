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

    const limit = 21600; // Number of loop iterations (a.k.a how many messages will be sent) 

    try {
        for (let i = 0; i <= limit; i++) { // 12 hour loop, adjust by changing limit
            const payload = {
                content: i.toString(),
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

        console.log('Completed!');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

postMessages();
