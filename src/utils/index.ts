export const TAB_WIDTH = '  '

export function formatJSON(text: string): string {
  return JSON.stringify(JSON.parse(text), null, TAB_WIDTH)
}

export function validateJSON(text: string): boolean {
  try {
    formatJSON(text)
    return true
  } catch {
    return false
  }
}
