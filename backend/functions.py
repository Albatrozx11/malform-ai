import pyaudio
import wave
import speech_recognition as sr

def transcribe_speech(audio_file_path):
    recognizer = sr.Recognizer()

    with sr.AudioFile(audio_file_path) as source:
        audio_data = recognizer.record(source)

    try:
        transcribed_text = recognizer.recognize_google(audio_data, language="ml-IN")
        return transcribed_text
    except sr.UnknownValueError:
        print("Speech Recognition could not understand audio")
        return ""
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")
        return ""



from mtranslate import translate

def translate_text(text, target_language='en'):
    translation = translate(text, target_language)
    return translation

from pydub import AudioSegment

def convert_webm_to_wav(webm_file, wav_file):
    audio = AudioSegment.from_file(webm_file, format="webm")
    audio.export(wav_file, format="wav")


# Example usage
mp3_file_path = r"C:\Users\adith\tinkhack-team-beta\backend\temp.webm"
wav_file_path = r"C:\Users\adith\tinkhack-team-beta\backend\temp.wav"
convert_webm_to_wav(mp3_file_path, wav_file_path)



import vertexai
from vertexai.language_models import TextGenerationModel
from vertexai.preview.language_models import ChatModel, InputOutputTextPair
from google.auth import default
from google.auth.transport.requests import Request

# Try to get credentials from the environment
try:
    credentials, _ = default()
except Exception as e:
    # If not found, or if the credentials are expired, initiate the authentication flow
    credentials = None

if credentials is None or not credentials.valid:
    if credentials and credentials.expired and credentials.refresh_token:
        credentials.refresh(Request())
    else:
        # If no credentials are available or they are not valid, prompt the user to authenticate
        credentials, _ = default(scopes=['https://www.googleapis.com/auth/cloud-platform'])

# Now you can use the 'credentials' object for your API requests

vertexai.init(project="kinetic-octagon-404610", location="us-central1")

#setting up the chat-bison model
text_model = TextGenerationModel.from_pretrained("text-bison")
parameters = {
    "temperature": 0.5,
    "max_output_tokens": 1024,
    "top_p": 0.8,
    "top_k": 40
}
def llmcall(prompt):
    response = text_model.predict(prompt)
    return( response.text)


