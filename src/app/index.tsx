import { useEffect, useMemo, useState } from 'react'
import prism from 'prismjs'

import {
  Container,
  ContentWrapper,
  Content,
  FormattedArea,
  FormatButton,
  Warning,
  Label,
} from './styles'

export interface ContentAreaProps {
  id: string
  value?: string
  onChange?: (text: string) => void
  style?: React.CSSProperties | undefined
}

function ContentArea({ id, value, onChange, style }: ContentAreaProps) {
  return (
    <ContentWrapper>
      <Content
        id={id}
        value={value}
        onChange={event => onChange && onChange(event.target.value)}
        spellCheck="false"
        rows={10}
        style={style}
      />
    </ContentWrapper>
  )
}

function validateJSON(text: string): boolean {
  try {
    formatJSON(text)
    return true
  } catch {
    return false
  }
}

function formatJSON(text: string): string {
  return JSON.stringify(JSON.parse(text), null, '  ')
}

export default function App() {
  const [textInput, setTextInput] = useState('')
  const [isValid, setIsValid] = useState<boolean>()
  const [formatted, setFormatted] = useState('')

  const finalFormattedJSON = useMemo(
    () =>
      formatted !== ''
        ? prism.highlight(formatted, prism.languages.javascript, 'javascript')
        : '',
    [formatted]
  )

  return (
    <Container>
      <Label htmlFor="json-input">Paste your JSON:</Label>
      <ContentArea
        id="json-input"
        style={textInput !== '' && !isValid ? { color: 'tomato' } : {}}
        value={textInput}
        onChange={text => {
          const isValid = validateJSON(text)
          setIsValid(isValid)
          setFormatted(formatted => (!isValid ? '' : formatted))
          setTextInput(text)
        }}
      />
      <FormatButton
        disabled={textInput === '' || !isValid}
        onClick={() => setFormatted(formatJSON(textInput))}
      >
        Format
      </FormatButton>
      {finalFormattedJSON !== '' && isValid && (
        <FormattedArea
          dangerouslySetInnerHTML={{ __html: finalFormattedJSON }}
        />
      )}
      {textInput !== '' && !isValid && (
        <Warning>The text entered is not a valid JSON</Warning>
      )}
    </Container>
  )
}
