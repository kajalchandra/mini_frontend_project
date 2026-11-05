const Api_key =  process.env.REACT_APP_YOUTUBE_API_KEY
export const VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" + Api_key
export const LIVE_CHAT_COUNT = 10