import {StoryObj, Meta} from '@storybook/react';
import {withThemeFromJSXProvider} from '@storybook/addon-styling';

import GlobalStyles from 'styles/global';
import HeroSection from '.';

const meta: Meta<typeof HeroSection> = {
  title: 'Components/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  decorators: [withThemeFromJSXProvider({GlobalStyles})],
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Basic: Story = {
  args: {}
};
