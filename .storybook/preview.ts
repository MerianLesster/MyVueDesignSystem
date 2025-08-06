import '../src/assets/main.css'
import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

setup((app) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: 'none',
      },
    },
  })
})

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
