export class OpenTab {
    path: string;
    data?: any;
    title?: string;
    subtitle?: string;
    isCloseable: boolean;
    constructor(path: string, data?: any, title?: string, subtitle?: string, isCloseable: boolean = false) {
        this.path = path;
        this.data = data;
        this.title = title;
        this.subtitle = subtitle;
        this.isCloseable = isCloseable;
    }
}
