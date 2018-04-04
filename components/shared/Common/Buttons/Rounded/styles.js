import * as colors from 'constants/colors'
import {BaseButton} from '../styles'

export default BaseButton.extend`
  box-shadow: none;
  background-color: ${({light}) => (light ? 'white' : colors.blue.medium)};
  color: ${({light}) => (light ? colors.blue.medium : 'white')};
  width: ${({full}) => (full ? '100%' : '')};
  border-radius: 20px;
  margin: 5px;

  border: 1px solid
    ${({light}) => (light ? colors.blue.medium : colors.blue.darker)};

  &:hover {
    background-color: ${({light}) => (light ? 'white' : colors.blue.darker)};
  }

  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`