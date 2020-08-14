# PoC: Thumbnail Generator API
When we clone the repository, we must install the project dependencies with `npm install or npm i` in the root of the folder thumbnail-generator-api. 
Once the dependencies are installed, we can run `sls dynamodb install` to install dynamodb Local.
After we can run `npm run start or npm start` to run server and dynamodb local.


The command `npm run start or npm start` start the dynamodb and server thanks to a scripts in ./scripts/index.


# Ports
  - Serverless: 9090 
  - Dynamodb: 8000  

# Environment Variables
  - ENV
  - SERVICE
  - REGION 
  - IMAGE_TABLE

# curl
`curl -X POST \
  http://localhost:9090/develop/api/images \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 74fb3ea7-7ee9-4e11-a1d9-ca96cd71e356' \
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