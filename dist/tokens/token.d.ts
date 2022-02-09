import { TokenKind } from '../parser/token-kind';
export declare abstract class Token {
    kind: TokenKind;
    input: string;
    begin: number;
    end: number;
    file?: string;
    constructor(kind: TokenKind, input: string, begin: number, end: number, file?: string);
    getText(): string;
    getPosition(): number[];
    size(): number;
}
