import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  Container1,
  Heading,
  Para,
  Unordered,
  Container2,
  Input,
  GenerateBt,
  ColorPara,
  Container3,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    c: '#8ae323',
    c1: '#014f7b',
    TextColor: '',
    TextColor2: '',
    enroute: 'top',
    show: false,
  }

  changeButton = directionId => {
    const filtered = gradientDirectionsList.filter(
      item => item.directionId === directionId,
    )
    this.setState({enroute: filtered[0].value})
  }

  handleColorChange1 = e => {
    this.setState({show: false})
    this.setState({TextColor: e.target.value})
  }

  handleColorChange2 = e => {
    this.setState({show: false})
    this.setState({TextColor2: e.target.value})
  }

  change = () => {
    this.setState({enroute: 'TOP'})
    this.setState({show: true})
  }

  render() {
    const {TextColor, TextColor2, enroute, show, c, c1} = this.state
    console.log(enroute)
    return (
      <Container1
        color1={show ? TextColor : '#8ae323'}
        color2={show ? TextColor2 : '#014f7b'}
        direction={enroute}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <Unordered>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              buttonDetails={each}
              key={each.directionId}
              changeButton={this.changeButton}
              enroute={enroute}
            />
          ))}
        </Unordered>
        <Para>Pick the Colors</Para>
        <Container3>
          <Container2>
            <ColorPara color={TextColor}>
              {show ? TextColor : '#8ae323'}
            </ColorPara>
            <Input
              type="color"
              onChange={this.handleColorChange1}
              defaultValue={show ? TextColor : c}
            />
          </Container2>
          <Container2>
            <ColorPara color={TextColor2}>
              {show ? TextColor2 : '#014f7b'}
            </ColorPara>
            <Input
              type="color"
              onChange={this.handleColorChange2}
              defaultValue={show ? TextColor2 : c1}
            />
          </Container2>
        </Container3>
        <GenerateBt type="button" onClick={this.change}>
          Generate
        </GenerateBt>
      </Container1>
    )
  }
}
export default GradientGenerator
