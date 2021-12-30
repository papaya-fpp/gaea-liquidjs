import { Token } from '../tokens/token'
import { Template } from '../template/template'
import { isTagToken } from '../util/type-guards'
import { TopLevelToken } from '../tokens/toplevel-token'

type ParseToken<T extends Token> = ((token: T, remainTokens: T[]) => Template)

export class ParseStream<T extends Token = TopLevelToken> {
  private tokens: T[]
  private handlers: {[key: string]: (arg: any) => void} = {}
  private stopRequested = false
  private parseToken: ParseToken<T>

  public constructor (tokens: T[], parseToken: ParseToken<T>) {
    this.tokens = tokens
    this.parseToken = parseToken
  }
  public on<T2 extends Template | T | undefined> (name: string, cb: (arg: T2) => void): ParseStream<T> {
    this.handlers[name] = cb
    return this
  }
  private trigger <T extends Token | Template> (event: string, arg?: T) {
    const h = this.handlers[event]
    return h ? (h(arg), true) : false
  }
  public start () {
    this.trigger('start')
    let token: T | undefined
    while (!this.stopRequested && (token = this.tokens.shift())) {
      if (this.trigger('token', token)) continue
      if (isTagToken(token) && this.trigger(`tag:${token.name}`, token)) {
        continue
      }
      const template = this.parseToken(token, this.tokens)
      this.trigger('template', template)
    }
    if (!this.stopRequested) this.trigger('end')
    return this
  }
  public stop () {
    this.stopRequested = true
    return this
  }
}
