export interface TextToSpeechRequest {
    text: string;
    voice?: string;
    language?: string;
}

export interface TextToSpeechResponse {
    audioUrl: string;
    status: string;
    error?: string;
}