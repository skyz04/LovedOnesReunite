from motor.motor_asyncio import AsyncIOMotorClient
import os

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGO_URL)

db = client["findkind_db"]
missing_collection = db["missing_reports"]
image_uploads_collection = db["image_uploads"]
sightings_collection = db["sighting_reports"]
