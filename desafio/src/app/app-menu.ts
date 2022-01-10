export interface IMenuItem {
    item: string
    icon: string
    link: string
}

export const MENU_ITENS: Array<IMenuItem> = [
    {"item": "Albums", "icon": "photo_album", "link": "albums"},
    {"item": "Posts", "icon": "create", "link": "posts"},
    {"item": "ToDos", "icon": "list", "link": "todos"}
]