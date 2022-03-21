import { atom, RecoilValue, selector } from "recoil";

export interface CardItem {
    key: number,
    todo: string,
    isComplete: boolean,
}

export const todoListState = atom<CardItem[]>({
    key: 'todoListState',
    default: [],
});

export const todoListFilterState = atom<string>({
    key: 'todoListFilterState',
    default: 'Show All'
})

export const filteredToDoListState = selector<CardItem[]>({
    key: 'filteredToDoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);
        switch (filter) {
            case 'Completed':
                return list.filter((item) => item.isComplete);
            case 'Incomplete':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});


export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
       const todoList = get(todoListState);
       const total = todoList.length;
       const totalCompleted = todoList.filter((item) => item.isComplete).length;
       const totalIncomplete = todoList.filter((item) => !item.isComplete).length;
       const percentCompleted = total === 0 ? 0 : totalCompleted / total * 100;
       return {
           total,
           totalCompleted,
           totalIncomplete,
           percentCompleted
       };
    },
});