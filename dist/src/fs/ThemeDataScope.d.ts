declare type DOMAIN_THEME_ROOT_DATA = Array<THEME_DIR>;
export interface THEME_DIR {
    type: 'folder' | 'file';
    name: string;
    data: Array<THEME_DIR> | THEME__FILE__SCHEMA;
}
interface THEME__FILE__SCHEMA {
    id?: string;
    public_url?: string;
    value: string;
    checksum?: string;
}
declare class ThemeDataScope {
    rootData: DOMAIN_THEME_ROOT_DATA;
    constructor();
    getTpl(tplPath: string): string;
}
export default ThemeDataScope;
