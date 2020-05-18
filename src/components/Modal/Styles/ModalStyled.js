import styled from 'styled-components';
import Button from '../../Button/Button';

export const StyledModal = styled.div`
  padding: 1.75rem;
  border: 2px solid white;
  height: 70vh;
  width: 70%;
  overflow: auto;
  position: relative;
  background-color: #313131;
  color: white;
  @media screen and (max-width: 991px) {
    width: 80%;
    height: 80vh;
  }
  @media screen and (max-width: 575px) {
    width: 90%;
    height: 90vh;
  }
`;

export const CloseButton = styled(Button)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  box-shadow: none;
`;

export const StyledFigure = styled.figure`
  margin: 2rem 0;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: inline-block;
  margin-top: ;
`;

export const ImageTitle = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 1.75rem;
  font-weight: 700;
`;

export const Photographer = styled.p`
  font-weight: 700;
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 2rem;
`;

export const DescriptionTitle = styled.h4`
  font-weight: 700;
  margin-bottom: 1.25rem;
`;

export const DescriptionContent = styled.p`
  line-height: 1.4;
`;

export const ImageLink = styled.p`
  font-weight: 700;
`;

export const Link = styled.a`
  color: #428bca;
  font-weight: 400;
  &:visited {
    color: #428bca;
  }
`;

export const Keywords = styled.small`
  font-weight: 700;
`;

export const StyledModalWrapper = styled.section`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height 100vh;
display: flex;
align-items: center;
justify-content: center; 
background-color: rgba(0,0,0,.9); 
z-index: 99;
color: white;
`;
