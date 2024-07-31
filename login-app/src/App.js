import React, { useState } from 'react';
import LoginForm from './LoginForm';
import OneBox from './OneBox';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            {isLoggedIn ? (
                <OneBox />
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
