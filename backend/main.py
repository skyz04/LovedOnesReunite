from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse
from datetime import date
from uuid import uuid4
import os

from db import missing_collection, image_uploads_collection, sightings_collection

app = FastAPI()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def save_uploaded_file(file: UploadFile) -> str:
    file_ext = file.filename.split(".")[-1]
    filename = f"{uuid4()}.{file_ext}"
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    with open(filepath, "wb") as buffer:
        buffer.write(file.file.read())
    return filename


# -----------------------
# Endpoint 1: Report Missing
# -----------------------
@app.post("/report-missing")
async def report_missing(
    photo: UploadFile = File(...),
    first_name: str = Form(...),
    last_name: str = Form(None),
    age: int = Form(...),
    height: float = Form(...),
    weight: float = Form(...),
    last_seen_location: str = Form(...),
    missing_since: date = Form(...),
    description: str = Form(...),
    reward: float = Form(None),
):
    photo_filename = save_uploaded_file(photo)

    data = {
        "first_name": first_name,
        "last_name": last_name,
        "age": age,
        "height": height,
        "weight": weight,
        "last_seen_location": last_seen_location,
        "missing_since": str(missing_since),
        "description": description,
        "reward": reward,
        "photo_filename": photo_filename,
    }

    result = await missing_collection.insert_one(data)

    return JSONResponse(
        content={
            "message": "Missing report submitted",
            "id": str(result.inserted_id),
            "data": data,
        }
    )


# -----------------------
# Endpoint 2: Image Upload
# -----------------------
@app.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    filename = save_uploaded_file(file)

    result = await image_uploads_collection.insert_one({"filename": filename})

    return JSONResponse(
        content={
            "message": "Image uploaded",
            "filename": filename,
            "id": str(result.inserted_id),
        }
    )


# -----------------------
# Endpoint 3: Find Person or Pet
# -----------------------
@app.post("/find-person")
async def find_person(
    photo: UploadFile = File(...),
    first_name: str = Form(None),
    last_name: str = Form(None),
    description: str = Form(...),
):
    photo_filename = save_uploaded_file(photo)

    data = {
        "first_name": first_name,
        "last_name": last_name,
        "description": description,
        "photo_filename": photo_filename,
    }

    result = await sightings_collection.insert_one(data)

    return JSONResponse(
        content={
            "message": "Sighting report submitted",
            "id": str(result.inserted_id),
            "data": data,
        }
    )
