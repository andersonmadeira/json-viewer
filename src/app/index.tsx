import { useEffect, useState } from 'react'
import prism from 'prismjs'

import {
  Container,
  ContentWrapper,
  Content,
  FormattedArea,
  FormatButton,
} from './styles'

export interface ContentAreaProps {
  value?: string
  onChange?: (text: string) => void
}

function ContentArea({ value, onChange }: ContentAreaProps) {
  return (
    <ContentWrapper>
      <Content
        value={value}
        onChange={event => onChange && onChange(event.target.value)}
        placeholder="Paste your JSON here"
        spellCheck="false"
        rows={10}
      />
    </ContentWrapper>
  )
}

export default function App() {
  const [text, setText] = useState('')
  const [formatted, setFormatted] = useState('')
  const [highlighted, setHighlighted] = useState('')

  useEffect(() => {
    setHighlighted(
      prism.highlight(formatted, prism.languages.javascript, 'javascript')
    )
  }, [formatted])

  return (
    <Container>
      <ContentArea value={text} onChange={text => setText(text)} />
      <FormatButton
        onClick={() =>
          setFormatted(
            JSON.stringify(JSON.parse(text), null, '  ').replace(
              /"(\w+)"\s*:/g,
              '$1:'
            )
          )
        }
      >
        Format
      </FormatButton>
      <FormattedArea dangerouslySetInnerHTML={{ __html: highlighted }} />
    </Container>
  )
}
