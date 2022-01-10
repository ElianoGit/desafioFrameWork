export interface IResourceToDo {
    userId: number
    id: number
    title: string
    completed: boolean
}

export abstract class TodoData {
    abstract getTodos(): void;
    abstract dispose(): void;
}