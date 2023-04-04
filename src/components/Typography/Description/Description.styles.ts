import styled from 'styled-components';

interface IDescriptionProps {
  inverse?: boolean;
}

export const Content = styled.span<IDescriptionProps>`
  color: ${props =>
    props.inverse ? props.theme.color.base.light : props.theme.color.base.dark};
  font-size: ${props => props.theme.fonts.fontSizeXXS};
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  line-height: 150%;
  font-size: 100px;
  word-break: break-word;
  @media only screen and (min-width: 600px) {
    font-size: ${props => props.theme.fonts.fontSizeSM};
  }
`;