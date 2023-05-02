import {StoryObj, Meta} from '@storybook/react';
import {withThemeFromJSXProvider} from '@storybook/addon-styling';

import GlobalStyles from 'styles/global';
import Main from '.';

const meta: Meta<typeof Main> = {
  title: 'Components/Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withThemeFromJSXProvider({GlobalStyles})],
};

export default meta;
type Story = StoryObj<typeof Main>;

export const Boilerplate: Story = {
  args: {
    logo: {
      src: '/img/next.svg', 
      alt: 'Image containing NextJS Logo'
    },
    title: 'Boilerplate', 
    descriptions: [
      'ReactJS, NextJS and Styled Components', 
      'TypeScript, Jest and Testing Library'
    ],
    illustration:{
      src: '/img/hero-illustration.svg', 
      alt: 'Ilustration of a developer sitted in front of a screen full of code'
    }
  }
};
