// src/Onebox.js
import React, { useEffect } from 'react';
import { fetchThreads } from './api'; // Ensure this path is correct
import Editor from './editor'; // Ensure this path is correct
import './style.css'; // Ensure this path is correct

function Onebox() {
    useEffect(() => {
        fetchThreads();
    }, []);

    return (
        <div className="onebox">
            <h2>Onebox</h2>
            <div id="threadList"></div>
            <Editor />
            <button id="themeToggle">Toggle Theme</button>
        </div>
    );
}

export default Onebox;
