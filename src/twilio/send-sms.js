const config = require('../config');
const client = require('twilio')(config.accountSid, config.authToken);

/**
 * Send a SMS message
 * @param {string} body - The message body
 * @param {string} phone - The phone number
 */

async function sendMessage(body, phone) {
   try {
      const message = await client.messages.create({
         to: phone,
         from: config.twilioPhone,
         body
      })
      return message
   } catch (error) {
      console.log(error);
   }
}

module.exports = {sendMessage}