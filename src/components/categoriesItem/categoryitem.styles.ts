import styled from 'styled-components'

interface CategoryItemProps {
  backgroundImage: string

}

export const Categoryitem = styled.div<CategoryItemProps>`
    border-radius: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative;
    background-image:${(props) => `url('${props.backgroundImage}')`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.3);
    background-blend-mode: color;

    &:nth-child(1){
    grid-area: sneakers;
    
    }
    &:nth-child(2){
    grid-area: jackets;
    }
    &:nth-child(3){
    grid-area: male;
    }
    .category-item:nth-child(4){
    grid-area: hats;
    }
    &:nth-child(5){
    grid-area: fem;
    }

.category-name{
    cursor: pointer;
    color: #f8f9fa;
    text-align: center;
    background: rgba(233, 236, 239, 0.45);
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 30px;
    border-radius: 10px;
    border: 1px solid (0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease;
    z-index:1

}

.category-blur{
    content: '';
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    border-radius: .2rem;

    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transition:all .5s ease-in;

}

.category-name:hover ~ .active{
display: block;
}

.category-name:hover {
    cursor: pointer;
    background: rgba(233, 236, 239, 0.55);
  }



  
.category-name p:nth-child(1) {
    font-weight: 600;
}
`
