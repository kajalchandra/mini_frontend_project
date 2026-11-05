const  commentData = [
    {
        name: "kajal",
        text:"hello this is kajal",
        replies: [
            {
                name: "neel",
                text:"hii kajal",
                replies: [
                    {
                        name: "kajal",
                        text: "hii neel",
                        replies : []
                    }
                ]
            }
        ]
    },
    {
        name: "niya",
        text:"hello this is niya",
        replies: [
            {name:"vishwas",
            text: "hii niya",
            replies: [{
                name: "jaya",
                text: "hii vishwas",
                replies : []
            }]
            }
        ]
    },
    {
        name: "niya",
        text:"hello this is niya",
        replies: [ ]
    },
    {
        name: "niya",
        text:"hello this is niya",
        replies: [
            {name:"vishwas",
            text: "hii niya",
            replies: [{
                     name: "diva",
                     text: "how are you",
                     replies : []
            }]
            }
        ]
    } 
    
  
]



//making a comment component
const Comment = ({data})=>{
   // console.log('value of data ',data)
   const {name,text} = data
    return(
        <div className="flex m-4 shadow-sm bg-gray-100 p-2 rounded-lg">
            <div>
            <img 
            className="w-9 mr-3 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GK7YUtkIpzjmqsZkKJL7lso-nWmjdKWg-g&s"
            alt="user"></img>
            </div>
            <div>
                <p className="font-bold ">{name}</p>
                <p>{text}</p>
                <p></p>
            </div>
            
        </div>
    )
}


const CommentList = ({comments}) =>{
    console.log("commentList",comments)
        return(
            <div>
                {comments.map((comment,index )=> 
                <div>
                     <Comment key = {index} data = {comment}/>
                     <div className="pl-5 border border-l-black">
                        {/* these replies are list of comments at the end of the day */}

                        {/* <Comment key={index} data = {comment}/>
                        <Comment key={index} data = {comment}/>
                        <Comment key={index} data = {comment}/>  */}
                        {/* so i can write commentList */}
                        <CommentList comments={comment.replies}/>
                     </div>

                </div>
               
                
                )}
            </div>
        )
}





const CommentContainer = () =>{
    return(
        <div className="p-3 m-4">
            <h1 className="text-2xl font-bold">Comments :</h1>
            {/* <Comment data = {commentData[0]}/> */}
            <CommentList comments = {commentData}/>
        </div>
    )
}

export default CommentContainer