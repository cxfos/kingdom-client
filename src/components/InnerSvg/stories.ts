import {StoryObj, Meta} from '@storybook/react';

import InnerSvg from '.';

const meta: Meta<typeof InnerSvg> = {
  title: 'Components/InnerSvg',
  component: InnerSvg,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof InnerSvg>;

export const Basic: Story = {
  args: {
    svgFileContent: '<svg height="140" width="500"><ellipse cx="200" cy="80" rx="100" ry="50" /></svg>',
    alternativeText: 'The Kingdom by Night'
  }
};
