import styled from 'styled-components'

interface ProductImageProps {
  imageUrl: string
}

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  p {
    font-size: 1rem;
    font-weight: 500;
  }
`

export const ProductImage = styled.div<ProductImageProps>`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 380px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  display:flex;
  justify-content:center;
  transition:all .3s ease-in;

  

  &:hover{
    background-color:rgba(0,0,0,.3);
    background-blend-mode:color;

    button{
    visibility: visible;
    opacity:100%;


  }
  } 

  button{
    position:absolute;
    width:70%;
    bottom:10px;
    visibility:hidden;
    transition:all .3s ease-in;
    
  }
  `
