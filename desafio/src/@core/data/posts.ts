export interface IResourcePost {
    userId: number
    id: number
    title: string
    body: string
}

export abstract class PostData {
    abstract getPosts(): void;
    abstract dispose(): void;
}