import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chat from '../components/Chat';

export default  {
   title: "Chat",
   component: Chat 
} as ComponentMeta< typeof Chat>;

const Template : ComponentStory<typeof Chat> = args =><Chat {...args}/>

export const Default = Template.bind({});