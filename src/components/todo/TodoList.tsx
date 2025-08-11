import { Todo, VisibilityFilter,VisibilityFilters, useTodoStore } from "@/lib/store";
import { TodoItem } from './TodoItem';

type TodoListProps = {
    todos: Todo[];
    visibilityFilter: VisibilityFilter;
    toggleTodo:(id:number ) => void;
    deleteTodo : (id:number) => void;
}

export const TodoList = ({ todos, visibilityFilter, toggleTodo, deleteTodo}: TodoListProps) => {
    return (
        <div className="border rounded-lg">
            {todos.length === 0 && (
                <p className="p-6 text-center text-muted-foreground">
                    {visibilityFilter === VisibilityFilters.SHOW_COMPLETED
                        ? "完了済みのTodoはありません。"
                        : visibilityFilter === VisibilityFilters.SHOW_IMCOMPLETED
                            ? "未完了のTodoはありません。"
                            : "Todoがありません。"}
                </p>
            )}

            {todos.map((todo,index) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    isLastItem={index === todos.length -1}
                />
            ))}
        </div>
    );
};
