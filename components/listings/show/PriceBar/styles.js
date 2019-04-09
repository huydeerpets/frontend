import styled from 'styled-components'
import theme from 'config/theme'
import {breakpoint} from '@emcasa/ui/lib/styles'
import Row from '@emcasa/ui-dom/components/Row'
import Text from '@emcasa/ui-dom/components/Text'
import {
  desktopHeaderHeight,
  listingDetailsMaxWidth,
  listingDetailsBarHeight
} from 'constants/dimensions'

export const Wrapper = styled(Row)`
  z-index: 5;
  align-items: center;
  justify-content: center;
  padding: ${theme.space[4]}px ${theme.space[4]}px;
  border-top: 1px solid ${theme.colors.lightGrey};
  border-bottom: 1px solid ${theme.colors.lightGrey};
  box-sizing: border-box;

  @media screen and ${breakpoint.up('desktop')} {
    position: fixed;
    left: 0;
    top: ${desktopHeaderHeight}px;
    width: 100%;
    height: ${listingDetailsBarHeight}px;
    padding: 0 ${theme.space[4]}px;
    background: ${theme.colors.white};
  }

  ${Text} {
    margin: 0;

    @media screen and ${breakpoint.up('desktop')} {
      white-space: nowrap;
    }
  }
`

export const Container = styled('div')`
  width: 100%;
`