"use strict";
import "dotenv/config";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioFrom = process.env.TWILIO_FROM;
const twilioTo = process.env.TWILIO_TO;

const client = twilio(accountSid, authToken);

try {
  const message = await client.messages.create({
    body: `Your package has been shipped. It will be delivered in ${new Date()
      .getTime()
      .toString(16)} business days.`,
    from: twilioFrom,
    to: twilioTo,
  });
  console.log(message.sid);
} catch (error) {
  console.error(error);
}
