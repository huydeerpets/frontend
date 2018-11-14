import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import MaskedInput from 'react-text-mask'

import Icon from '@emcasa/ui-dom/components/Icon'
import Input from '@emcasa/ui-dom/components/Input'
import Row from '@emcasa/ui-dom/components/Row'
import Col from '@emcasa/ui-dom/components/Col'
import Text from '@emcasa/ui-dom/components/Text'
import StaticMap from 'components/listings/new-listing/shared/StaticMap'
import NavButtons from 'components/listings/new-listing/shared/NavButtons'
import {
  UserPriceCol,
  EditPriceButton
 } from './styles'
import {
  currencyInputMask,
  currencyStyle,
  PREFIX,
  THOUSANDS_SEPARATOR_SYMBOL
} from 'utils/text-utils'

const SUGGESTED_PRICE_MULTIPLIER = 1.05

class Pricing extends Component {
  constructor(props) {
    super(props)
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.updateStateFromProps = this.updateStateFromProps.bind(this)
    this.validateUserPrice = this.validateUserPrice.bind(this)
    this.priceSuggestion = this.priceSuggestion.bind(this)
    this.noPriceSuggestion = this.noPriceSuggestion.bind(this)

    this.userPriceInput = null
  }

  state = {
    userPrice: null,
    suggestedPrice: null,
    editingPrice: false
  }

  componentDidMount() {
    this.updateStateFromProps(this.props)
    if (this.userPriceInput !== null) {
      this.userPriceInput.focus()
    }
  }

  componentWillReceiveProps(props) {
    this.updateStateFromProps(props)
  }

  updateStateFromProps(props) {
    const { pricing } = props
    if (pricing) {
      this.setState({
        userPrice: pricing.userPrice,
        suggestedPrice: pricing.suggestedPrice,
        editingPrice: pricing.editingPrice || !pricing.suggestedPrice
      })
    }
  }

  parseUserPrice(userPrice) {
    if (!userPrice) {
      return parseInt(this.state.suggestedPrice)
    }
    const cleanUserPrice = userPrice.toString().replace(PREFIX, '').replace(THOUSANDS_SEPARATOR_SYMBOL, '')
    return parseInt(cleanUserPrice)
  }

  nextStep() {
    if (this.state.editingPrice) {
      this.setState({editingPrice: false})
      return
    }
    const { navigateTo, updatePricing } = this.props
    const intUserPrice = this.parseUserPrice(this.state.userPrice)
    const intSuggestedPrice = parseInt(this.state.suggestedPrice)
    const newPricing = {
      userPrice: intUserPrice,
      suggestedPrice: intSuggestedPrice,
      editingPrice: this.state.editingPrice
    }
    updatePricing(newPricing)
    navigateTo('services')
  }

  previousStep() {
    if (this.state.editingPrice) {
      this.setState({
        editingPrice: false,
        userPrice: null
      })
      return
    }

    const { navigateTo } = this.props
    navigateTo('differential')
  }

  currencyInput(errors, setFieldValue, setFieldTouched) {
    const { userPrice } = this.props.pricing
    return (
      <Field
        name="userPrice"
        validate={this.validateUserPrice}
        render={({form}) => (
          <Input
            type="number"
            hideLabelView
            error={form.touched.userPrice ? errors.userPrice : null}
            placeholder="R$ 000.000"
            defaultValue={userPrice}
            onChange={(e) => {
              const { value } = e.target
              setFieldValue('userPrice', value)
              setFieldTouched('userPrice')
              this.setState({userPrice: value})
            }}
          />
        )}
      />
    )
  }

  priceSuggestion(errors, setFieldValue, setFieldTouched) {
    const { pricing } = this.props
    const basePrice = pricing.suggestedPrice.toLocaleString('pt-BR', currencyStyle)
    const suggestedPrice = (pricing.suggestedPrice * SUGGESTED_PRICE_MULTIPLIER).toLocaleString('pt-BR', currencyStyle)

    const { userPrice } = this.state
    const formattedUserPrice = userPrice ? parseInt(userPrice).toLocaleString('pt-BR', currencyStyle) : null
    return (
      <Col>
        <Text color="grey">Seu imóvel foi avaliado por:</Text>
        <Text fontSize="large" fontWeight="bold" textAlign="center">{basePrice}</Text>
        <Text color="grey">Recomendamos anunciar por:</Text>
            {this.state.editingPrice ?
              <Col width={[1, 1/2]} mr={4}>
                {this.currencyInput(errors, setFieldValue, setFieldTouched)}
              </Col>
              :
              <>
                <Row justifyContent="center">
                  <UserPriceCol />
                  <Col>
                    <Text
                      inline
                      fontSize="large"
                      fontWeight="bold"
                      textAlign="center"
                    >{formattedUserPrice ? formattedUserPrice : suggestedPrice}</Text>
                  </Col>
                  <UserPriceCol>
                    <EditPriceButton onClick={() => this.setState({editingPrice: true})} style={{marginLeft: 20}}>
                      <Icon name="pen" color="dark" />
                    </EditPriceButton>
                  </UserPriceCol>
                </Row>
              </>
            }
        <Text color="grey">Não gostou da nossa avaliação? Não tem problema. É só editar o valor do seu imóvel.</Text>
      </Col>
    )
  }

  noPriceSuggestion(errors, setFieldValue, setFieldTouched) {
    return (
      <>
        <Row>
          <Col>
            <Text color="grey">Seu imóvel será avaliado por um de nossos agentes, mas conte pra gente por quanto você gostaria de vender seu imóvel.</Text>
          </Col>
        </Row>
        <Row>
          <Col width={[1, 1/2]} mr={4}>
            {this.currencyInput(errors, setFieldValue, setFieldTouched)}
          </Col>
        </Row>
      </>
    )
  }

  validateUserPrice(value) {
    if (!this.state.editingPrice) {
      return
    }
    if (!value || value === 'R$ ') {
      return 'É necessário informar um preço de venda.'
    }
  }

  render() {
    const { pricing, location } = this.props
    let suggestedPrice, userPrice, addressData
    if (pricing && location) {
      suggestedPrice = pricing.suggestedPrice
      userPrice = pricing.userPrice
      addressData = location.addressData
    }
    return (
      <div ref={this.props.hostRef}>
        <Row justifyContent="center" p={4}>
          <Col width={[1, 1/2]}>
            <Formik
              initialValues={{
                userPrice: userPrice
              }}
              isInitialValid={() => {
                return !this.validateUserPrice(userPrice)
              }}
              render={({isValid, setFieldTouched, setFieldValue, errors}) => (
                <>
                  <Text
                    fontSize="large"
                    fontWeight="bold"
                    textAlign="center">
                    Qual o valor do seu imóvel?
                  </Text>
                  <Col>
                    <StaticMap addressData={addressData} />
                  </Col>
                  {suggestedPrice ?
                    this.priceSuggestion(errors, setFieldValue, setFieldTouched)
                  :
                    this.noPriceSuggestion(errors, setFieldValue, setFieldTouched)
                  }
                  <NavButtons
                    nextLabel={this.state.editingPrice ? 'OK' : 'Avançar'}
                    previousLabel={this.state.editingPrice ? 'Cancelar' : 'Voltar'}
                    previousStep={this.previousStep}
                    onSubmit={this.nextStep}
                    submitEnabled={isValid}
                  />
                </>
              )}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

Pricing.propTypes = {
  pricing: PropTypes.object
}

export default Pricing
