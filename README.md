# Number-Classification-API for HNG Stage0 Task

## Description:
This is a public API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

## Resources:
- Fun fact API: http://numbersapi.com/#42
- https://en.wikipedia.org/wiki/Parity_(mathematics)

### Setup Instructions:
**To Run the Project Locally:**
1. Clone the repository using: `git clone https://github.com/Abdulbaasiterinkitola/Number-Classification-API`
2. Change to the project directory using: `cd Number-Classification-API`
3. Install the required dependencies using: `npm install`
4. Create a .env file and specify in it the port you want the server to run on. For example, after using `touch .env` in your terminal to create the .env file, you can specify the port as: PORT = 3000
5. Run the API using: `node index.js`


**To Test the API with Postman:**
1. Install Postman if you haven't already.
2. Send a GET request with the URL as http://localhost:3000/api/classify-number?number={n}:
   - Method: GET
   - URL: http://localhost:3000/api/classify-number?number={n}
   Replace {n} with any number of your choice before sending the GET request.


## API Documentation

**Endpoint**: GET https://number-classification-api-pac1.onrender.com/api/classify-number?number={n}
   Replace {n} with any number of your choice.


## Response format:

**Required JSON Response Format (200 OK):**

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
```
**Required JSON Response Format (400 Bad Request):**

```json
{
    "number": "alphabet",
    "error": true
}
```

#### Example Usage:

**Endpoint URL**: https://number-classification-api-pac1.onrender.com/api/classify-number?number=153

**Response**:
```json
{
  "number": 153,
  "is_prime": true,
  "is_perfect": false,
  "properties": [
    "armstrong",
    "odd"
  ],
  "digit_sum": 9,
  "fun_fact": "153 is a narcissistic number."
}
```

### Additional Backlink
To Hire a Nodejs Developer, use this: https://hng.tech/hire/nodejs-developers


### Deployment
This API is publicly deployed at: https://number-classification-api-pac1.onrender.com/
