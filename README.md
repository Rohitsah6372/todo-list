# Todo App

## Overview
This is a simple Todo List application built using React. The app allows users to add, view, and delete todos. It includes a Navbar, Footer, and components to manage todos efficiently.

## Features
- Add new todos with a title and description.
- View a list of all added todos.
- Delete a todo when it's completed.
- A responsive Navbar with a search icon.

## Technologies Used
- React.js
- Bootstrap (for styling)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/todo-app.git
   cd todo-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure
```
/todo-app
├── src
│   ├── Components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Todos.js
│   │   ├── TodoItem.js
│   │   ├── AddTodos.js
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## Components
- **Navbar.js**: Displays a navigation bar with a title and search functionality.
- **Footer.js**: Displays a footer section.
- **Todos.js**: Renders the list of todos.
- **TodoItem.js**: Displays a single todo item with a delete button.
- **AddTodos.js**: Provides a form to add new todos.
- **App.js**: Main component managing state and rendering all components.

## Usage
1. Click on **"ADD YOUR TODOS HERE"** button to reveal the form.
2. Enter the **Title** and **Description** of the todo.
3. Click on **"ADD YOUR TODOS HERE"** button to save the todo.
4. Click the **"Delete"** button next to a todo item to remove it.

## License
This project is open-source and available under the [MIT License](LICENSE).

