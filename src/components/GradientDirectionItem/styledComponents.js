// Style your elements here
import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
`
export const Bt = styled.button`
  background-color: ${props => props.bgColor};
  font-size: 10px;
  padding: 10px;
  border: none;
  margin: 10px;
  width: 120px;
  opacity: ${props => props.opacity};
  border-radius: 5px;
`
