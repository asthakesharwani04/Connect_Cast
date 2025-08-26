import {StreamChat} from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret) {
    console.error("Stream API key or secret is missing");
}

// Initialize the StreamChat API
const streamClient = StreamChat.getInstance(apiKey, apiSecret);

//upsert means to insert a new user or update an existing user
export const upsertStreamUser = async (userData) => {
    try{
        await streamClient.upsertUser(userData);
        return userData;
    } catch (error) {
        console.error("Error upserting Stream user:", error);
    }
}

export const generateStreamToken = (userId) => {
    try {
        //ensure userId is a string
        const userIdStr = userId.toString();
        return streamClient.createToken(userIdStr);
// createToken() generates a time-limited, signed JWT token for the user.

// This token allows the user to:
// Send/receive messages.
// Join channels.
// Perform other chat actions (based on permissions).

    } catch (error) {
        console.error("Error generating Stream token:", error);
    }
};

