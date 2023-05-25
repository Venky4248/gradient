// Write your code here
import {Component} from 'react'
import {List, Bt} from './styledComponents'

class GradientDirectionItem extends Component {
  handleClick = () => {
    const {buttonDetails, changeButton} = this.props
    const {directionId} = buttonDetails
    changeButton(directionId)
  }

  render() {
    const {buttonDetails, enroute} = this.props
    const {displayText, value, directionId} = buttonDetails
    const FillColor = enroute === value ? '#ededed' : '#ffffff'
    const res = enroute === value
    return (
      <List>
        <Bt
          bgColor={FillColor}
          onClick={this.handleClick}
          opacity={res ? 1 : 0.5}
        >
          {displayText}
        </Bt>
      </List>
    )
  }
}
export default GradientDirectionItem
