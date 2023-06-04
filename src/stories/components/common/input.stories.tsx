import type { StoryObj, StoryFn } from '@storybook/react';

import Input from '@components/input';

export default {
  title: 'components/common/Input',
  component: Input,
} as StoryObj<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: 'Placeholder...',
};
