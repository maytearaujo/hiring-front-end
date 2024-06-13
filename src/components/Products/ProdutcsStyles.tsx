import styled from "styled-components";

export const DivProducts = styled.main`
    background-color: #fffafa ;
`

export const DivProduct = styled.div`
    /* display: flex; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 1rem;
    row-gap: 2rem;
    
    div {
        max-width: 389px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
        /* width: 50%;
        height: 40%; */
        margin: .5rem;
    }

    p, h3 {
        padding: .5rem;
    }

    div p:nth-child(4) {
        font-weight: 700;
    }    
`

export const DivAvatar = styled.div`
    display: flex;
    
    
    img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }   
`