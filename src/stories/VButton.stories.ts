import type { Meta, StoryObj } from '@storybook/vue3-vite'
import VButton, { type Severity } from './VButton.vue'

const possibleOptions: Severity[] = ['secondary', 'info', 'success', 'warn', 'danger', 'contrast']
const meta = {
  title: 'Components/VButton',
  component: VButton,
  tags: ['autodocs'],
  args: {
    label: 'Button',
  },
  argTypes: {
    severity: {
      control: 'select',
      options: possibleOptions,
    },
  },
} satisfies Meta<typeof VButton>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    label: 'Success Button',
    severity: 'success',
  },
}

export const danger: Story = {
  args: {
    label: 'Danger Button',
    severity: 'danger',
  },
}
