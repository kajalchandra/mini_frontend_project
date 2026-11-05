import { useSelector } from "react-redux"


const Sidebar = () =>{
  const isSidebarOpen= useSelector((store) => store.sidebarMenu.isMenuOpen)
  console.log('isSidebarOpen',isSidebarOpen)

  if(!isSidebarOpen){
    return null
  }

    return(
        <div className="shadow-lg p-3 mr-3 w-48 h-screen">
            <ul className="m-3">
                <li className="font-bold text-m">Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <ul className="m-3">
                <li className="font-bold text-m">Subscriptions</li>
                <li>Akshay Saini</li>
                <li>Tanay Prarap</li>
                <li>Anurag Singh ProCoder</li>
                
            </ul>
            <ul className="m-3">
                <li className="font-bold">Explore</li>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>News</li>
                <li>Sports</li>
            </ul>
        </div>
    )
}

export default Sidebar