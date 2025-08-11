
import { format } from "date-fns";
import { ja } from 'date-fns/locale/ja';

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from '../../lib/store';

type TodoItemProps = {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    isLastItem: boolean;
}

export const TodoItem = ({ todo, toggleTodo, deleteTodo, isLastItem }: TodoItemProps) => {
    return (
        <div className={`flex items-center justify-between p-4 ${!isLastItem ? 'border-b' : ''}`}>
            <div className="flex-glow">
                <div className="flex item-center">
                    <Checkbox id={`todo-${todo.id}`}
                        checked={todo.completed}
                        onCheckedChange={() => toggleTodo(todo.id)}
                        className="mr-4"
                    />
                    <label htmlFor={`todo-${todo.id}`}
                        className={`text-base font-medium ${todo.completed ? "line-through text-muted-foreground" : "text-primary"}`}>
                        {todo.text}
                    </label>
                </div>
                {todo.dueDate && (
                    <p className="ml-8 text-sm text-muted-foreground">
                        期日：{format(new Date(todo.dueDate), "PPP", { locale: ja })}
                    </p>
                )}
            </div>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTodo(todo.id)}
                aria-label="Delete todo"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke=
                    "currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 
      6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6" /><path d="M14 
      11v6"/></svg>
            </Button>
        </div>
    );
};

