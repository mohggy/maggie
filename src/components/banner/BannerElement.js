import styled from "styled-components";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom'


export const BannerContainer = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const BannerSlide = styled.div`
  z-index: 1;
  width: 100%;
  heigth: 100%;
`;

export const BannerSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;

export const BannerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;


export const BannerContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);
color: white;

h1 {
    font-size: clamp(1rem, 8vw, 20rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgb(0,0,0,0.4);
    text-align: center;
    margin-bottom: 0.8rem;
}


`;

export const BannerArrow = styled(AiOutlineArrowRight)`
margin-left: 0.5rem
`;

export const BackArrow = styled(AiOutlineArrowLeft)`
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  background: #ff9999;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #ffcccc;
    transform: scale(1.05);
  }
`;

export const NextArrow = styled(AiOutlineArrowRight)`
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  background: #ff9999;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #ffcccc;
    transform: scale(1.05);
  }
  opacity: 0.8;
`;

export const ArrowButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

export const BannerButton = styled(Link)`
background: #ff9999;
border-radius: 2rem;
white-space: nowrap;
outline: none;
border: none;
min-width: 150px;
max-width: 200px;
cursor: pointer;
text-decoration: none;
transition: 0.3s;
display: flex;
margin: 0 auto;
justify-content: center;
float: center;
align-items: center;
text-align: center;
opacity: 0.8;
padding: ${({large}) => (large ? '16px 40px' : '14px 24px')};
color: ${({ primary }) => (primary ? 'white' : 'black')};
fontSize: ${({ large }) => (large ? '20px' : '14px')};

&:hover {
    transform: translateY(-2px);
    background: #ffcccc
}
`