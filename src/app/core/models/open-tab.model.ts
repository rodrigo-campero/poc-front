export class OpenTab {
    path: string;
    data?: any;
    title?: string;
    subtitle?: string;
    isCloseable: boolean;
    isExclusive: boolean;
    constructor(path: string, data?: any, title?: string, subtitle?: string, isCloseable: boolean = true, isExclusive = false) {
        this.path = path;
        this.data = data;
        this.title = title;
        this.subtitle = subtitle;
        this.isCloseable = isCloseable;
        this.isExclusive = isExclusive;
    }
}
