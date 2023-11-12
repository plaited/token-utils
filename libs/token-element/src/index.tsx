import { css, Component } from 'plaited'
import { stylesheets } from 'plaited/utils'

export const TokensTag = 'design-tokens'

const [_, defaultStylesheet] = css`
  :host {
    display: contents;
  }
`
export const getTokenElement = (stylesheet: { stylesheet: string }) => {
  return class DesignTokensElement extends Component({
    tag: TokensTag,
    template: <slot {...stylesheets(defaultStylesheet, stylesheet)}></slot>,
  }) {}
}
