import { NormalizedFullOptions } from '../liquid-options';
import { Scope } from './scope';
export declare class Context {
    private scopes;
    private registers;
    environments: Scope;
    globals: Scope;
    sync: boolean;
    opts: NormalizedFullOptions;
    constructor(env?: object, opts?: NormalizedFullOptions, sync?: boolean);
    getRegister(key: string, defaultValue?: {}): any;
    setRegister(key: string, value: any): any;
    saveRegister(...keys: string[]): [string, any][];
    restoreRegister(keyValues: [string, any][]): void;
    getAll(): any;
    get(paths: string[]): object;
    getFromScope(scope: object, paths: string[] | string): object;
    push(ctx: object): number;
    pop(): Scope;
    bottom(): Scope;
    private findScope;
    private isHexColor;
    private hexToRgba;
}
export declare function readProperty(obj: Scope, key: string): any;
