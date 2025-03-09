export enum LANGUAGES {
    HTML = 'html',
    CSS = 'css',
    js = 'javascript',
    shortJs = "JS",
}

export enum STORAGE_NAMES {
    CODE = 'code',
}

export type PAYLOAD ={
    code: string;
    type: LANGUAGES;
};