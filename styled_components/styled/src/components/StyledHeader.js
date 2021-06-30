import React from 'react';
import styled from 'styled-components';

export default function StyledHeader({title}) {
  return (
    <StyleWrapper>
      <h1>{title}</h1>
      <h2 className="random">another heading in styled header</h2>
    </StyleWrapper>
  )
}

const StyleWrapper = styled.section`
  background: red;
  transition: all 3s ease-in-out;
  h1{
    color:blue;
  }

  .random{
    color:green;
  }

  &:hover{
    background: black;
  }
`



