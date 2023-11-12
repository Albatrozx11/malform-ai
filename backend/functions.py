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





import vertexai
from vertexai.preview.language_models import TextGenerationModel
from google.auth import default
from google.auth.transport.requests import Request


try:
    credentials, _ = default()
except Exception as e:

    credentials = None

if credentials is None or not credentials.valid:
    if credentials and credentials.expired and credentials.refresh_token:
        credentials.refresh(Request())
    else:
     
        credentials, _ = default(scopes=['https://www.googleapis.com/auth/cloud-platform'])



vertexai.init(project="kinetic-octagon-404610", location="us-central1")


text_model = TextGenerationModel.from_pretrained("text-bison-32k")
parameters = {
    "max_output_tokens": 2048,
    "temperature": 0.5,
    "top_p": 0.8,
    "top_k": 40
}
def llmcall(prompt):
    response = text_model.predict(prompt, **parameters)
    return( response.text)


