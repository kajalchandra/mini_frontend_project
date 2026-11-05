import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/sidebarSlice"
import { useState,useEffect } from "react"
import { SEARCH_API } from "../utils/constants"
import { cacheResults } from "../utils/searchSlice"


const Header = () =>{
 const [searchtxt, setsearchtxt]= useState(" ")
 const [suggestion,setsuggestion]= useState([])
 const [showSuggestion, setshowSuggestion]= useState(false)
  const dispatch = useDispatch()
//subscribe to the store
const searchCache = useSelector((store) => store.search)
//console.log('search cache',searchCache)
useEffect(()=>{
const timer =  setTimeout(()=>{

  if(searchCache[searchtxt]){
   setsuggestion(searchCache[searchtxt])
  
  }else{
    searchSuggestions()
  }
   
  },200)

return ()=>{
  clearTimeout(timer)
}  
 
},[searchtxt])


const searchSuggestions = async () =>{
    const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchtxt)
    const json = await data.json()
    //console.log('value of json',json)
    setsuggestion(json[1])
    dispatch(cacheResults({
      [searchtxt] : json[1]
    }))

}
useEffect(() =>{
 
  //console.log('suggestions',suggestion)
},[suggestion])

  const handleMenu = () =>{
        dispatch(toggleMenu())
  }
    return(
        //notes on grid
        <div className="grid grid-flow-col p-5 shadow-lg"> 
          <div className="grid col-span-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" 
            alt="menuicon"
            className="w-10"
            onClick={()=>{handleMenu()}}
            ></img>
          </div>
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJW3a7aYZYXvYik180wHl5NERw7ZmKV7vDw&s"
            alt="youtube-icon"
            className="w-24 col-span-1"></img>
           </div>
           
              <div className="search col-span-10 relative">
              <input type="text" 
               value = {searchtxt}
               onFocus={() => setshowSuggestion(true)}
               onBlur={()=> setshowSuggestion(false)}
              onChange={(e) => setsearchtxt(e.target.value)}
              
              className="w-1/2 border border-gray-950 rounded-l-full p-2"></input>
              <button
              className="border border-gray-800 p-2 rounded-r-full" >Search</button>
              <div className="w-[34rem] bg-white absolute rounded-md py-3 pl-6 hover:shadow-lg  ">
                {showSuggestion && suggestion.map((sugg) => <ul className="hover:bg-gray-200 p-1 rounded-lg">{sugg}</ul>)}
                {/* <ul className="hover:bg-gray-200 p-1 rounded-lg" >hii</ul> */}

                </div>
           </div>
           
      
           
           
           <div className="user-icon">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GK7YUtkIpzjmqsZkKJL7lso-nWmjdKWg-g&s"
            alt="user-icon"
            className="w-10 col-span-1"></img>
           </div>
        </div>
    )
}
export default Header