import React from 'react';
import styled from 'styled-components';

function StyledHeader({title, className}) {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h2 className="random">another heading in styled header</h2>
    </section>
  )
}

const StyleWrapper = styled(StyledHeader)`
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

export default StyleWrapper;





