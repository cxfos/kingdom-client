import {StoryObj, Meta} from '@storybook/react';

import Logo from '.';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const NextPNG: Story = {
  args: {
    url: 'img/favicon/next-android-chrome-512x512.png',
    alternativeText: 'A developer facing a screen full of code'
  }
};

export const HeroIllustrationSVG: Story = {
  args: {
    url: '/img/hero-illustration.svg',
    alternativeText: 'A developer facing a screen full of code'
  }
};

export const KingdomSVG: Story = {
  args: {
    url: 'img/TKbN_Logo_2023_SVG.svg',
    alternativeText: 'The Kingdom by Night'
  }
};

export const GooglePNG: Story = {
  args: {
    url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png',
    alternativeText: 'Google Logo light color'
  }
};

export const InstagramSVG: Story = {
  args: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
    alternativeText: 'Instagram Logo from wikimedia.org'
  }
};
