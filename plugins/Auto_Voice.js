const { cmd, Void } = require('../lib'); // Import necessary modules
const axios = require('axios');

// URL to the gist containing the mapping of words to audio URLs
const url = 'https://gist.githubusercontent.com/purnapurna2007/c78c88f763b70239ce3fb4ef31958d1a/raw';

cmd({
    pattern: "bgmnsew",
    category: "owner",
    use: '',
}, async (Void, citel, text, { isCreator }) => {
    try {
        // Fetch data from the provided URL
        let { data } = await axios.get(url);
        console.log('Fetched data:', data);

        // Iterate over the fetched data to check for keyword matches in the message
        for (let vr in data) {
            console.log('Checking word:', vr);

            // Use a regular expression to find a whole word match in the incoming text
            if ((new RegExp(`\\b${vr}\\b`, 'gi')).test(citel.text)) {
                console.log('Match found for word:', vr);

                // Send an audio message to the chat if a match is found
                return Void.sendMessage(citel.chat, {
                    audio: { url: data[vr] },
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, { quoted: citel });
            }
        }
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
});
