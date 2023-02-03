import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const CustomHeader = styled.header`
   background-color:${Colors.primary};
   box-shadow: 1px 1px 1rem rgb(187, 185, 185);
   display: flex;
   justify-content: space-between;
   align-items: center;

   width: 100%;
   height: 5rem;
   padding: 1rem;


.logo{
}

.listHeader{
  display: flex;
  gap: 1.5rem;
  margin-right: 4%;
  align-items: center;
  padding: 0 .5rem;

}

.listHeader .itemListHeader ,.logo{
 cursor: pointer;
 color: #eee;
 transition: .1s;
 opacity: 90%;


}




.listHeader .itemListHeader:hover,.logo:hover{
 color: #fff;
 opacity: 100%;
}                                                                                              
.cart{
    position: relative;
    
   
}
.qtdCart{
    font-size: .7em;
    text-align: center;
    width: 1rem;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    display:block;
    top: -10px;
    left:1rem;
  
}
`
