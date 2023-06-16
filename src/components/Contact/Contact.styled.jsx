import styled from '@emotion/styled';

export const Item = styled.p`
  margin: 20px;
`;

export const Button = styled.button`
  background-color: #e4183a;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;

  color: #fff;
  cursor: pointer;

  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 600;
  padding: 6px 16px;

  &:hover,
  &:disabled {
    background-color: #ad1d35;
  }

  &:focus {
    box-shadow: rgba(187, 17, 40, 0.4) 0 0 0 3px;
    outline: none;
  }
`;
