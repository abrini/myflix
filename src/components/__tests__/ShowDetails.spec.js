import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShowDetails from '../ShowDetails.vue'

const show = {
  "id": 15309,
  "url": "https://www.tvmaze.com/shows/15309/morning-joe",
  "name": "Morning Joe",
  "type": "News",
  "language": "English",
  "genres": ['Comedy'],
  "status": "Running",
  "premiered": "2006-04-09",
  "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/302/755123.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/302/755123.jpg"
  },
  "summary": "<p>On <b>Morning Joe</b>, the hosts Joe Scarborough, Mika Brzezinski, and Willie Geist engage in dynamic discussion about political news and issues important to all Americans. Morning Joe attracts a variety of guests, including top newsmakers, politicians and cultural influencers.</p>",
};

describe('ShowDetails', () => {
  it('renders basic data properly', () => {
    const wrapper = mount(ShowDetails, { props: { show } })
    expect(wrapper.find('[data-testid=show-title]').text()).toContain('Morning Joe')
    expect(wrapper.find('[data-testid=type]').text()).toContain('News')
  })

  it('shows genre if available', () => {
    const wrapper = mount(ShowDetails, { props: { show } })
    expect(wrapper.find('.show-info').text()).toContain('Genre:')
    expect(wrapper.find('[data-testid=genre]').text()).toContain('Comedy')
  })

  it('shows image if available', () => {
    const wrapper = mount(ShowDetails, { props: { show } })
    expect(wrapper.find('[data-testid=show-has-image]').exists()).toBe(true)
  })

  it('shows default image if the show has no image', () => {
    // Remove the image property from the show
    const tempShow = { ...show }
    tempShow.image = null
    const wrapper = mount(ShowDetails, { props: { tempShow } })
    expect(wrapper.find('[data-testid=show-has-image]').exists()).toBe(false)
  })

})
