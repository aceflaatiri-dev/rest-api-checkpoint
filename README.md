# REST API Checkpoint Project

A simple REST API project built with Node.js and Express.  
This project demonstrates CRUD operations, environment configuration, and proper project structure.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Node.js + Express REST API
- CRUD operations (Create, Read, Update, Delete)
- Environment variables support via `.env`
- Modular project structure

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/aceflaatiri-dev/rest-api-checkpoint.git
cd rest-api-checkpoint
Install dependencies:

bash
Copy code
npm install
Create a .env file based on .env.example.

Usage
Start the server:

bash
Copy code
npm start
The API will run at:

arduino
Copy code
http://localhost:3000
Environment Variables
Create a .env file with the following variables:

ini
Copy code
PORT=3000
DB_URL=your_database_url
API_KEY=your_api_key
API Endpoints
Method	Endpoint	Description
GET	/api/items	Get all items
GET	/api/items/:id	Get a single item by ID
POST	/api/items	Create a new item
PUT	/api/items/:id	Update an existing item
DELETE	/api/items/:id	Delete an item

Contributing
Fork the repository

Create a new branch (git checkout -b feature-name)

Make your changes

Commit (git commit -m "Add feature")

Push (git push origin feature-name)

Open a Pull Request

License
This project is licensed under the MIT License.

yaml
Copy code
