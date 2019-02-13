import styled from 'styled-components'
import theme from '@emcasa/ui'
import Col from '@emcasa/ui-dom/components/Col'
import Text from '@emcasa/ui-dom/components/Text'
import View from '@emcasa/ui-dom/components/View'

export const Container = styled(View)`
  display: flex;
  justify-content: center;
`

export const Content = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1100px;
  @media (max-width: ${theme.breakpoints[0]}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const Title = Text.withComponent('h2')

export const SubTitle = Text.withComponent('h3')

export const Icon = styled.div`
  background-image: url('/static/svg-icons/${props => props.name}.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 70px;
  height: 70px;
  margin-bottom: 30px;
`

export const BenefitCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${SubTitle} {
    margin: 0;
  }
  @media (max-width: ${theme.breakpoints[0]}) {
    padding-bottom: 50px;
  }
`