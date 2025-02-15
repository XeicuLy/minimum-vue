import { createTestingPinia } from '@pinia/testing'
import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  test('sample test', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
