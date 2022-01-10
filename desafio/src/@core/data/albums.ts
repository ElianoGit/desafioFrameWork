export interface IResourceAlbum {
    userId: number
    id: number
    title: string
}

export abstract class AlbumData {
    abstract getAlbums(): void;
    abstract dispose(): void;
}