
import fns from "../js/utils.js"

let box = document.querySelector(".products__box")
let list = document.querySelector(".hero2__list")
let btnall = document.querySelector(".hero2__btn-all")
let search = document.querySelector(".input")
let ring = document.querySelector(".ring")
let render  = (qol)=>{

      // }


  box.innerHTML = qol.map((item)=>{
    // if (item.title) {
    //   for(let i = 0; i < item.title.length;i++){
    //    if (item.title.length > 40) {
    //      console.log(item.title.length);

    //     item.title.slice(40,100)
    //    }
  
    //   }
function etr(title) {
  for(let i = 0; i < item.title.length;i++){
        
    if (item.title.length > 40) {
      let tg = item.title.slice(i,30,"...")
      console.log(tg);
      return tg
    }else{
      return title
    }
       
      }
}
    
     return `
     <div class = "products__cart "  >
     <div class = "products__img-block">
     <img class="product__img" src="${item.image}" alt="asd">
       <button  class = "favorit"> <img id = ${item.id} class="header__icon" src="./img/cart.png" alt="cart"></button>
     </div>
        <div class = "product__content">
        <p class = "title">${etr(item.title)}...</p>
        <p class = "raiting">${item.rating.rate}⭐⭐⭐⭐</p>
        <span class = "price">$${(item.price-(item.price/100*24)).toFixed(2)}<span>

        <mark class = "price2"><del>$${item.price}</del></mark>
        <span class = "chegirma">24% Off</span>
    
        </div>
      </div>
     `
   }
   ).join("")
   
  }
  const {$, $$} = fns
  let countries = []

  // ? => bu narsa null yoki undefined bo'lmasa degani
  let getData = () =>{
          
   fetch("https://fakestoreapi.com/products",{
     method : "GET",
     headers:{
       "Content-Type":"application/json",
     }
   }).then((item)=>item.json())
   .then((data)=>{
    countries = data 

  for(let i of data){
    if (data.length > 10) {
       let qol = data.slice(i,8)
       render(qol)
    }
  }

  btnall.addEventListener("click",(e)=>{
    render(data)
  })

  
   })
  
  }
  getData()
  


list.addEventListener("click",(e)=>{
  if (e.target.className.includes("mean")) {
    box.innerHTML = ""
    fetch("https://fakestoreapi.com/products/category/men's%20clothing",{
      method : "GET",
      headers:{
        "Content-Type":"application/json",
      }
    }).then((item)=>item.json())
    .then((data)=>{

   render(data)
   
    })
  }else if(e.target.className.includes("women")){
    box.innerHTML = ""
    fetch("https://fakestoreapi.com/products/category/women's%20clothing",{
      method : "GET",
      headers:{
        "Content-Type":"application/json",
      }
    }).then((item)=>item.json())
    .then((data)=>{
 
   render(data)
   
    })
  }else if (e.target.className.includes("zargar")) {
    box.innerHTML = ""
    fetch("https://fakestoreapi.com/products/category/jewelery",{
      method : "GET",
      headers:{
        "Content-Type":"application/json",
      }
    }).then((item)=>item.json())
    .then((data)=>{
      

   render(data)
   
    })
  }else if (e.target.className.includes("electr")) {
    box.innerHTML = ""
    fetch("https://fakestoreapi.com/products/category/electronics",{
      method : "GET",
      headers:{
        "Content-Type":"application/json",
      }
    }).then((item)=>item.json())
    .then((data)=>{

   render(data)
                     
    })
  }else if (e.target.className.includes("home")) {
    box.innerHTML = ""
       getData()
  }
})



  


search.addEventListener("input", function(e){
  let searchData = countries.filter(item => item.title.toLowerCase().includes($(".input").value.toLowerCase()))

  render(searchData)
})

let res = 0;
box.addEventListener("click",(e)=>{
if (e.target.className == "header__icon") {
    console.log(e.target.id);
    let produc = countries.find(el => el.id == e.target.id)

    let arr = JSON.parse(localStorage.getItem("products")) || []
    if (!arr.find(el => el.id == e.target.id)) {
        arr.push(produc)
    }
    localStorage.setItem("products", JSON.stringify(arr))

    ring.innerHTML = `<h3 class = "order">${arr.length }</h3>`
}
})