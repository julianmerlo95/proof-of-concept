# PoC: Thumbnail Generator API
# User Manual
Step 1: When we clone the repository, we must install the project dependencies with `npm install or npm i` in the root of the folder thumbnail-generator-api. 

Step 2: Once the dependencies are installed, we can run `sls dynamodb install` to install dynamodb local. 
affter we can run `npm run start or npm start`

Step 3:The command `npm run start or npm start` start the dynamodb and server thanks to a scripts in ./scripts/index.


## Ports
  - Serverless: 9090 
  - Dynamodb: 8000  

## Environment Variables
  - ENV
  - SERVICE
  - REGION 
  - IMAGE_TABLE
  - ACCESS_KEY
  - SECRET_KEY

## Curl
`
curl -X POST \
  http://localhost:9090/develop/api/images \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: e04221cc-7940-4bca-9603-347493c4f9a8' \
  -H 'cache-control: no-cache' \
  -d '{
    "arrayImages":[
    {
      "size": 1,
      "type": "image/png",
      "path": "image-asdasd-sdgdg-asdasd.png"
    },
    {
      "size": 1,
      "type": "image/png",
      "path": "iamge-asdasdfddgfgfgh-ghghyh.png"
    }
  ]
}'

`
