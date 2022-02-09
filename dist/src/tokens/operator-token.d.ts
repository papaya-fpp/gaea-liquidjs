import { Token } from './token';
export declare const precedence: {
    '==': number;
    '!=': number;
    '>': number;
    '<': number;
    '>=': number;
    '<=': number;
    'contains': number;
    'and': number;
    'or': number;
};
export declare class OperatorToken extends Token {
    input: string;
    begin: number;
    end: number;
    file?: string;
    operator: string;
    constructor(input: string, begin: number, end: number, file?: string);
    getPrecedence(): any;
}
