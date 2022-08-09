import { useState } from "react";

interface ChatProps {
    source: string;
    name: string;
    ocupation: string;
    messageText : string;
    onClose: ()=>{};
    onSendMessage : ()=>{}
}
export default function Chat({messageText,name,ocupation, onClose, onSendMessage, source}:ChatProps) {
    const [response , setResponse] = useState<string>();
  return (
    <div>
        {/* message + sender  */}
        <div>
            {/* image + name+ occupation + close button */}
            <div>
                <img src={source} alt={name} />
                {/* name + occupation */}
                <div>
                    <h3 className=" text-pink-500">{name}yeah</h3>
                    <p>{ocupation}</p>
                </div>
                <span onClick={()=>onClose}>X</span>
            </div>
            <p>{messageText}</p>
            
        </div>
        {/* response + send button */}
        <form action="">
            <input type="text"  onChange={(e)=>setResponse(e.target.value)}/>
            <button type="submit">send</button>
        </form>
    </div>
  )
}
