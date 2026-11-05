import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessages } from "../utils/chatSlice"
import { generateRandomNumber } from "../utils/helpers"
import { makeRandomMessage } from "../utils/helpers"


const LiveChat = () =>{
    const [livemessage,setlivemessage] = useState("")
    const dispatch = useDispatch()
    const liveMessages = useSelector((store) => store.chat.messages)
    console.log("chatMessages",liveMessages)
    useEffect(() =>{ 
        const i = setInterval(()=>{
        //api polling
        //console.log("API polling")
        dispatch(addMessages({
            name : generateRandomNumber(),
            text : makeRandomMessage(15)
        }))
        
       },500)
       return () => clearInterval(i)

    },[dispatch])
   return(
    <div>
          <div className="ml-2 p-2 border border-black w-[26rem] h-[480px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
            {liveMessages.map((message,i) => <ChatMessage key = {i} name = {message.name} text = {message.text}/>)}
            {/* <ChatMessage name = "Rita saini" text="hello there this is live chat"/>
            <ChatMessage name = "Rita saini" text="hello there this is live chat"/> */}
        </div>
        
    </div>
    <div className="border border-black w-[67%] p-2">
       <input type="text"
       value = {livemessage}
       onChange={(e) => setlivemessage(e.target.value )}
       className="border border-black mr-1 w-[20rem] p-2"></input> 
       <button className="px-2 mx-2 bg-green-100">Send</button>
    </div>
    </div>
  
  
   )
}
export default LiveChat