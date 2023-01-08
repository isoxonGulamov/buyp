
let box = document.querySelector(".hero__box3")

function renderBuy() {
  let mahsulot = JSON.parse(localStorage.getItem("products"))
  let count = 1
  box.addEventListener("click",(e)=>{
  if (e.target.className.includes("add")) {
   
    for(let i of mahsulot){
      
      if (e.target.id == i.id) {
        
  
         
   
    }
     }
  }else if (e.target.className.includes("remove")) {
     
    for(let i of mahsulot){
      
      if (e.target.id == i.id) {
        
  
        
        if (e.target.id == e.target.id) {
          e.target.innerHTML = count--
          i.price = i.price*count
          console.log(i.price);
        }else if (e.target.id !== e.target.id+1) {
          count = 1
          e.target.innerHTML = count--
        }
   
    }
     }
  }else if(e.target.className.includes("delete")){
   console.log(e.target.className);
   for(let i = 0; i < mahsulot.length;i++){
    if(e.target.id == mahsulot[i].id){
      mahsulot.splice(i,1) 
     
    }
}

  }
  })
    box.innerHTML = mahsulot.map((item)=>{
      

     return `
     <div class = "products__cart2">
     <div class = "products__img-block2">
     <button id = ${item.id} class = "delete">  <img class="delete" src="./img/delete.png" alt="asd"></button>

     <img class="product__img" src="${item.image}" alt="asd">
         
     <p class = "title2">${(item.title)}...</p>
     </div>
        <div class = "product__content2">
        <button id = ${item.id}  class = "remove">-</button>${count}<button  id = ${item.id} class = "add">+</button>

        <span class = "price">$${(item.price-(item.price/100*24)).toFixed(2)}<span>
        </div>
      </div>
     `
     
    }).join("")
}

renderBuy()










