import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'

import { GlobalStyles, theme } from '../../styles'

export interface RenderWithThemeProps {
  ui: React.ReactElement
  renderOptions?: Omit<RenderOptions, 'queries'>
}

export function renderWithTheme({ ui, renderOptions }: RenderWithThemeProps): RenderResult {
  const withTheme: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )

  return rtlRender(ui, { wrapper: withTheme, ...renderOptions })
}
