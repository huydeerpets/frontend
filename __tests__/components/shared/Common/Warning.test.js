/* eslint-env jest */
import {shallow} from 'enzyme'
import Warning from 'components/shared/Common/Warning'
import * as colors from 'constants/colors'
import 'jest-styled-components'

describe('<Warning />', () => {
  it('should render with blue background if no color props is passed', () => {
    const wrapper = shallow(<Warning />)
    expect(wrapper).toHaveStyleRule('background', colors.blue.light)
  })

  it('should render with blue background if color props is undefined', () => {
    const wrapper = shallow(<Warning green={undefined} />)
    expect(wrapper).toHaveStyleRule('background', colors.blue.light)
  })

  it('should render with green background green props is passed', () => {
    const wrapper = shallow(<Warning green />)
    expect(wrapper).toHaveStyleRule('background', colors.green.light)
  })

  it('should render with orange background orange props is passed', () => {
    const wrapper = shallow(<Warning orange />)
    expect(wrapper).toHaveStyleRule('background', colors.orange.light)
  })

  it('should render with red background if red props is passed', () => {
    const wrapper = shallow(<Warning red />)
    expect(wrapper).toHaveStyleRule('background', colors.red.light)
  })
})
