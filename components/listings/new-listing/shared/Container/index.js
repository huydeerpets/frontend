import styled from 'styled-components'
import {themeGet} from 'styled-system'
import {breakpoint} from '@emcasa/ui/lib/styles'
import Row from '@emcasa/ui-dom/components/Row'

const PADDING = ({theme}) => `${theme.space[4]}px`

const Container = styled(Row)`
  padding: 80px ${PADDING} ${PADDING} ${PADDING};
  justify-content: center;

  @media ${breakpoint.only('tablet')} {
    padding-top: 180px;
    width: calc(100vw - 220px);
  }
`

export default Container
