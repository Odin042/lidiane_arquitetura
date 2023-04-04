import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 background-color: #252525;
`;

export const ContainerWho = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 10%;
  padding: 0 600px 0 0;
  overflow: hidden;

  img {
    width: 900px;
    height: 500px;
    object-fit: cover;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  span {
    width: 70%;
  }
`;