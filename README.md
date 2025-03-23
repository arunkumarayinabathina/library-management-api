Library Management 
This is a full-stack API for managing books, faculty details, and authors using Node.js, Express, and MongoDB.

---

📌 Features

✅ Fetch books with name, author, published year, and rent per day.
✅ Fetch faculty details.
✅ Fetch authors along with the books they have written.
✅ Easily test API using Postman.

---

🛠 Installation & Setup (Local Testing)

1️⃣ Clone the Repository

```
  git clone https://github.com/arunkumarayinabathina/library-management-api.git
  cd library-management-api
```

2️⃣ Install Dependencies
```
  npm install
```

3️⃣ Create a .env File

Inside the project root, create a .env file and add your MongoDB URI:

```
  MONGO_URI=your_mongodb_connection_string
  PORT=5000

```

👉 Get your MongoDB URI from MongoDB Atlas.

---

🚀 Running the API Locally

npm start

Server will start at: http://localhost:5000

---

📡 API Endpoints & Testing

📚 Books API

👉 Example POST /api/books Request Body:

{
  "name": "Node.js Guide",
  "author": "John Doe",
  "publishedYear": 2022,
  "rent": "10 INR/day"
}


---

👨‍🏫 Faculty API

👉 Example POST /api/faculty Request Body:

{
  "name": "some_X",
  "department": "Computer Science"
}


---

📝 Author API

👉 Example GET /api/authors :

Result:

{
  "name": "John Doe",
  "bio": "Tech writer",
  "books": ["Node.js Guide"]
}


---

🛠 Testing with Postman

1. Open Postman.


2. Send GET requests to http://localhost:5000/api/books.


3. Send POST requests with JSON bodies to add data.


---

📌 Technologies Used

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ORM)

Environment Variables: dotenv


---

📜 License

This project is open-source. Feel free to use and modify it! 🚀


---

Let me know if you need any improvements!
