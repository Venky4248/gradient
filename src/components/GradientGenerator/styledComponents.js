// Style your elements here
import styled from 'styled-components'

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  opacity: 1;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 24px;
`
export const Para = styled.p`
  color: #ededed;
  font-size: 18px;
`
export const Unordered = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-bottom: 40px;
`
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorPara = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  margin-right: 20px;
  color: ${props => props.color};
`
export const Input = styled.input`
  color: ${props => props.color};
  border: none;
  background-color: transparent;
  height: 50px;
  width: 90px;
`
export const Container3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 80px;
`
export const GenerateBt = styled.button`
  background-color: #00c9b7;
  border: none;
  padding: 10px;
  text-align: center;
  width: 100px;
`
