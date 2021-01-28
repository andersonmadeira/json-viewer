import React, {useCallback} from 'react'
import {FiSearch} from 'react-icons/fi'

import { Container } from './styles'

const SearchArea: React.FC = () => {
  const handleWithSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    const list = document.querySelectorAll('.css-1acecyi span')

    if(value !== ''){
      list.forEach(item => {
        const regex = new RegExp(value, 'gi')
        const text = item.textContent as string
        const has = text.match(regex)
  
        if (has){
          item.id = "red"
        } else {
          item.id = ""
        }
      })
    } else {
      list.forEach(item => item.id = "")
    }
  }, [])

  return (
    <Container>
      <input
        placeholder="Search..."
        onChange={event => handleWithSearch(event)}
        />
      
        <FiSearch color="#707070" size={20} />
    </Container>
  )
}

export default SearchArea