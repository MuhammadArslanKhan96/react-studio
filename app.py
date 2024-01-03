import requests
from pydub import AudioSegment
from io import BytesIO


def fetch_audio_from_url(url):
    response = requests.get(url)
    if response.status_code == 200:
        audio_content = BytesIO(response.content)
        return AudioSegment.from_file(audio_content)
    else:
        print(f"Failed to fetch audio from URL: {url}")
        return None


def merge_audios_with_synchronized_timings(audio_urls, start_times, output_path):
    result = AudioSegment.silent(duration=0)

    for audio_url, start_time in zip(audio_urls, start_times):
        if(audio_url.startswith("http")):
            audio = fetch_audio_from_url(audio_url)
            if audio is not None:
                # Pad silent audio before the current audio file
                silence_before = AudioSegment.silent(duration=start_time)
                result += silence_before

                # Add the current audio file
                result += audio
        else:
            audio = AudioSegment.from_file(audio_url)
            if audio is not None:
                # Pad silent audio before the current audio file
                silence_before = AudioSegment.silent(duration=start_time)
                result += silence_before

                # Add the current audio file
                result += audio

    # Export the result to a new audio file
    result.export(output_path, format="mp3")


if __name__ == "__main__":
    # Replace with your actual audio URLs and start times
    audio_urls = [
        "audio1.wav",
        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-admiration.wav",
    ]
    start_times = [0, 0, 0]  # Start times in milliseconds
    output_audio_path = "output/synchronized_audio.mp3"

    merge_audios_with_synchronized_timings(audio_urls, start_times, output_audio_path)
