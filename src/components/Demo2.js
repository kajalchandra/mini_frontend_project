import { useRef, useState } from "react";

const Demo2 = () =>{
  console.log("rendering....")
    //lets create state varibale once after we have created let variable
    const [y,sety] = useState(0)
    let x = 10;
   // const x = 10 if i will do a const, then it will throw error "assignment to constant variable"
   //4. i want a varibale which do not get reset after the componet is re-render , it should hold the value and react should track it
   // i will use useRef
   const ref = useRef(0)
   //not like => ref = 0 
   //ref = {current: and whatever initial value we'll pass}
    return(
        <div className="m-4 p-2 w-96 h-96 border border-black px-2">
          <div>
            {/* i want to change this value */}
            <button onClick={() => {
                x = x + 1
                console.log("x",x) //1. here x value increases but it does not re-render the page , there is no other way i can update it on the UI
            }}
            
                className="bg-green-300 p-2 text-black m-2">Increase x</button>
            <span className="font-bold text-xl">Let = {x}</span> 
            
          </div>
          <div>
            <button onClick={() =>{sety(y + 1)}}// it is re-rendering the component
            //3. suppose we have increse value of x to 15 and now i will increase value of y from 0 to 4 now once again i will try to increase the value of x , but  now the value of x will not start from
            //where we've left i.e 15 instead it's value will start from again 11, because due to state update the value of x gets reset
            //when my component re-render x is wiped off
            //why it did get wiped off, cause it is a function when a function is called in js a whole new execution context is created a whole new memory space is created
            className=" bg-green-300 p-2 text-black m-2">Increase y</button>
            <span className="font-bold text-xl"> State = {y}</span>
          </div>
          <div>
            {/* i want a varibale which do not get reset after the componet is re-render , it should hold the value and react should track it*/}
          </div>
          <div>
           <button onClick={() => {ref.current = ref.current + 1
            console.log(ref.current)
           }}
            className="bg-green-300 p-2 text-black m-2">Increase Ref</button>
            <span className="font-bold text-xl">Ref = {ref.current}</span>
            {/* ref is not like a normal variable it return an object */}
            {/* is it getting changed , it is getting updated when i console log it's value it is getting updated
            but it is not triggering the re-render, it is not visible in the UI*/}
            {/* ref is not re-rendering */}
            {/* but as i update the y, i can see ref is getting updated and when i increase the ref it will not start from it's initial value , it will keep a track of value that was the last value of ref that i have increased */}
          </div>
        </div>
    )
}
export default Demo2