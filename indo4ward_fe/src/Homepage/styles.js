import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    width: 100%;
    height: 100%;
`

export const Navbar = styled.div`
    margin-top: 10px;
    float:right;
`

export const Wrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 100px;
    input{
        width: 20em;
    }
    button{
        margin-left: 1em;
    }
    .paper{
        margin-top: 1em;
        width: 25em;
        height: 3em;
        padding: 10px;
        :hover{
            box-shadow: 0px 4px 4px rgba(1.25, 0, 1.25, 0.25);
        }
      
    }
    .deleteBtn{
        margin-top: 10px;
        cursor: pointer;
    }
    @media(max-width: 414px){
        input{
            width: 15em;
        }
        .paper{
            width: 20em;
        }
        
    }
`

export const Card = styled.div`
    width: 30em;
    height: 7.5em;
    background: #284089;
    border-bottom: 1px solid white;
    color: white;
    .icon{
        margin-top: 10px;
        padding-right: 5px;
    }
    @media(max-width: 414px){
        width: 25em;
        height: auto;
    }
    @media(max-width: 375px){
        width: 21em;
    }
`