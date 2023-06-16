import styled from '@emotion/styled';

export const Element = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #000000;
  padding: 20px;
  max-width: 500px;
  margin: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ErrorTitle = styled.h3`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ErrorText = styled.p`
  margin: 0;
  font-size: 30px;
  color: #8b8b8bdd;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
