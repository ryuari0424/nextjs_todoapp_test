import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
    dueDate: string | null;
}

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_IMCOMPLETED: "SHOW_IMCOMPLETED",
} as const;

export type VisibilityFilter = keyof typeof VisibilityFilters;

type State = {
    todos: Todo[];
    visibilityFilter: VisibilityFilter;
}

type Actions = {
    addTodo: (text: string, dueDate: Date | null) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    setVisibilityFilter: (filter: VisibilityFilter) => void;
    sortTodosByDueDate: () => void;
}

export const useTodoStore = create(
    persist<State & Actions>(
        (set) => ({
            todos: [],

            visibilityFilter: VisibilityFilters.SHOW_ALL,

            addTodo: (text, dueDate) =>
                set((state) => ({
                    todos: [
                        ...state.todos,
                        {
                            id: Math.random(),
                            text,
                            completed: false,
                            dueDate: dueDate ? dueDate.toISOString() : null
                        },
                    ],
                })),

            toggleTodo: (id) =>
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id
                            ? { ...todo, completed: !todo.completed }
                            : todo
                    ),
                })),

            deleteTodo: (id) =>
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id),
                })),
            setVisibilityFilter: (filter: VisibilityFilter) => set({ visibilityFilter: filter }),

            sortTodosByDueDate: () => set((state) => {
                const sortedTodos = [...state.todos].sort((a, b) => {
                    if (!a.dueDate && !b.dueDate) return 0;
                    if (!a.dueDate) return 1;
                    if (!b.dueDate) return -1;
                    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
                });
                return { todos: sortedTodos };
            }),
        }),
        {
            name: "todo-list-storage", // ローカルストレージのキー名
        }
    )
);
