import { Button } from '../ui/button';
import { VisibilityFilter, VisibilityFilters } from '@/lib/store';

type todoFiltrsProps = {
    visibilityFilter: VisibilityFilter;
    setVisibilityFilter: (filter: VisibilityFilter) => void;
    sortTodosByDueDate: () => void;
}

export const TodoFilter = ({ visibilityFilter, setVisibilityFilter, sortTodosByDueDate }: todoFiltrsProps) => {
    return (
        <div className="flex justify-center gap-2 mb-6">
            <Button variant={visibilityFilter === VisibilityFilters.SHOW_ALL ? "default" : "outline"}
                onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ALL)}>
                全て
            </Button>
            <Button variant={visibilityFilter === VisibilityFilters.SHOW_COMPLETED ? "default" : "outline"}
                onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}>
                完了済み
            </Button>
            <Button variant={visibilityFilter === VisibilityFilters.SHOW_IMCOMPLETED ? "default" : "outline"}
                onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_IMCOMPLETED)}>
                未完了
            </Button>
            <Button variant="outline" onClick={sortTodosByDueDate}>期日順</Button>
        </div>
    );
};


