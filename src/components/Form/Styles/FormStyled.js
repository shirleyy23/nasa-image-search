import styled from 'styled-components';
import Button from '../../Button/Button';

export const StyledForm = styled.form`
  padding: 1.25rem 1.75rem;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0;
  display: inline-block;
  height: auto;
  width: 50%;
  margin-right: 2rem;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  width: 100%;
  display: block;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  display: block;
  background-color: #333333;
  padding: 0.5rem 0.6rem;
  border: none;
  color: white;
  @media screen and (max-width: 767px) {
    margin-bottom: 0.75rem;
  }
`;

export const StyledButton = styled(Button)`
  align-self: flex-end;
  @media screen and (max-width: 767px) {
    order: 3;
  }
`;

export const MessageField = styled.p`
  margin-top: 0.75rem;
  font-weight: 700;
  color: #e60d2e;
  flex-basis: 100%;
  @media screen and (max-width: 767px) {
    order: 2;
  }
`;
