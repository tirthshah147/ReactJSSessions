import styled from 'styled-components';

export const PropsButtons = styled.button`
  /* background: ${(props) => (props.color ? props.color : "green" )}; */
  color:white;
  padding:${props => (props.big ? '3rem' : '1rem') };
  font-size: 2rem;
`

// export const BigButton = styled(PropsButtons)`
//   margin: 0.5rem;
//   text-transform: capitalize;
// `

export const SuccessButton = styled(PropsButtons)`
  background : green;
`

export const DangerButton = styled(PropsButtons)`
  background : red;
`



