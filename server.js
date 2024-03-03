// server.js
const express = require('express');
const cors = require('cors');
const next = require('next');
const axios = require('axios');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const server = express();

    // Enable CORS for all routes
    server.use(cors());
    server.use(express.json());

    // Login into account
    server.post('/api/login', async (req, res) => {
        try {
            // Make a GET request to another server on port 8181
            let { email, password } = req.body;
            console.log(email, password);
            const response = await axios.post('https://ngafid.ord/login', null, {
                params: { "email": email, "password": password },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then((response) => {

                // const { status, data } = response;

                // if (status == 200) {
                //     const { loggedIn } = data;
                    

                //     if (loggedIn) {
                //         res.redirect('/welcome');
                //     }
                // }
                
                res.json(response.data);
            })

        } catch (error) {
            console.error('Error making request to port 8181:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
    // Create Account Call
    server.post('/api/create_account', async (req, res) => {
        try {
            // Make a GET request to another server on port 8181
            let { email, password } = req.body;
            console.log(email, password);
            const response = await axios.post('http://localhost:8181/login', null, {
                params: { "email": email, "password": password },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then((response) => {
                res.json(response.data);
            })

        } catch (error) {
            console.error('Error making request to port 8181:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    // Forgot password Call
    server.post('/api/forgot_password', async (req, res) => {
        try {
            // Make a GET request to another server on port 8181
            let { email, password } = req.body;
            console.log(email, password);
            const response = await axios.post('http://localhost:8181/forgot_password', null, {
                params: { "email": email },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then((response) => {
                res.json(response.data);
            })

        } catch (error) {
            console.error('Error making request to port 8181:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    server.get('/api/getfleetid', async (req, res) => {
        try {
            // Make a GET request to another server on port 8181
            let { email, password } = req.body;
            console.log(email, password);
            const response = await axios.get('http://localhost:8181/v2/getfleetid', null, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then((response) => {
                res.json(response.data);
            })

        } catch (error) {
            console.error('Error making request to port 8181:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    // Default route for Next.js pages
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});