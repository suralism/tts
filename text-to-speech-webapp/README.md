# Text to Speech Web Application

This project is a web application that converts text to speech using the OpenAI Text-to-Speech (TTS) API. It provides a user-friendly interface for inputting text and receiving audio output.

## Project Structure

```
text-to-speech-webapp
├── src
│   ├── index.ts               # Entry point of the application
│   ├── api
│   │   └── openaiTTS.ts       # API interaction with OpenAI TTS
│   ├── components
│   │   └── TextToSpeechForm.tsx # React component for text input
│   └── types
│       └── index.ts           # Type definitions for API requests and responses
├── public
│   └── index.html             # Main HTML file for the application
├── package.json                # NPM configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd text-to-speech-webapp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure OpenAI API:**
   - Obtain your OpenAI API key and set it in your environment variables or configuration file.

4. **Run the application:**
   ```bash
   npm start
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000` to use the text-to-speech functionality.

## Usage

- Enter the text you want to convert to speech in the provided text area.
- Click the "Convert" button to initiate the conversion.
- The audio output will be played back once the conversion is complete.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.