import * as colors from 'constants/colors'
import {mobileMedia} from 'constants/media'
import styled from 'styled-components'

export default styled.div`
  border: 1px solid ${colors.lightestGray};
  border-radius: 12px;
  box-shadow: 0 6px 16px 0 rgba(38, 38, 38, 0.15);
  float: right;
  padding: 24px;
  width: 260px;
  background: white;

  > div {
    border-top: 1px solid ${colors.lightestGray};
    margin-top: 20px;
    padding-top: 20px;
  }

  > div > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 3px 0;
    span {
      &:first-of-type {
        color: ${colors.mediumDarkGray};
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      &:last-of-type {
        font-size: 15px;
        font-weight: 300;
      }
    }
  }

  span.price {
    font-size: 26px;
    font-weight: 300;
  }

  button {
    margin-top: 30px;
    width: 100%;
  }

  @media ${mobileMedia} {
    margin: 0 auto;
  }
`