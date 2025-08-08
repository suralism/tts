import React, { useState } from 'react';
import { convertTextToSpeech } from '../api/openaiTTS';

const TextToSpeechForm: React.FC = () => {
    const [text, setText] = useState('');
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setAudioUrl(null);

        try {
            const response = await convertTextToSpeech(text);
            setAudioUrl(response.audioUrl);
        } catch (err) {
            setError('Error converting text to speech. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text to convert to speech"
                    rows={4}
                    cols={50}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Converting...' : 'Convert to Speech'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {audioUrl && (
                <div>
                    <h3>Audio Output:</h3>
                    <audio controls>
                        <source src={audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
        </div>
    );
};

export default TextToSpeechForm;