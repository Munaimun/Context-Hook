# 📚 Books Management App (React + Context API)

This project is a **React-based Books Management Application** that uses **Context API** to manage state efficiently. It provides functionality to **fetch, add, update, and delete books** from a backend API.

## 🚀 Features
- 📖 **Fetch Books** – Retrieves books from a backend API.
- ➕ **Add Book** – Allows users to add a new book.
- ✏️ **Edit Book** – Enables users to update book details.
- ❌ **Delete Book** – Removes a book from the list.
- ⚡ **Optimized State Management** – Uses **Context API** for centralized state and `useCallback` for performance optimization.

## 🛠️ Tech Stack
- **React** (Hooks, Context API)
- **Axios** (For API requests)
- **JSON Server** (For local backend)

## 🔥 API Endpoints (Handled via JSON Server)

| Method | Endpoint     | Description          |
|--------|-------------|----------------------|
| GET    | `/books`    | Fetch all books      |
| POST   | `/books`    | Add a new book       |
| PUT    | `/books/:id` | Update a book by ID |
| DELETE | `/books/:id` | Delete a book by ID |
