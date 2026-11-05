import { useEffect, useState } from "react"
import { VIDEO_API } from "../utils/constants"
import VideoCart from "./VideoCart"
import Shimmer from "./Shimmer"
import WatchPage from "./WatchPage"
import { Link } from "react-router-dom"
import { adCart } from "./VideoCart"


const VideoContainer = () =>{
   const [videos,setvideos]= useState([])
   useEffect(()=>{
    getVideos()
   },[])

   const getVideos =async () =>{
    const data = await fetch(VIDEO_API)
    const json = await  data.json()
    // console.log(json)
    // console.log(json.items)
    setvideos(json.items)

   }
   //console.log(videos[0])
   if(videos.length === 0){
    return <Shimmer/>
   }
  
  
   else return(
        <div className="flex flex-wrap">
           
           {videos.map((video) => <Link to = {"/watch?v="+video.id}><VideoCart Videodata={video}/></Link>)}
            {/* <VideoCart Videodata = {videos[1]}/> */}
        </div>
    )
}

export default VideoContainer