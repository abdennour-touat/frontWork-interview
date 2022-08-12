import { ComponentStory, ComponentMeta } from '@storybook/react';
import BestSellers from '../components/BestSellers';

import { data,loadingData } from '../data';
export default {
    title: "Best sellers",
    component: BestSellers,
    args:{
        data
    }
} as ComponentMeta<typeof BestSellers>;

const Template :ComponentStory<typeof BestSellers> = (args) =><BestSellers {...args}/> 

export const Default = Template.bind({});
 export const Loading = Template.bind({});
 Loading.args ={data: loadingData
 };
 