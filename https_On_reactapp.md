
openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365

openssl rsa -in keytmp.pem -out key.pem


Now change the start script in the package.json file to:

"start": "export HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem react-scripts start",

VIEJO ->     "start": "HTTPS=true react-scripts start",


NUEVO -> "start": "export HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem react-scripts start",

