import type { StoryObj, StoryFn } from '@storybook/react';

import Checkbox from '@components/checkbox';

export default {
  title: 'components/common/Checkbox',
  component: Checkbox,
} as StoryObj<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'checkbox',
};
