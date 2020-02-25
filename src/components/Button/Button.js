import styled from 'styled-components';

export default styled.button`
  background-color: ${props => (props.primary ? '#15418c' : '#555555')};
  ${props => (props.primary ? 'transition: 0.3s ease background-color;' : null)}
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem 0.6rem;
  color: white;
  border: none;
  display: inline-block;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${props => (props.primary ? '#5d7fb9' : '#555555')};
  }
`;
