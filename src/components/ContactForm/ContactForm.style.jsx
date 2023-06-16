import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  border: solid 1px #000000;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AddContact = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const Button = styled.button`
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;

  color: #fff;
  cursor: pointer;

  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 600;
  padding: 6px 16px;

  &:hover {
    background-color: #2c974b;
  }

  &:focus {
    box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;
    outline: none;
  }
`;
