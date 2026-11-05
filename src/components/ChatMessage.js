const ChatMessage = ({name,text}) =>{
    return(
        <div className="flex items-center shadow-sm p-2">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GK7YUtkIpzjmqsZkKJL7lso-nWmjdKWg-g&s" alt="user"
           className="w-8 ml-2"></img>
           <span className="font-bold px-2">{name}</span>
           <span>{text}</span>
        </div>
    )
}

export default ChatMessage