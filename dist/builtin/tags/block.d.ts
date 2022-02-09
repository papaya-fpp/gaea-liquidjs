import { BlockDrop } from '../../drop/block-drop';
import { TagToken, TopLevelToken, Context, TagImpl, Emitter } from '../../types';
declare const _default: {
    parse(this: TagImpl, token: TagToken, remainTokens: TopLevelToken[]): void;
    render(this: TagImpl, ctx: Context, emitter: Emitter): Generator<any, void, unknown>;
    getBlockRender(this: TagImpl, ctx: Context): (superBlock: BlockDrop) => any;
    emitHTML(this: TagImpl, ctx: Context, emitter: Emitter, blockRender: (block: BlockDrop) => string): Generator<string, void, any>;
};
export default _default;
