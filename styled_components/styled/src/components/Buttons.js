import styled from 'styled-components';

const color = 'blue';
const padding = 'padding:10px';
const margin = 'margin:5px';
const border = (width) => {
  return `border:solid ${width} red`;
}

export const Button = styled.button`
  ${padding};
  ${margin};
  color:red;
  background-color: var(--primaryColor);
  text-transform: uppercase;
  ${border("20px")}
`;

export const SecondButton = styled.button`
  color:red;
  background-color: ${color};
  text-transform: lowercase;
`;