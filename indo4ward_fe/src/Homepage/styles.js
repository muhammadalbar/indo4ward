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

export const Wrapper = styled.div`
    margin-top: 100px;
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
`