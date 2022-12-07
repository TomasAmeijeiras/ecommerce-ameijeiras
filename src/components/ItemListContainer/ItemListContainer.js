import Counter from "../Count/ItemCount"
import ItemList from "../Item/ItemList"
import Item from "../Item/Item"
import { useState, useEffect } from "react"

const ItemListContainer = ({name}) => {
  const[item,setItems]=useState([])
  const call = new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve()
      },2000)
  })

  call.then(response=> {
      setItems(response)
  })



  return (

     <div name="test">



  <div class="p-3 mb-2 bg-dark text-white">
      {name}

      <ItemList items={item}/>

     </div>



         </div>
 )
}


export default ItemListContainer;

// const ItemListContainer = ({greeting}) => {
//   return (
//   <main>
//   <h1>{greeting}</h1>
//   </main>
//   )
// }

// export default ItemListContainer