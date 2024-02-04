// speechToText.js
import dotenv from 'dotenv';
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function transcribeSpeech() {
    const transcribeNotes = document.querySelector('#transcribe-notes');

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';

    // Add red border when transcription starts
    transcribeNotes.style.border = '2px solid red';

    recognition.onresult = async (event) => {
        const speechToText = event.results[0][0].transcript;
        console.log('Speech to Text:', speechToText);

        // Call OpenAI Whisper API to transcribe
        const transcription = await transcribeWithOpenAI(speechToText);
        console.log('Transcription:', transcription);

        // Insert transcription at cursor position
        insertAtCursor(transcription);

         // Remove red border when transcription stops
         transcribeNotes.style.border = 'none';
    };
    
    recognition.onerror = (event) => {
        console.error('Error occurred during transcription:', event.error);
        // Remove red border on error
        transcribeNotes.style.border = 'none';
    };
    
    recognition.start();
}

async function transcribeWithOpenAI(audio) {
    const response = await fetch('https://api.openai.com/v1/speech/transcribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            audio: audio,
            model: 'openai-whisper-1.0'
        })
    });

    const data = await response.json();
    return data.transcription;
}

function insertAtCursor(text) {
    const notesTextArea = document.querySelector("#notes-text");
    const startPos = notesTextArea.selectionStart;
    const endPos = notesTextArea.selectionEnd;
    const scrollTop = notesTextArea.scrollTop;
    notesTextArea.value = notesTextArea.value.substring(0, startPos) + text + notesTextArea.value.substring(endPos, notesTextArea.value.length);
    notesTextArea.focus();
    notesTextArea.selectionStart = startPos + text.length;
    notesTextArea.selectionEnd = startPos + text.length;
    notesTextArea.scrollTop = scrollTop;
}

export { transcribeSpeech };
