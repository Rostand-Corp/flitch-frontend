import type { StoryObj, StoryFn } from '@storybook/react';

import AuthLayout from '@components/auth-layout';
import backgroundImage from '@public/images/sign-up.jpg';

export default {
  title: 'components/AuthLayout',
  component: AuthLayout,
} as StoryObj<typeof AuthLayout>;

const Template: StoryFn<typeof AuthLayout> = (args) => <AuthLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: backgroundImage,
  children: <div>Content</div>,
};
