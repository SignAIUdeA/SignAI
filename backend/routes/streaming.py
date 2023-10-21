from fastapi import APIRouter, Header, Response
from os import getcwd, path

router = APIRouter(prefix="/streaming", tags=["Streaming"])

PORTION_SIZE = 1024 * 1024

current_directory = getcwd() + "/"


@router.get("/video/{name}")
def get_video(name: str, range: str = Header(None)):
    try:
        if range is not None:
            start, end = range.replace("bytes=", "").split("-")
            start = int(start)
            end = int(start) + PORTION_SIZE
        else:
            start = 0
            end = PORTION_SIZE

        print(current_directory)

        with open(current_directory + name, "rb") as myfile:
            myfile.seek(start)
            data = myfile.read(end - start)
            size_video = str(path.getsize(current_directory + name))

            headers = {
                'Content-Range': f'bytes {str(start)}-{str(end - 1)}/{size_video}',
                'Accept-Ranges': 'bytes',
                'Content-Type': 'video/mp4'
            }

            return Response(content=data, status_code=206, headers=headers, media_type="video/mp4")
    except Exception as e:
        return Response(content=str(e), status_code=500)
