import styled from 'styled-components'
import theme from 'config/theme'
import * as colors from 'constants/colors'
import {
  headerMobileMedia,
  mobileMedia
} from 'constants/media'
import Row from '@emcasa/ui-dom/components/Row'
import Text from '@emcasa/ui-dom/components/Text'
import { LISTING_DETAILS_MAX_WIDTH } from 'components/listings/show/Body/styles'

export const Wrapper = styled(Row)`
  justify-content: center;
  padding: 0 ${theme.space[4]}px;
  margin: ${theme.space[5]}px 0;
`

export const Container = styled('ul')`
  box-sizing: border-box;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${LISTING_DETAILS_MAX_WIDTH}px;
  margin: 0;
  padding: 0;

  a,
  :visited {
    text-decoration: none;
    color: ${colors.blue.medium};
    font-weight: 700;
  }

  svg {
    width: 20px !important;
    height: 20px;
    :hover {
      cursor: pointer;
    }
    path {
      fill: ${colors.red.logo};
    }
  }
`

export const Path = styled.li`
  :not(:first-of-type) {
    :before {
      content: '>';
      font-size: 14px;
      margin: 0 5px;
      position: relative;
      color: ${theme.colors.grey};
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.grey};

    &:hover {
      color: ${theme.colors.pink};
    }
  }
`
