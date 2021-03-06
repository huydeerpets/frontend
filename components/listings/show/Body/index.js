import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import {getParagraphs} from 'utils/text-utils'
import {canEdit} from 'permissions/listings-permissions'
import {
  log,
  getListingInfoForLogs,
  LISTING_DETAIL_OPEN
} from 'lib/logging'
import Text from '@emcasa/ui-dom/components/Text'
import Button from '@emcasa/ui-dom/components/Button'
import View from '@emcasa/ui-dom/components/View'
import Row from '@emcasa/ui-dom/components/Row'
import Col from '@emcasa/ui-dom/components/Col'
import ListingInfo from './ListingInfo'
import ListingDescription from './ListingDescription'
import {Container} from './styles'

class ListingMainContent extends Component {
  componentDidMount() {
    log(LISTING_DETAIL_OPEN, getListingInfoForLogs(this.props.listing))
  }

  render() {
    const {
      listing,
      user,
      favorite,
      openMatterportPopup,
      openMapPopup,
      openStreetViewPopup
    } = this.props
    const {
      street,
      neighborhood,
      streetNumber
    } = listing.address
    const paragraphs = getParagraphs(listing.description)
    const ownerOrAdmin = canEdit(user, listing)
    const listingUserInfo = ownerOrAdmin
      ? `${street}, ${streetNumber} ${
          listing.complement ? `- ${listing.complement}` : ''
        }`
      : `${street}`
    const {
        price,
        area,
        propertyTax,
        maintenanceFee
      } = this.props.listing
    const pricePerSquareMeter = Math.floor(price / area)

    return (
      <Row justifyContent="center" width="100%" mt={5}>
        <Container>
          <ListingInfo
            listing={listing}
            title={`${listingUserInfo}, ${neighborhood}, ${listing.address.city}`}
            openMatterportPopup={openMatterportPopup}
            openMapPopup={openMapPopup}
            openStreetViewPopup={openStreetViewPopup}
          />
          <ListingDescription
            listing={listing}
            paragraphs={paragraphs}
          />
        </Container>
      </Row>
    )
  }
}


ListingMainContent.propTypes = {
  listing: PropTypes.object.isRequired,
  user: PropTypes.object,
  favorite: PropTypes.bool,
  openMatterportPopup: PropTypes.func,
  openMapPopup: PropTypes.func,
  openStreetViewPopup: PropTypes.func
}

export default ListingMainContent
