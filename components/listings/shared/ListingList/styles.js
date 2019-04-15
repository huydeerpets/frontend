import styled from 'styled-components'
import {themeGet} from 'styled-system'
import {ROW_HEIGHT as FILTER_ROW_HEIGHT} from '@emcasa/ui-dom/components/Filters/constants'
import {MAX_HEADER_HEIGHT} from 'components/shared/Shell/Header/styles'
import Row from '@emcasa/ui-dom/components/Row'
import Text from '@emcasa/ui-dom/components/Text'

const MAP_OFFSET = (props) => FILTER_ROW_HEIGHT(props) + MAX_HEADER_HEIGHT
const MIN_WIDTH_FOR_MAP_RENDER = 1279
const MAP_WIDTH_PERCENT = 30

const shouldShowMap = () => {
  if (process.browser && window) {
    return window.innerWidth >= MIN_WIDTH_FOR_MAP_RENDER
  }
  return false
}

const Title = styled(Text)`
  margin: 0 ${themeGet('space.4')}px ${themeGet('space.3')}px;
`

const Container = styled(Row)`
  justify-content: space-between;
  margin-top: ${themeGet('space.3')}px;
`

const MapContainer = styled.div`
  position: sticky;
  top: ${MAP_OFFSET}px;
  margin-right: ${themeGet('space.4')}px;
  overflow: hidden;
  box-sizing: border-box;
  background: white;
  border-radius: 4px;
  min-width: ${MAP_WIDTH_PERCENT}%;
  height: calc(100vh - ${MAP_OFFSET}px - ${themeGet('space.2')}px);
`

const Loading = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  MIN_WIDTH_FOR_MAP_RENDER,
  MAP_WIDTH_PERCENT,
  shouldShowMap,
  Container,
  MapContainer,
  Loading,
  Title
}
