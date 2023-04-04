import styled from 'styled-components';

interface IHeadingProps {
  inverse?: boolean;
  size: keyof typeof HEADING_SIZE;
}

const HEADING_SIZE = {
  Display: '56px',
  xLarge: '40px',
  Large: '32px',
  Medium: '24px',
  Small: '20px',
  xSmall: '16px',
} as const;

export const Content = styled.h1<IHeadingProps>`
  max-width: 100%;
  font-weight: ${props =>
    props.size === 'xSmall' || props.size === 'Small' ? '600' : '700'};
  color: ${props =>
    props.inverse ? '#FFFFFF' : props.theme.color.base.dark}; // Alteração da cor do texto
  margin: 0px;
  padding: 0px;
  transition: all 0.275s cubic-bezier(0.48, 0, 0.48, 1) 0s;
  word-break: break-word;
  font-size: ${props => props.size && HEADING_SIZE[props.size]};
  font-family: 'Roboto', 'sans-serif';
  line-height: ${props => (props.size === 'Display' ? '115%' : '120%')};
  letter-spacing: ${props =>
    (props.size === 'Display' && '-2px') ||
    (props.size === 'xLarge' && '-1px') ||
    '0px'};
`;