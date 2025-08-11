import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale/ja';
import { cn } from '../../lib/utils';
import { useTodoStore } from '../../lib/store';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

// カレンダーアイコン（SVG）
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
);

export const TodoInputForm = () => {
    const addTodo  = useTodoStore(state => state.addTodo);
    const [newTodoText, setNewTodoText] = useState('');
    const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
    const handleAddTodo = () => {
        if(newTodoText.trim() === "") return;
        addTodo(newTodoText, dueDate ?? null);
        setNewTodoText("");
        setDueDate(undefined);
    }

    return (
        <div className="flex gap-2 mb-6">
            <Input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="新しいTodoを入力..."
                className="flex-grow"
                onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
            />
            <Button onClick={handleAddTodo}>追加</Button>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-auto justify-start text-left font-normal", !dueDate && "text-muted-foreground")}>
                        <CalendarIcon />
                        <span className="ml-2">
                            {dueDate ? format(dueDate, "yyyy年M月d日") : <span>期日を選択</span>}
                        </span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={dueDate}
                        onSelect={setDueDate}
                        locale={ja}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};
