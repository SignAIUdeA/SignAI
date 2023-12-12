from fastapi import APIRouter, Header, Response
from fastapi.responses import StreamingResponse
from os import getcwd

router = APIRouter(prefix="/streaming", tags=["Streaming"])

PORTION_SIZE = 1024 * 1024

current_directory = getcwd() + "/storage/videos/"


@router.get("/video/{name}")
def get_video_streaming(name: str):
    headers = {
        'Content-Type': 'video/mp4',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
    }
    try:
        vide_path = current_directory + name
        return StreamingResponse(open(vide_path, "rb"), headers=headers)
    except Exception as e:
        return Response(content=str(e), status_code=500)
