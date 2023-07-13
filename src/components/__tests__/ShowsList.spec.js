import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShowsList from '../ShowsList.vue'

describe('ShowsList', () => {
  it('renders properly', () => {
    const wrapper = mount(ShowsList)
    expect(wrapper.text()).toContain('New Shows')
  })
})
