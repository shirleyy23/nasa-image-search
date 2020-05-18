import styled from 'styled-components';
import Button from '../../Button/Button';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(49, 49, 49, 0.8);
  display: none;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  transition: 0.5s ease all;
  padding: 1.25rem 1.75rem;
`;

export const Container = styled.article`
  flex-basis: 30%;
  height: auto;
  position: relative;
  margin-bottom: 1.5rem;
  margin-right: 3%;
  border: none;
  &:hover ${Overlay}, &:focus ${Overlay} {
    display: flex;
  }
  @media screen and (min-width: 576px) and (max-width: 991px) {
    flex-basis: 47.5%;
    margin-right: 2.5%;
  }
  @media screen and (max-width: 575px) {
    flex-basis: 100%;
    margin-right: 0;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top center;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-style: italic;
  color: white;
  flex-basis: 100%;
`;

export const OverlayButton = styled(Button)`
  font-size: 0.8rem;
`;
