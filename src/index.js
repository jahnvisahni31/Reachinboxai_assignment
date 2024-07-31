const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'your_secret_key';

// Mock Data
let oneboxThreads = [
    { id: 1, subject: 'Thread 1', body: 'This is thread 1' },
    { id: 2, subject: 'Thread 2', body: 'This is thread 2' }
];

// Mock User
const user = { email: 'test@example.com', password: 'password' };

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === user.email && password === user.password) {
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.get('/onebox/list', (req, res) => {
    res.json(oneboxThreads);
});

app.get('/onebox/:thread_id', (req, res) => {
    const thread = oneboxThreads.find(t => t.id === parseInt(req.params.thread_id));
    if (thread) {
        res.json(thread);
    } else {
        res.status(404).json({ error: 'Thread not found' });
    }
});

app.delete('/onebox/:thread_id', (req, res) => {
    oneboxThreads = oneboxThreads.filter(t => t.id !== parseInt(req.params.thread_id));
    res.json({ success: true });
});

app.post('/reply/:thread_id', (req, res) => {
    const { from, to, subject, body } = req.body;
    // Mock reply sending
    res.json({ success: true, from, to, subject, body });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
