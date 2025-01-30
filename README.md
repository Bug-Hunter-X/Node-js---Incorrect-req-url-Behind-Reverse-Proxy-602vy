# Node.js - Reverse Proxy Request Handling Bug

This repository demonstrates an uncommon bug in Node.js server applications running behind a reverse proxy. The issue arises when the `req.url` property in the request object doesn't contain the full URL path, leading to incorrect routing and potential 404 errors.

## The Problem

When a Node.js server sits behind a reverse proxy (e.g., Nginx, Apache), the proxy often modifies the incoming request before it reaches the server.  As a result, the `req.url` property might only contain the path relative to the proxy, omitting the base URL.

This can cause issues if your routing logic relies on the full URL path in `req.url`.

## Solution

The solution involves using the `req.originalUrl` property (provided by certain middleware, like express.js) or reconstructing the full URL from other request properties such as `req.protocol`, `req.hostname`, `req.originalUrl` and  `req.url`.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`
3. Run the server using `node bug.js`.
4. Observe that requests might not be handled correctly.  (You will need a reverse proxy set up to fully reproduce the issue)
5. Run the solution code `node bugSolution.js` to verify the fix. 