import styled from '@emotion/styled'


export const Container = styled.div`
  height: 40px;
  max-width: 220px;
  min-width: 140px;
  width: 100%;
  background-color: #fff;

  margin-top: 20px;
  margin-left: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  box-shadow: rgba(184, 194, 215, 0.35) 0px 6px 9px 0px;

  input {
    height: 25px;
    width: 100%;
    border: none;
    outline: none;
    padding: 0 5px;
  }

  svg {
    margin-right: 10px;
  }

  @media (max-width: 310px) {
    margin-left: 0;
    max-width: 100%;
  }
`