// src/editor.js

import React, { useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

function Editor() {
    useEffect(() => {
        const quill = new Quill('#editor', {
            theme: 'snow',
        });
    }, []);

    return <div id="editor" style={{ height: '300px' }}></div>;
}

export default Editor;
