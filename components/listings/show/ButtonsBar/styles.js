import styled from 'styled-components'
import theme from 'config/theme'
import {breakpoint} from '@emcasa/ui/lib/styles'
import Row from '@emcasa/ui-dom/components/Row'
import Button from '@emcasa/ui-dom/components/Button'
import {
  desktopHeaderHeight,
  listingDetailsMaxWidth,
  listingDetailsBarHeight
} from 'constants/dimensions'

export const Wrapper = styled(Row)`
  z-index: 6;
  position: fixed;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 ${theme.space[4]}px;
  box-sizing: border-box;
  background: ${theme.colors.white};
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.5);

  @media screen and ${breakpoint.up('desktop')} {
    bottom: initial;
    top: ${desktopHeaderHeight}px;
    height: ${listingDetailsBarHeight}px;
    padding: 0 ${theme.space[4]}px;
    background: none;
    box-shadow: none;
  }
`

export const Container = styled(Row)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${listingDetailsBarHeight}px;

  @media screen and ${breakpoint.up('desktop')} {
    justify-content: flex-end;
    margin: 0;
  }
`