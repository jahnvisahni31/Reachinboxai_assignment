// src/components/Reply.js
import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Quill } from 'react-quill';

const Reply = () => {
    const { thread_id } = useParams();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSend = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(`http://localhost:5000/reply/${thread_id}`, {
                from: email,
                to: email,
                subject,
                body
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            history.push('/google-login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Reply</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <Quill value={body} onChange={setBody} />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Reply;
