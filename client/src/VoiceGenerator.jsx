
import React, { useState } from 'react';

export default function VoiceGenerator() {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('nova');
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!text) return;
    setLoading(true);
    setAudioUrl(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, voice }),
      });

      if (!response.ok) throw new Error('Failed to generate voice');

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (err) {
      console.error('Error generating voice:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🔊 AI Voice Generator</h1>

      <label className="block mb-2 font-medium">เลือกเสียง:</label>
      <select
        value={voice}
        onChange={(e) => setVoice(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="nova">Nova - เป็นกันเอง</option>
        <option value="onyx">Onyx - จริงจัง</option>
        <option value="echo">Echo - สดใส</option>
        <option value="shimmer">Shimmer - นุ่มนวล</option>
      </select>

      <label className="block mb-2 font-medium">ข้อความ:</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="พิมพ์ข้อความที่ต้องการให้ AI พูด..."
        className="w-full p-2 border rounded mb-4"
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'กำลังสร้างเสียง...' : 'Generate Voice'}
      </button>

      {audioUrl && (
        <div className="mt-6">
          <audio controls src={audioUrl} className="w-full mb-2" />
          <a
            href={audioUrl}
            download="voice.mp3"
            className="text-blue-600 underline"
          >
            ดาวน์โหลดเสียง
          </a>
        </div>
      )}
    </div>
  );
}
