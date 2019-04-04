import React, {Component } from 'react'
import theme from 'config/theme'
import Container from './styles'
import GMap from 'components/listings/show/Map'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import CloseButton from 'components/shared/CloseButton'

class MapPopup extends Component {
  render() {
    const {
      streetView,
      listing,
      isMapPopupVisible,
      closeMapPopup
    } = this.props

    return (
      <Container open={isMapPopupVisible}>
        <CloseButton onClick={closeMapPopup} />
        <GMap listing={listing} streetView={streetView} />
      </Container>
    )
  }
}

export default MapPopup
