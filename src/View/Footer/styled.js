import styled from 'styled-components';

export const ContainFooter = styled.section`
    height: 40vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #373737;
    background-color: #F2F4F1;

    @media(max-width: 750px){
        height: 90vh;
        background-color:#fbfbfb;
        flex-direction: column-reverse;
        justify-content: center;
    }
`

export const BoxIcons = styled.div`
    width: 12%;
    margin-left:4%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 750px){
        width: 70%;
        margin-left: 0;
        height: 30vh;
    }
`

export const Icon = styled.img`
    margin: 5% 10%;
    height: 5vh;

    @media(max-width: 750px){
        height: 14vh;
    }
`

export const BoxList = styled.div`
    width: 30%;
    margin-right: 5%;
    display: flex;
    justify-content: space-around;

    @media(max-width: 750px){
        width: 40%;
        height: 60vh;
    }
`

export const List = styled.ul`
    display:flex;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;
    list-style: none;

    li{
    border: solid rgba(255,255,255,0);
    width: 28%;
    display: flex;
    justify-content: center;
    }
    li:hover{
        border: solid ;
    }

    @media(max-width: 750px){
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        font-size: 1.8rem;
        letter-spacing: 2.52px;
        li{
            width: 100%;
        }
    }
`
