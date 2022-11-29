import styled from 'styled-components'

export const CustomCategoty = styled.div`
height: 100vh;
width: 90%;
margin: 0 auto;

.loader{
    text-align: center;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 47%;
    z-index: 1;
 
}

.categories-content{
background-color: rgba(0,0,0,.1);
height: 100%;
display: grid;
padding: 1rem;
gap: .5rem;
grid-template-areas:'fem male'
                    'jackets jackets'
                    'hats sneakers';
}
`
