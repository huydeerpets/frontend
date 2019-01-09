import styled from 'styled-components'
import theme from '@emcasa/ui'
import Row from '@emcasa/ui-dom/components/Row'
import Text from '@emcasa/ui-dom/components/Text'
import {
  MAX_FILTER_PANEL_DESKTOP_WIDTH
} from 'components/listings/shared/ListingFilter/components/FilterPanel/styles'

export const THUMB_SIZE = 18

export const Container = styled(Row)`
  flex-direction: column;
  align-items: flex-start;
  width: ${MAX_FILTER_PANEL_DESKTOP_WIDTH}px;
  max-width: ${MAX_FILTER_PANEL_DESKTOP_WIDTH}px;
  box-sizing: border-box;
  margin: 42px auto ${theme.space[2]}px;
`

export const Rail = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 1px;
  width: ${MAX_FILTER_PANEL_DESKTOP_WIDTH}px;
  background-color: ${theme.colors.grey};
`

export const Thumb = styled.div`
  box-sizing: border-box;
  position: absolute;
  cursor: pointer;
  outline: none;
  border-radius: 100%;
  padding: 0;
  margin: 0;
  top: -8px;
  height: ${THUMB_SIZE}px;
  width: ${THUMB_SIZE}px;
  background-color: ${theme.colors.pink};
  display: flex;

  box-shadow: 0 0 0 1px ${theme.colors.pink};

  :hover {
    box-shadow: 0 0 0 12px rgba(245, 0, 87, 0.15), 0 0 0 1px ${theme.colors.pink};
  }
`

export const Tip = styled.div`
  position: absolute;
  top: -200%;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px;
  pointer-events: none;
  white-space: nowrap;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.pink};
  border-radius: 2px;
  color: ${theme.colors.pink};
  font-size: 12px;

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(-225deg);
    width: 6px;
    height: 6px;
    background-color: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.pink};
    border-right: 1px solid ${theme.colors.pink};
  }
`

export const Icon = styled.div`
  box-sizing: border-box;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.pink};

  svg {
    width: 40px !important;
    height: 40px;
  }
`

export const RangeValues = styled(Text)`
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto 20px auto;
  color: ${theme.colors.grey};
`

export const Bar = styled.div`
  position: absolute;
  width: ${MAX_FILTER_PANEL_DESKTOP_WIDTH}px;
  max-width: ${MAX_FILTER_PANEL_DESKTOP_WIDTH}px;
  height: 3px;
  background: ${theme.colors.pink};
`
