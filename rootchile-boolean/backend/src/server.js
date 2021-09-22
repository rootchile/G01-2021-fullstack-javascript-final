const express = require('express')
const admin = require('firebase-admin')
const Models = require('./models')

const app = express()
const port = process.env.PORT
const environment = process.env.NODE_ENV

var serviceAccount = require('../firebase-service-account.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

app.use('/api', (request, response, next) => {
  const headerToken = request.headers.authorization;
  if (!headerToken) {
    return response.status(401).json({ message: 'No token provided' })
  }
  
  const [authorizationType, tokenValue] = headerToken.split(' ')

  if (headerToken && authorizationType.toLowerCase() !== 'bearer') {
    return response.status(401).json({ message: 'Invalid token' })
  }
  admin
    .auth()
    .verifyIdToken(tokenValue)
    .then(() => next())
    .catch((error) => {
      console.error(error.message)
      response.status(403).json({ message: 'Could not authorize' })
    })
})

app.use('/api/products', async (request, response) => {
  let statusCode = 200
  const Product = Models.Product;
  
  try {
    const products = await Product.findAll()

    console.log(`GET with status code ${statusCode} in /api/products endpoint`);

    return response
      .status(statusCode)
      .json(products)

  } catch (error) {
    const { message } = error;
    statusCode = 500;

    console.error(`GET with status code ${statusCode} in /api/products endpoint. Error: ${message}`)
    
    return response
      .status(statusCode)
      .json({ message })
  }
})

app.listen(port, () => {
  console.log(`App server listening in mode ${environment} on port ${port}`);
})
