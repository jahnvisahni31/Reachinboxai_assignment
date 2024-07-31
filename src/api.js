// src/api.js

export const fetchThreads = async () => {
    try {
        const response = await fetch('/onebox/list');
        const data = await response.json();
        console.log(data); // Render this data in your Onebox component
    } catch (error) {
        console.error('Error fetching threads:', error);
    }
};

// You can add more API functions (e.g., deleteThread, etc.) here as needed
