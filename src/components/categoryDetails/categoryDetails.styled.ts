import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 40px 20px 40px;
`

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  p {
    font-size: 21px;
    font-weight: 500;
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 3rem;
  margin-top: 1rem;

  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid red;
    
  }
`

export const IconContainer = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`
