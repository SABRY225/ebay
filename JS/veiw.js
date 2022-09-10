// const createSmallCards=(data)=>{
//     return`
//     <div class="col-3 item-counter">
//     <button class="but-counter decrement">-</button>
//     <p class="item-cont">${data.item}</p>
//     <button class="but-counter increment">+</button>
// </div>
// <div><p class="col-3 sm-preca" data-price="${data.sellprice}">$${data.sellprice * data.item}</p></div>`;
// }
// let totalBill =0;
// const setproducts =(name) =>{
//     const element = document.querySelector(`.${name}`);
//     let data =JSON.parse(localStorage.getItem(name));
//     if(data == null){
//         element.innerHTML=`<img src="https://i.ebayimg.com/images/g/vHIAAOSwHfBi39CG/s-l225.webp" class="img-cart">`;
//     }else{
//         for (let i = 0; i < data.length; i++) {
//             element.innerHTML += createSmallCards(data[i]);
//             if (name == 'cart') {
//                 totalBill +=Number(data[i].sellprice * data[i].item)
                
//             }
//         }
//         let billprice = document.querySelector('.bell')
//         .billprice.innerHTML=`$${totalBill}`
//     }
// }
// setproducts('cart');
