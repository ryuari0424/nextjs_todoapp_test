"use client";
import { useState, useEffect, useMemo } from "react";
import { TodoInputForm } from "../components/todo/TodoInput";
import { TodoFilter } from "../components/todo/TodoFilter";
import { TodoList } from "../components/todo/TodoList";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useTodoStore, VisibilityFilter, VisibilityFilters } from "../lib/store";


export default function TodoApp() {
  const { todos, addTodo, toggleTodo, deleteTodo, visibilityFilter, setVisibilityFilter, sortTodosByDueDate } = useTodoStore();
  const [newTodoText, setNewTodoText] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

const filteredTodos = todos.filter((todo) => {
  if(visibilityFilter === VisibilityFilters.SHOW_COMPLETED){
    return todo.completed;
  }
  if(visibilityFilter === VisibilityFilters.SHOW_IMCOMPLETED){
    return !todo.completed;
  }
  return true;
})

  if (!isMounted) {
    return null;
  }

  return (
    <main className="container mx-auto max-w-2xl p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Todo App</CardTitle>
        </CardHeader>
        <CardContent>
          <TodoInputForm />
          <TodoFilter
            visibilityFilter={visibilityFilter}
            setVisibilityFilter={setVisibilityFilter}
            sortTodosByDueDate={sortTodosByDueDate}
          />
          <TodoList
            todos={filteredTodos}
            visibilityFilter={visibilityFilter}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />

        </CardContent>
      </Card>
    </main>
  );
}
