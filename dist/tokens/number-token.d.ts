import { Token } from './token';
import { IdentifierToken } from './identifier-token';
export declare class NumberToken extends Token {
    whole: IdentifierToken;
    decimal?: IdentifierToken;
    constructor(whole: IdentifierToken, decimal?: IdentifierToken);
}
