import { Container, ContentCard, ContentArea, FormatButton } from './styles'

function JSONArea() {
  return (
    <ContentCard>
      <ContentArea placeholder="Paste your JSON here" rows={10}>
        asdfasdf
      </ContentArea>
    </ContentCard>
  )
}

export default function App() {
  return (
    <Container>
      <JSONArea />
      <FormatButton>Format</FormatButton>
    </Container>
  )
}
