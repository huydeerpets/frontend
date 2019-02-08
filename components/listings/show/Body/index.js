import React, { PureComponent } from 'react'
import NumberFormat from 'react-number-format'
import ListingCard from './Card'
import Container, {CardWrapper, ListingInfo} from './styles'
import Statistics from 'components/listings/show/Statistics'
import {getParagraphs} from 'utils/text-utils'
import {canEdit} from 'permissions/listings-permissions'
import {
  log,
  LISTING_DETAIL_OPEN
} from 'lib/logging'

export default class ListingMainContent extends PureComponent {
  componentDidMount() {
    const {id, address, area, bathrooms, floor, garageSpots, price, rooms, type, maintenanceFee, propertyTax} = this.props.listing
    log(LISTING_DETAIL_OPEN, {
      listingId: id,
      neighborhood: address.neighborhoodSlug,
      city: address.citySlug,
      area,
      bathrooms,
      floor,
      garageSpots,
      price,
      rooms,
      type,
      maintenanceFee,
      propertyTax,
    })
  }

  render() {
    const {listing, handleOpenPopup, user} = this.props
    const {street, neighborhood, streetNumber} = listing.address
    const showStatistics = listing.owner
    const paragraphs = getParagraphs(listing.description)
    const ownerOrAdmin = canEdit(user, listing)
    const listingInfo = ownerOrAdmin
      ? `${street}, ${streetNumber} ${
          listing.complement ? `- ${listing.complement}` : ''
        }`
      : `${street}`

    return (
      <Container>
        <div className="description">
          <h1 className="street">
            {listing.type} na {listingInfo}, {neighborhood},{' '}
            {listing.address.city}
          </h1>
          <h6>O imóvel</h6>
          {paragraphs && paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          <ListingInfo>
            <div>
              <h6>Tipo do imóvel</h6>
              <p>{listing.type}</p>
            </div>
            {listing.maintenanceFee && (
              <div>
                <h3>Condomínio</h3>
                <p>
                  <NumberFormat
                    value={listing.maintenanceFee}
                    displayType={'text'}
                    thousandSeparator={'.'}
                    prefix={'R$'}
                    decimalSeparator={','}
                  />
                </p>
              </div>
            )}
            {listing.propertyTax && (
              <div>
                <h6>Iptu</h6>
                <p>
                  <NumberFormat
                    value={listing.propertyTax}
                    displayType={'text'}
                    thousandSeparator={'.'}
                    prefix={'R$'}
                    decimalSeparator={','}
                  />
                </p>
              </div>
            )}
          </ListingInfo>
        </div>
        <CardWrapper>
          <ListingCard
            listing={listing}
            handleOpenPopup={handleOpenPopup}
            user={user}
          />
          {showStatistics && <Statistics listing={listing} user={user} />}
        </CardWrapper>
      </Container>
    )
  }
}
