import React, { Component } from 'react'
import PropTypes from 'prop-types'
import enhanceWithClickOutside from 'react-click-outside'
import CloseButton from 'components/shared/CloseButton'
import {
  Background,
  Container
} from './styles'

class ContainerClickOutside extends Container {
  handleClickOutside(e) {
    e.preventDefault()
    this.props.onClose()
  }
}

const EnhancedContainer = enhanceWithClickOutside(ContainerClickOutside)

class Modal extends Component {
  render() {
    return (
      <Background onClick={(e) => {e.preventDefault()}}>
        <EnhancedContainer
          padding={this.props.padding}
          justifyContent={this.props.justifyContent}
          onClose={this.props.onClose}
          onClick={(e) => {e.preventDefault()}}
          mobileKeyboard={this.props.mobileKeyboard}
        >
          <CloseButton
            onClick={this.props.onClose}
            buttonStyle={this.props.closeButtonStyle}
            iconStyle={this.props.closeIconStyle}
            color={this.props.closeIconColor}
          />
            {this.props.children}
        </EnhancedContainer>
      </Background>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  justifyContent: PropTypes.string,
  mobileKeyboard: PropTypes.bool,
  closeButtonStyle: PropTypes.object,
  closeIconStyle: PropTypes.object,
  closeIconColor: PropTypes.string
}

export default Modal
