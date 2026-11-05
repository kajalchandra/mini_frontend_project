import { useMemo, useState } from "react"
import { findPrime } from "../utils/helpers"

const Demo = () =>{
    const [ text, settext] = useState(0)
    const [isDarkTheme,setIsDarkTheme] = useState(false)
    //this console will log after every render
    console.log("Rendering....")
    //heavy operation
    // const prime = () => {
    //     console.log("calculate Prime Number of", text )
    //    return findPrime(text)
    // }
    const prime = useMemo(() => findPrime(text),[text])

    
    return(
        <div className= {
            "m-4 p-2 w-96 h-96 border border-black px-2 " + (isDarkTheme && " bg-gray-900 text-white")
            }>
                <div>
                    <button
                    className="bg-green-200 p-2 m-10"
                    onClick={() => setIsDarkTheme(!isDarkTheme) }>Toggle</button>
                </div>
            <div>
                <input type="number" value={text} onChange={(e) => settext(e.target.value)}
                className="border border-black w-72"></input>
            </div>
            <div>
                <h1>nth Prime : {prime}</h1>
            </div>
          
        </div>
    )
}

export default Demo