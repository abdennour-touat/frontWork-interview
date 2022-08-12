
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chat from '../components/Chat';

export default  {
   title: "Chat",
   component: Chat ,
   
} as ComponentMeta< typeof Chat>;

const Template : ComponentStory<typeof Chat> = args =>(<Chat {...args}/>)

export const Default = Template.bind({});

Default.args = {
    messageText: "Hi there.👋 We use Boards to share initial goals and ideas.",
    name: "Emily Dougrer",
    ocupation: "Developer",
    source: "https://s3-alpha-sig.figma.com/img/4708/ffdd/59695912a5cbff3d0f38e351208e5994?Expires=1661126400&Signature=UvmPBiBbaTue5gmPTSL6OZEfl1iFxfWObzC5zE4K3LkEbph4hyYoaTcOmCMwLPgCwEsDQDJehCUZzxS6VgQkgRETgfHnasqTboTvi1nJaozjDC3ReJbS4i05VN20mh2~RrCGtZh4dO9HtzNQ-gyGZghVodvLMZNZxGFduyQQhOXZh7HYI40PcKXplCKYOpQf6NGzt03Bl3CRiDFe2-HTc0DE~Le4IScKO41rkFqjWwDWxVtnSNRpzkkYa7NzAQ7wAp8JbWlWY-89cBEUVuoHqtbpeFX8dNySUr5Oop-OMowt1B14yKrTf1NekEMvp2Znw4ewDuuo-QLSVr6S97q3cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    isLoading: false,
    isSending: false,
}

export const Loading = Template.bind({});
Loading.args = {
    messageText: "Hi there.👋 We use Boards to share initial goals and ideas.",
    name: "Emily Dougrer",
    ocupation: "Developer",
    source: "https://s3-alpha-sig.figma.com/img/4708/ffdd/59695912a5cbff3d0f38e351208e5994?Expires=1661126400&Signature=UvmPBiBbaTue5gmPTSL6OZEfl1iFxfWObzC5zE4K3LkEbph4hyYoaTcOmCMwLPgCwEsDQDJehCUZzxS6VgQkgRETgfHnasqTboTvi1nJaozjDC3ReJbS4i05VN20mh2~RrCGtZh4dO9HtzNQ-gyGZghVodvLMZNZxGFduyQQhOXZh7HYI40PcKXplCKYOpQf6NGzt03Bl3CRiDFe2-HTc0DE~Le4IScKO41rkFqjWwDWxVtnSNRpzkkYa7NzAQ7wAp8JbWlWY-89cBEUVuoHqtbpeFX8dNySUr5Oop-OMowt1B14yKrTf1NekEMvp2Znw4ewDuuo-QLSVr6S97q3cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    isLoading: true,
    // ...Default.args,
}

export const LongText = Template.bind({});
LongText.args = {
    messageText: "Hi there.      We use Boards to share initial goals and ideas.Hi there.      We use Boards to share initial goals and ideas.Hi there.      We use Boards to share initial goals and ideas.Hi there.      We use Boards to share initial goals and ideas.Hi there.      We use Boards to share initial goals and ideas.Hi there.      We use Boards to share initial goals and ideas.Hi there.      We use Boards to share initial goals and ideas.Hi there.      We use Boards to share initial goals and ideas.Hi there.      We use Boards to share initial goals and ideas.Hi there.      We use Boards to share initial goals and ideas.",
    name: "Emily Dougrer",
    ocupation: "Developer",
    source: "https://s3-alpha-sig.figma.com/img/4708/ffdd/59695912a5cbff3d0f38e351208e5994?Expires=1661126400&Signature=UvmPBiBbaTue5gmPTSL6OZEfl1iFxfWObzC5zE4K3LkEbph4hyYoaTcOmCMwLPgCwEsDQDJehCUZzxS6VgQkgRETgfHnasqTboTvi1nJaozjDC3ReJbS4i05VN20mh2~RrCGtZh4dO9HtzNQ-gyGZghVodvLMZNZxGFduyQQhOXZh7HYI40PcKXplCKYOpQf6NGzt03Bl3CRiDFe2-HTc0DE~Le4IScKO41rkFqjWwDWxVtnSNRpzkkYa7NzAQ7wAp8JbWlWY-89cBEUVuoHqtbpeFX8dNySUr5Oop-OMowt1B14yKrTf1NekEMvp2Znw4ewDuuo-QLSVr6S97q3cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    isLoading: false,
    // ...Default.args,
}

export const Sending = Template.bind({});
Sending.args = {
    messageText: "Hi there.👋 We use Boards to share initial goals and ideas.",
    name: "Emily Dougrer",
    ocupation: "Developer",
    source: "https://s3-alpha-sig.figma.com/img/4708/ffdd/59695912a5cbff3d0f38e351208e5994?Expires=1661126400&Signature=UvmPBiBbaTue5gmPTSL6OZEfl1iFxfWObzC5zE4K3LkEbph4hyYoaTcOmCMwLPgCwEsDQDJehCUZzxS6VgQkgRETgfHnasqTboTvi1nJaozjDC3ReJbS4i05VN20mh2~RrCGtZh4dO9HtzNQ-gyGZghVodvLMZNZxGFduyQQhOXZh7HYI40PcKXplCKYOpQf6NGzt03Bl3CRiDFe2-HTc0DE~Le4IScKO41rkFqjWwDWxVtnSNRpzkkYa7NzAQ7wAp8JbWlWY-89cBEUVuoHqtbpeFX8dNySUr5Oop-OMowt1B14yKrTf1NekEMvp2Znw4ewDuuo-QLSVr6S97q3cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    isLoading: false,
    isSending: true,
    // ...Default.args,
}