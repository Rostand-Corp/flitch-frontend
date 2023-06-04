import type { StoryObj, StoryFn } from '@storybook/react';

import Button from '@components/button';

export default {
  title: 'components/common/Button',
  component: Button,
} as StoryObj<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  appearance: 'default',
  children: 'Default Button',
};

export const Primary = Template.bind({});

Primary.args = {
  appearance: 'primary',
  children: 'Primary Button',
};
