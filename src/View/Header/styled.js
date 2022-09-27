import styled from 'styled-components';
import fundo from '../../Img/Fundo.png';

export const ContainerHeader = styled.section`
  background-image: url(${fundo});
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 1%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #373737;
  background-position: center;

  @media (max-width: 750px) {
    background-position: right;
    background-size: cover;
    height: 180vh;
  }
`;

export const BoxNav = styled.div`
  width: 90%;
  height: 10vh;
  margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 750px) {
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-end;
    height: 30vh;
  }
`;

export const Logo = styled.img`
  width: 4%;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: none;

  @media (max-width: 750px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 7vw;
    height: 3vh;
    cursor: poiter;

    div {
      background-color: #373737;
      height: 30%;
      width: 100%;
    }
  }
`;

export const List = styled.ul`
  width: 45%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  cursor: pointer;

  @media (max-width: 750px) {
    display: ${(props) => (props.show === true ? 'flex' : 'none')};
    width: 15%;
    flex-direction: column;
  }
`;

export const Li = styled.li`
  width: 20%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4% 6%;
  border: solid rgba(255, 255, 255, 0);
  border-spacing: 15.75px;
  font-size: 1.1rem;
  font-weight: 450;
  text-transform: uppercase;
  font: normal normal normal 24px/32px Hurme Geometric Sans 1;
  letter-spacing: 2.52px;
  opacity: 1;

  :hover {
    border: solid 2px;
  }

  @media (max-width: 750px) {
    width: 140%;
  }
`;

export const Title = styled.h1`
  font-size: 10vw;
  font-weight: 500;
  letter-spacing: 15.75px;
  font: normal normal 600 150px/191px Hurme Geometric Sans 1;
  text-transform: uppercase;
  margin-top: 22%;
  opacity: 1;

  @media (max-width: 750px) {
    margin-top: 45%;
    letter-spacing: 10px;
  }
`;
