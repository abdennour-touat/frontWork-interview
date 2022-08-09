import { ComponentStory, ComponentMeta } from '@storybook/react';
import BestSellers from '../components/BestSellers';


export default {
    title: "Best sellers",
    component: BestSellers
} as ComponentMeta<typeof BestSellers>;

const Template :ComponentStory<typeof BestSellers> = (args) => <BestSellers {...args}/>

export const Default = Template.bind({});