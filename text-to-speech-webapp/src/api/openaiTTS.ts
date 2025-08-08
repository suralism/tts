import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/audio/generate';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Ensure to set your OpenAI API key in your environment variables

export interface TextToSpeechRequest {
    text: string;
}

export interface TextToSpeechResponse {
    audio_url: string;
}

export const convertTextToSpeech = async (request: TextToSpeechRequest): Promise<TextToSpeechResponse> => {
    try {
        const response = await axios.post(OPENAI_API_URL, request, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error converting text to speech: ${error.response?.data?.error?.message || error.message}`);
    }
};