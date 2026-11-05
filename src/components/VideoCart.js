const VideoCart = ({Videodata}) =>{
   // console.log("videoData",Videodata)
   const {title,channelTitle} = Videodata.snippet
    const thumbnail = Videodata.snippet.thumbnails.medium.url
    //console.log("thumbnail",thumbnail)
    return(
        <div className="shadow-lg mt-3 ml-2 w-80 ">
            <img src={thumbnail} alt="thumbnail" 
            className="rounded-md"></img>
            <h1>{title}</h1>
            <p>{channelTitle}</p>
        <p>{Videodata.statistics.viewCount}{" "}views</p>
        </div>
    )
}


export const adCart = () =>{
    return (
        <div>
            <VideoCart/>
        </div>
    )
}

export default VideoCart