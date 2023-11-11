#create a fastapi server
from fastapi import FastAPI,File, UploadFile
import shutil
from pydantic import BaseModel
import os
from functions import transcribe_speech,translate_text,convert_webm_to_wav,llmcall
from pydub import AudioSegment
import io

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    # Add your frontend URL(s) here
    "http://localhost",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["OPTIONS", "GET", "POST", "PUT", "DELETE"],  # Add other allowed methods as needed
    allow_headers=["*"],
)

class Item(BaseModel):
    file : UploadFile = File(...)

llm_output = ""  # Global variable to store LLM output
# create a route for the root endpoint
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/translate")
async def translate(file: UploadFile = File(...)):
    # # Save the file in the backend
    global llm_output
    file_location = f"temp.{file.filename.split('.')[-1]}"
    with open(file_location, "wb+") as dest_file:
        shutil.copyfileobj(file.file, dest_file) 

     # Example usage
    mp3_file_path = r"C:\Users\A lan John Chacko\tinkhack-team-beta\backend\temp.webm"
    wav_file_path = r"C:\Users\A lan John Chacko\tinkhack-team-beta\backend\temp.wav"
    convert_webm_to_wav(mp3_file_path, wav_file_path)
    text = transcribe_speech(wav_file_path)
    translated_text = translate_text(text)  # Translate the transcribed text

    llm_output = llmcall(translated_text)
    return {"text": text}
    # last=llmcall(output)
    # print(last)

# prompt = translate_text()
@app.get("/llm-output")
async def output():
    global llm_output  # Use the global variable
    if not llm_output:
        return {"text":"error"}
    # JSONResponse(content={"error": "LLM output not available"}, status_code=400)
    return {"output":llm_output}