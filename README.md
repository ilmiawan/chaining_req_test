# chaining_req_test
This is only for testing purpose, a fake requests and response for testing monika chaining requests

## Installation
```script
git clone https://github.com/ilmiawan/chaining_req_test
cd chaining_req_test
npm install
```

## Run server 
```script
npm run start
```

## How to test
Get key token
```script
curl --request GET \
  --url http://localhost:3030/v1/get-key \
```

Verify token
```script
curl --request POST \
  --url http://localhost:3030/v1/verify/ \
  --header 'Authorization: 12342342443' \
}'
```
