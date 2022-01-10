declare type DOMAIN_THEME_ROOT_DATA = Array<THEME_DIR>;
interface THEME_DIR {
    type: 'folder' | 'file';
    name: string;
    data: Array<THEME_DIR>;
}
declare class ThemeDataScope {
    rootData: DOMAIN_THEME_ROOT_DATA;
    constructor();
    getTpl(tplPath: string): string;
}
export default ThemeDataScope;
