import styled from 'styled-components';

export const CarListStyle = styled.ul`
  display: grid;
  max-width: calc(-246px + 100vw);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  gap: 50px 29px;
  margin: 0px auto;
  padding: 30px 0px 0px;
  list-style: none;
`;
