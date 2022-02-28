import { atom, selector } from "recoil";


export const todoListState = atom<CardItem[]>({
    key: 'todoListState',
    default: [],
});


export interface CardItem {
    key: number,
    todo: string,
    isComplete: boolean,
}


export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All'
})

export const filteredToDoListState = selector({
    key: 'filteredToDoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isComplete);
            case 'ShowUncompleted':
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
       const totalUncompleted = todoList.filter((item) => item.isComplete!).length;
       const percentCompleted = total === 0 ? 0 : totalCompleted / total * 100;

       return {
           total,
           totalCompleted,
           totalUncompleted,
           percentCompleted
       };
    },
});

// export const val = selector({
//     // key: 'val',
//     // get: ({get}) => ({
//     //     total: get(todoListState).length,
//     //     completed.get(todoListState).filter((todo))
//     // }),
// })