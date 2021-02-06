import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from './test-utils'
import App from '../app'

const INVALID_JSON = '{'
const VALID_JSON = '{ "one": 1, "two": "2" }'

test('should display invalid json warning', async () => {
  renderWithTheme({ ui: <App /> })

  await waitFor(() => expect(screen.getByText('Paste your JSON:')).toBeInTheDocument())

  userEvent.type(screen.getByLabelText('Paste your JSON:'), INVALID_JSON)

  expect(screen.getByText('The text entered is not a valid JSON')).toBeInTheDocument()

  expect(screen.getByRole('button', { name: 'Format' })).toBeDisabled()
})

test('should format valid json', async () => {
  renderWithTheme({ ui: <App /> })

  await waitFor(() => expect(screen.getByText('Paste your JSON:')).toBeInTheDocument())

  userEvent.type(screen.getByLabelText('Paste your JSON:'), VALID_JSON)

  expect(screen.getByRole('button', { name: 'Format' })).toBeEnabled()

  expect(screen.queryByText('The text entered is not a valid JSON')).not.toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'Format' }), { button: 0 })
})
