'use strict'
import { createSecureServer } from 'http2'
import { readFileSync } from 'fs'
import { join } from 'path'

const HTTP2_PORT = process.env.PORT || 443

const options = {
  key: readFileSync(join(__dirname, 'resources/ssl/key.pem')),
  cert: readFileSync(join(__dirname, 'resources/ssl/cert.pem'))
}

const server = createSecureServer(options, (req, res) => {
  console.log(`url: ${req.url}`)
  console.log(`protocol: HTTP${req.httpVersionMajor}`)
  console.log(`host: ${req.headers.host}`)
  console.log(`method: ${req.method}`)
  console.log(`headers: ${JSON.stringify(req.headers)}`)
  res.setHeader('content-type', 'text/html')
  res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>HTTP2</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>`)
  res.end()
})

// const server = http2.createSecureServer(options, app);

server.listen(HTTP2_PORT, (err) => {
  if (err) throw err
  console.log(`server is running on port ${HTTP2_PORT}`)
})
