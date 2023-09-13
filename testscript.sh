#!/bin/bash

# 1. Data API App Id
appid="data-mzlem"

# 2. API Key
apikey="L5KZZjPwPMymF9plXpJvmB48eBpbgVXYUSttTeC50O0EZmCPPlVFXzwhLjuINz83"

# 3. Base URL
baseurl="https://data.mongodb-api.com/app/$appid/endpoint/data/v1"

# 4. Endpoint
endpoint="/action/find"

# 5. dataSource
dataSource="Cluster0"

# 6. database
database="jokeaday"

# 7. collection
collection="jokes"

# 8. filter
filter='{}'
# filter='{
#   "body": {
#     "$regex": "dad-a-base", 
#     "$options": "i"
#   } 
# }'

# 9. Run the curl request from the terminal: ./findOne.sh
curl -XPOST -H "api-key: $apikey" -H 'Access-Control-Request-Headers: *' -H 'Content-type: application/json' -d '{ 
  "dataSource": "'"$dataSource"'", 
  "database": "'"$database"'", 
  "collection": "'"$collection"'",
  "filter": '"$filter"'
}' $baseurl$endpoint | npx json