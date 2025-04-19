from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse
from datetime import date
from uuid import uuid4
import os
import uvicorn
from bson import ObjectId
from utils.db import fs_bucket
import io
from bson import ObjectId
from utils.db import fs_bucket
from fastapi import UploadFile

from utils.db import missing_collection, image_uploads_collection, sightings_collection

app = FastAPI()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# async def save_uploaded_file(file: UploadFile) -> ObjectId:
async def save_uploaded_file(file: UploadFile) -> str:
    if not file or not file.filename:
        raise ValueError("Invalid file upload: filename is missing")

    contents = await file.read()

    # Wrap in a BytesIO stream
    stream = io.BytesIO(contents)

    # Upload to GridFS
    # file_id = await fs_bucket.upload_from_stream(file.filename, stream)
    file_id = str(uuid4())

    return file_id  # This is an ObjectId (not awaitable)


# Report missing: Someone you know
@app.post("/report-missing")
async def report_missing(
    photo: UploadFile = File(...),
    first_name: str = Form(...),
    last_name: str = Form(None),
    age: int = Form(...),
    height: float = Form(None),
    weight: float = Form(None),
    lat: float = Form(...),
    lon: float = Form(...),
    missing_since: date = Form(...),
    description: str = Form(...),
    reward: float = Form(None),
    phone_number: str = Form(...),
):
    photo_filename = await save_uploaded_file(photo)

    data = {
        "first_name": first_name,
        "last_name": last_name,
        "age": age,
        "height": height,
        "weight": weight,
        "last_seen_location": {"lat": lat, "lon": lon},
        "missing_since": str(missing_since),
        "description": description,
        "reward": reward,
        "phone_number": phone_number,
        "photo_filename": photo_filename,
    }

    # result = await missing_collection.insert_one(data)
    """
    return JSONResponse(
        content={
            "message": "Missing report submitted",
            "id": str(result.inserted_id),
            "data": data,
        }
    )
    """
    return JSONResponse(
        content={
            "message": "Missing report submitted",
            "id": "1",
            "data": data,
        }
    )


# Upload Poster for someone
@app.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    filename = await save_uploaded_file(file)

    # result = await image_uploads_collection.insert_one({"filename": filename})
    """
    return JSONResponse(
        content={
            "message": "Image uploaded",
            "filename": filename,
            "id": str(result.inserted_id),
        }
    )
    """
    return JSONResponse(
        content={
            "message": "Image uploaded",
            "filename": filename,
            "id": "1",
        }
    )


# Identify loved one
@app.post("/find-person")
async def find_person(
    photo: UploadFile = File(...),
    first_name: str = Form(None),
    last_name: str = Form(None),
    description: str = Form(...),
):
    photo_filename = await save_uploaded_file(photo)

    data = {
        "first_name": first_name,
        "last_name": last_name,
        "description": description,
        "photo_filename": photo_filename,
    }

    # result = await sightings_collection.insert_one(data)
    """
    return JSONResponse(
        content={
            "message": "Sighting report submitted",
            "id": str(result.inserted_id),
            "data": data,
        }
    )
    """
    return JSONResponse(
        content={
            "message": "Sighting report submitted",
            "id": "1",
            "data": data,
        }
    )


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
