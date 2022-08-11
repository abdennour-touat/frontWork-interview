import { useState } from "react";

interface ChatProps {
    source: string;
    name: string;
    ocupation: string;
    messageText : string;
    onClose: ()=>{};
    onSendMessage : (message: string |undefined)=>{}
}
export default function Chat({messageText,name,ocupation, onClose, onSendMessage, source}:ChatProps) {
    const [response , setResponse] = useState<string>();
  return (
    <div className=" w-[375px] rounded-3xl overflow-hidden" >
        {/* message + sender  */}
        <div >
            {/* image + name+ occupation + close button */}
            <div className=" bg-[#4643D3] h-[154px] px-8 py-[22px] ">
                <div className="grid grid-cols-3">
                {/* name + occupation */}
                <div className="flex  justify-start space-x-4 col-span-2 mb-[17px]">
                <img className="h-12 w-12 rounded-full object-cover " src={source} alt={name} />
                <div>
                    <h3 className=" text-white font-semibold text-lg">{name}</h3>
                    <p className="text-white font-normal text-sm opacity-50 ">{ocupation}</p>
                </div>
                </div>
                <span className="text-white colspan-1 text-right text-base" onClick={()=>onClose}>X</span>
                </div>
                <div>
                     <p className=" text-white font-normal text-base">{messageText}</p>
                </div>
            </div>
            
        {/* response + send button */}
        </div>
        <form action="GET" className=" h-[58px] w-[375px] bg-gray-300 grid grid-cols-4 ">
            <input className="col-span-3 px-8 focus:outline-none" type="text" placeholder="Type your message"  onChange={(e)=>setResponse(e.target.value)}/>
            <button type="submit" className=" text-[#4643D3] font-semibold bg-white" onSubmit={()=>onSendMessage(response)}>send</button>
        </form>
    </div>
  )
}
