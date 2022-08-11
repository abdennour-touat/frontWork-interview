import BestSeller from "../components/BestSeller";
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    name: "BestSeller",
    component: BestSeller,
    args:{
        imageSource: "https://s3-alpha-sig.figma.com/img/b744/8c8d/227cb7803cb86000746933f580388893?Expires=1661126400&Signature=b1arLOtxtNK4xyFMAYpXVFMwRUiClr1tm~zo8MWe66KpYfBCm43irenBc1mmRj50xHotaTLuUsLSCvvHML2HIeG6XgIG2fbhZDvmoUyWEGF~BBMQKLDMF286nQFBUivbB33oE8F0ceg~XX6qgjsR22-CClAcYecI7JwYDdoVVUMQkIHhkHj472OSSvI8SJp9WCG2cP1KfzqN7NZQ~rMp5J3ppRNtW54S0WABIu90nAfXp-iJvp1F6OK78ea5Awzl63JSCoayB7yxM2XER6cA~DNWLxQpk501Fclaj5iHtyqWt-Fx9Hhx5aec9jb6M12gtK1fFejJNSmxm5RGTScX2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        brand: "Nike",
        price: "$195.80",
        modelName: "Nike Air Max 270"

    }
} as ComponentMeta<typeof BestSeller>

const Template: ComponentStory<typeof BestSeller> = (args) => <BestSeller {...args}/>

export const Default = Template.bind({});

