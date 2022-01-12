const express = require('express');
const cors = require('cors');
const axios = require('axios');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const app = express();
const PORT = 4000;

app.use(cors());

const verifyJwt = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-hv5xcs-z.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'este es un campo unico',
    issuer: 'https://dev-hv5xcs-z.us.auth0.com/',
    algorithms: ['RS256'],
});

app.use(verifyJwt);

app.get('/', (req, res) => {
    res.send("Hola desde index route");
})

app.get('/protected', async(req, res) => {
    try {
        console.log(req.user);
        const accessToken = req.headers.autorzation.split('')[1];
        const userInfo = await axios.get('https://dev-hv5xcs-z.us.auth0.com/userinfo', {
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
        });
        console.log(userInfo);
        res.send(req.user);

    } catch (error) {
        console.log(error.message);
    }

})

app.use((requ, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Internal server error';

})

app.listen(PORT, () => {
    console.log(`Server Listening on Port${PORT}`);
})