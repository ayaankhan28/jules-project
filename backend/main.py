from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import sys
import os
from pathlib import Path

# Add parent directory to path to import main.py
sys.path.append(str(Path(__file__).parent.parent))
from food import create_food_tours

app = FastAPI(title="Food Tour Generator API")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CitiesRequest(BaseModel):
    cities: List[str]

class TourResponse(BaseModel):
    tours: str

@app.get("/")
async def read_root():
    return {"message": "Welcome to Food Tour Generator API"}

@app.post("/generate-tours", response_model=TourResponse)
async def generate_tours(request: CitiesRequest):
    try:
        # Call the existing create_food_tours function
        result = create_food_tours(request.cities)
        
        # Get the tours from the result
        tours = result.output.get("final_tours", "No tours generated")
        
        return TourResponse(tours=tours)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 