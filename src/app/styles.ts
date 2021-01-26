import styled from '@emotion/styled'
import { Button, Card } from '../components'

export const Container = styled.main`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
`

export const ContentWrapper = styled(Card)`
  padding: 16px 24px;
`

export const FormattedArea = styled(Card)`
  white-space: pre-wrap;
  padding: 16px 24px;
`

export const Content = styled.textarea`
  width: 100%;
  z-index: 5;
  outline: none;
  display: block;
  border: 0;
  resize: none;
  border-radius: 8px;

  ::placeholder {
    text-align: center;
    font-size: 1.2rem;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`

export const FormatButton = styled(Button)`
  margin-top: 20px;
`

export const Warning = styled.p`
  color: tomato;
  font-weight: bold;
`

export const Label = styled.label`
  font-size: 1.2rem;
`
