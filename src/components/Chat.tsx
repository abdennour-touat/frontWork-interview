import { useState } from "react";
import {XIcon } from "@heroicons/react/solid";
interface ChatProps {
  source: string;
  name: string;
  ocupation: string;
  messageText: string;
  isLoading: boolean;
  onClose: () => any;
  
  onSendMessage: () =>any ;}

export default function Chat({
  messageText,
  name,
  ocupation,
  onClose,
  onSendMessage,
  source,
  isLoading,
}: ChatProps) {
  const [response, setResponse] = useState<string>();
  return (
    <div className=" sm:w-[375px] rounded-3xl overflow-hidden w-[300px]">
        {/* image + name+ occupation + close button || loading placeholder*/}
      {!isLoading ? (
          <div className=" bg-[#4643D3]  px-8 py-[22px] ">
            <div className="grid grid-cols-6">
              {/* name + occupation */}
              <div className="flex  justify-start space-x-4 col-span-5 mb-[17px]">
                <img
                  className="h-12 w-12 rounded-full object-cover "
                  src={source}
                  alt={name}
                />
                <div>
                  <h3 className=" text-white font-semibold text-lg">{name}</h3>
                  <p className="text-white font-normal text-sm opacity-50 ">
                    {ocupation}
                  </p>
                </div>
              </div>
              <XIcon
                className="text-white col-span-1 col-end-8 text-base h-[13px] w-[13px] cursor-pointer opacity-[50%]"
                onClick={() => onClose()}
              />
            </div>
            <div>
              <p className=" text-white font-normal text-base  ">{messageText}</p>
            </div>
          </div>
      ) : (
        <div className=" h-[154px]  bg-[#4643D3] shadow px-8 py-[22px] max-w-sm w-full mx-auto ">
              <XIcon
                className="text-white text-base h-[13px] w-[13px] float-right cursor-pointer opacity-[50%]"
                onClick={() => onClose()}
              />
          <div className="animate-pulse flex space-x-4 ">
            <div className="rounded-full bg-gray-300 h-12 w-12"></div>
            <div className="flex-1 space-y-6 py-1 mt-6 " >
              <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                {/* <div className="h-2 bg-gray-300 rounded"></div> */}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* message + sender  */}

      {/* response + send button */}
      <div className="  bg-gray-300 grid sm:grid-cols-4 grid-cols-4 grid-flow-col-dense">
        <input
          className="sm:col-span-3 col-span-3 sm:px-8 px-4 focus:outline-none py-[18px]"
          type="text"
          placeholder="Type your message"
          onChange={(e) => setResponse(e.target.value)}
        />
        <button
        //   disabled={isLoading}
          className=' text-[#4643D3] font-semibold bg-white col-span-1  text-center'
          onClick={() => onSendMessage()}
        >Send</button>
      </div>
    </div>
  );
}
