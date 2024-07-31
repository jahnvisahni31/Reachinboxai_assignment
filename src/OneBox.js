import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Onebox = () => {
    const [threads, setThreads] = useState([]);
    const [selectedThread, setSelectedThread] = useState(null);
    const history = useHistory();
    useEffect(() => {
        fetchThreads();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'D' && selectedThread) {
                handleDelete(selectedThread.id);
            } else if (event.key === 'R' && selectedThread) {
                handleReply(selectedThread.id);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedThread]);

    const fetchThreads = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/onebox/list', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setThreads(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (threadId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/onebox/${threadId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchThreads();
        } catch (error) {
            console.error(error);
        }
    };

    const handleReply = (threadId) => {
        history.push(`/reply/${threadId}`);
    };


    return (
        <div>
            <h2>Onebox</h2>
            <ul>
                {threads.map(thread => (
                    <li key={thread.id} onClick={() => setSelectedThread(thread)}>
                        {thread.subject}
                        <button onClick={() => handleDelete(thread.id)}>Delete</button>
                        <button onClick={() => handleReply(thread.id)}>Reply</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Onebox;

