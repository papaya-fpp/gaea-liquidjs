import assign from './assign'
import For from './for'
import capture from './capture'
import Case from './case'
import comment from './comment'
import include from './include'
import render from './render'
import decrement from './decrement'
import cycle from './cycle'
import If from './if'
import increment from './increment'
import layout from './layout'
import block from './block'
import raw from './raw'
import tablerow from './tablerow'
import unless from './unless'
import Break from './break'
import Continue from './continue'
import echo from './echo'
import form from './form'
import javascript from './javascript'
import style from './style'
import liquid from './liquid'
import { TagImplOptions } from '../../template/tag/tag-impl-options'

import section from './section'

const tags: { [key: string]: TagImplOptions } = {
  assign, 'for': For, capture, 'case': Case, comment, include, render, decrement, increment, cycle, 'if': If, layout, block, raw, tablerow, unless, 'break': Break, 'continue': Continue, echo, form, javascript, style, section, liquid
}

export default tags
