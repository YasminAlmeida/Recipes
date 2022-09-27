import styled from 'styled-components';

export const ContainFooter = styled.section`
  height: 40vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #373737;
  background-color: #f2f4f1;

  @media (max-width: 750px) {
    height: 90vh;
    background-color: #fbfbfb;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const BoxIcons = styled.div`
  width: 12%;
  margin-left: 4%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 750px) {
    width: 70%;
    margin-left: 0;
    height: 30vh;
  }
`;

export const Icon = styled.img`
  margin: 20px;
  height: 50px;

  @media (max-width: 750px) {
    height: 40px;
  }
`;

export const BoxList = styled.div`
  width: 30%;
  margin-right: 5%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 750px) {
    width: 40%;
    height: 60vh;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;
  list-style: none;

  li {
    border: solid rgba(255, 255, 255, 0);
    width: max-content;
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 5px;
  }
  li:hover {
    border: solid 1px #000;
  }

  @media (max-width: 750px) {
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    font-size: 1.8rem;
    letter-spacing: 2.52px;
    li {
      width: 100%;
    }
  }
`;
