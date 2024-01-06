import React from "react";
import Card from './Card'


// ONE WAY 
// const Cardlist=({robots})=>{

//     if(true){}
//     const cardArray=robots.map((user,index)=>{
//         return <Card key={index} 
//         id={robots[index].id} name={robots[index].name} username={robots[index].username} email={robots[index].email}/>
//     })
//     return(
//         <div>
//             {cardArray}
//         </div>
//     )
// }

const Cardlist = ({robots}) =>{
    // if (true){
    //     throw new Error("NOOOOOO!")
    // }
    return(
        <div>
            {
                robots.map((user,index)=>{
                    return (
                        <Card key={index} id={robots[index].id} name={robots[index].name} username={robots[index].username} email={robots[index].email}/>
                    )
                })
            }
        </div>
    )
}

export default Cardlist;