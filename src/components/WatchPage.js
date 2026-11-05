
import { useDispatch } from "react-redux"
import { defaultclose } from "../utils/sidebarSlice"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import CommentContainer from "./CommentContainer"
import LiveChat from "./LiveChat"

const WatchPage = () => {
  const [searchParams] = useSearchParams()

  const params = searchParams.get("v")
  console.log("params", params)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(defaultclose())
  }, [dispatch])

  return (
    <div className="flex flex-col w-full">
      <div className="ml-14 mt-3 flex w-full">
        <div>
          <iframe
            width="890"
            height="480"
            src={"https://www.youtube.com/embed/" + params}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <CommentContainer />
    </div>
  )
}

export default WatchPage
