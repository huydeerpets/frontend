import {Component} from 'react'
import Observer from '@researchgate/react-intersection-observer'
import Container, {Page, Button} from './styles'

const guard = (cond) => (fun) => (...args) => {
  if (cond(...args)) fun(...args)
}

const inView = guard(({isIntersecting}) => isIntersecting)

export default class InfiniteScroll extends Component {
  static defaultProps = {
    threshold: '100px'
  }

  constructor(props) {
    super(props)
    const {currentPage} = props
    this.state = {
      currentPage
    }
  }

  componentDidMount() {
    // Load default page
    if (!this.props.children.length) {
      this.props.onLoad()
    }
  }

  onChange = (i) => inView(() => this.props.onChange(i))

  onNext = inView(() => this.props.onNext())

  renderPage = ([page, data]) => {
    const {children: render} = this.props
    return (
      <Observer onChange={this.onChange(page)}>
        <Page key={page}>
          {data.map(render)}
        </Page>
      </Observer>
    )
  }

  render() {
    const {pages, threshold, onNext} = this.props
    return (
      <Container>
        {Array.from(pages).map(this.renderPage)}
        <Observer
          onChange={this.onNext}
          rootMargin={`${threshold} 0px 0px 0px`}
        >
          <Button onClick={onNext}>Carregar Mais</Button>
        </Observer>
      </Container>
    )
  }
}