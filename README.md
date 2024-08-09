# ReachInbox Web App

This project is a web application developed as part of the ReachInbox.ai assignment. The application includes user authentication, a onebox interface for managing emails, and a custom text editor for composing replies.

live demo: 
https://reachinbox-seven.vercel.app/

## Features

- **Login Page**: A user-friendly login interface as per the provided design.
- **Onebox Screen**: After successful login, users are directed to the Onebox screen where they can manage their emails.
- **Data Fetching**: The application integrates with APIs to fetch email data and perform operations like viewing, deleting, and replying to emails.
- **Keyboard Shortcuts**: Implemented keyboard shortcuts for efficient navigation:
  - **D**: Deletes the selected email thread.
  - **R**: Opens the reply box for the selected email thread.
- **Custom Text Editor**: A text editor for composing replies with additional buttons for "SAVE" and "Variables".
- **Reply Functionality**: Users can reply to emails, sending data via the API.
- **Light and Dark Mode**: A toggle feature allowing users to switch between light and dark themes.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

## API Endpoints
The application interacts with the following API endpoints:

Login: /google-login
Fetch Onebox List: /onebox/list
Fetch Email Thread: GET /onebox/:thread_id
Delete Email Thread: DELETE /onebox/:thread_id
Reply to Email: POST /reply/:thread_id


### Design Reference
The design files can be accessed at the following link:

[Figma Design File](https://www.figma.com/file/uECxqvFhEx9dn4ZuO7wqmu/Reachinbox-Assignment?type=design&node-id=0-1&mode=design)


