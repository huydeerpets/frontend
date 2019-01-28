import {
  updateSelection,
  isNeighborhoodSelected,
  isCitySelected,
  selectCity
} from 'components/shared/NeighborhoodPicker/selection'

describe('neighborhood selection test', () => {
  it('should add a neighborhood to selection', () => {
    let neighborhoods = []
    let newSelection = updateSelection(neighborhoods, 'copacabana')
    expect(newSelection).toEqual(['copacabana'])
  })

  it('should remove an already selected neighborhood', () => {
    let neighborhoods = ['copacabana']
    let newSelection = updateSelection(neighborhoods, 'copacabana')
    expect(newSelection).toEqual([])
  })

  it('should return true if the given neighborhood is selected', () => {
    let selectedNeighborhoods = ['copacabana', 'ipanema']
    expect(isNeighborhoodSelected(selectedNeighborhoods, 'ipanema')).toBe(true)
    expect(isNeighborhoodSelected(selectedNeighborhoods, 'botafogo')).toBe(false)
  })

  it('should return true if every neighborhood in a city is selected', () => {
    let cities = [
      {
        citySlug: 'rio-de-janeiro',
        neighborhoods: [
          {nameSlug: 'leblon'},
          {nameSlug: 'ipanema'},
          {nameSlug: 'copacabana'}
        ]
      }
    ]
    let selected = ['leblon', 'ipanema', 'copacabana']
    let citySlug = 'rio-de-janeiro'
    expect(isCitySelected(cities, selected, citySlug)).toBe(true)
  })

  it('should return false if one neighborhood in a city is not selected', () => {
    let cities = [
      {
        citySlug: 'rio-de-janeiro',
        neighborhoods: [
          {nameSlug: 'leblon'},
          {nameSlug: 'ipanema'},
          {nameSlug: 'copacabana'}
        ]
      }
    ]
    let selected = ['leblon', 'copacabana']
    let citySlug = 'rio-de-janeiro'
    expect(isCitySelected(cities, selected, citySlug)).toBe(false)
  })

  it('should return false if no neighborhood in a city is selected', () => {
    let cities = [
      {
        citySlug: 'rio-de-janeiro',
        neighborhoods: [
          {nameSlug: 'leblon'},
          {nameSlug: 'ipanema'},
          {nameSlug: 'copacabana'}
        ]
      }
    ]
    let selected = []
    let citySlug = 'rio-de-janeiro'
    expect(isCitySelected(cities, selected, citySlug)).toBe(false)
  })

  it('should select all neighborhoods in a city', () => {
    
  })
})
