const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

/* Middleware */
app.use(cors());
app.use(express.json());

/* Routes - Create a todo */
app.post("/todos", async (req, res) => {
  try {
    const { description, title } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description, title) VALUES($1, $2) RETURNING *",
      [description, title]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

/* Routes - Get all todos */
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    console.log("GET /todos");
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

/* Routes - Get a todo */
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

/* Routes - Update a todo */
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description, title } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1, title = $2 WHERE id = $3",
      [description, title, id]
    );
    res.json("Todo was updated.");
  } catch (error) {
    console.log(error.message);
  }
});

/* Routes - Delete a todo */
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [
      id,
    ]);
    res.json("Todo was deleted.");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
