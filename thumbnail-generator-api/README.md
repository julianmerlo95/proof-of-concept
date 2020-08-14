# PoC: Thumbnail Generator API
When we clone the repository, we must install the project dependencies with `npm install or npm i` in the root of the folder thumbnail-generator-api. Once the dependencies are installed, we can run `npm run start or npm start` in the root of the folder thumbnail-generator-api.

The command `npm run start or npm start` start the dynamodb, s3 and server thanks to a scripts in ./scripts/index.


# Ports
  - Serverless: http://localhost:9090 
  - S3: 9000
  - Dynamodb: 8000  

# Environment Variables
  - ENV
  - SERVICE
  - REGION 
  - IMAGE_TABLE
  - LAMBDA_S3
  - BUCKET
  - ACCESS_KEY
  - SECRET_KEY