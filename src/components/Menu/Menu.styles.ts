import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  
`;

export const WrapperMenu = styled.div`
  background-color: #660708;
  display: flex;
  justify-content: space-between;
  width: 100%;
 `;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const MenuItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
  font-family: 'Roboto', 'sans-serif';
  font-size: 20px;
  color: #fff;
  text-decoration: none;

  a {
    font-family: 'Roboto', 'sans-serif';
    font-size: 20px;
    color: #fff;
    text-decoration: none;
  }

  a:hover{
    color: #252525;
  }

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;

  img {
    height: 60px;
    width: 76px;
  }
`;
