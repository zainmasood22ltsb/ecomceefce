// Card Work Is Here 

var itemsData = [
    {
        id: 1,
        Name: "burger",
       
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: " $100,000"
    },
    {
        id: 2,
        Name: "burger",
       
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: "$56"
    }
    ,
    {
        id: 3,
        Name: " burger",
        
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: "$34"
    }
    ,
    {
        id: 4,
        Name: " burger", //16-r0073cl Gaming & Entertainment Laptop
        size: " All",
        color: " Black",
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: " Rs. 390,000"
    }
    ,
    {
        id: 5,
        Name: "burger",
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: "$56"
    }
    ,
    {
        id: 6,
        Name: " burger",
       
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: " $10"
    }
    ,
    {
        id: 7,
        Name: "burger",
        size: " Single",
        color: " White",
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: " $10"
    }
    ,
    {
        id: 8,
        Name: " burger",
       
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: " $10"
    }
    ,
    {
        id: 9,
        Name: "burger",
       
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: " $20"
    }
    ,
    {
        id: 10,
        Name: " burger",
      
        color: " Black , Sky Blue , white",
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: " $70"
    }
    ,
    {
        id: 11,
        Name: "burger",
        
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: "$56"
    }
    ,
    {
        id: 12,
        Name: " burger",
        
        image: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1739912093-12.jpeg%3Fq%3D10&w=640&q=75",
        price: "$56"
    }
]




var cardArea = document.getElementById("cardArea") || ''
for (var i = 0; i < itemsData.length; i++) {
    cardArea.innerHTML += `
    <div class="card">
            <div class="image">
                <img src="${itemsData[i].image}" alt="">
            </div>
            <div class="cardText">

                <span class="bold">Product :</span><span>${itemsData[i].Name}</span><br>
                <span class="bold">Color :</span><span>${itemsData[i].color}</span><br>
                <span class="bold">Size/specs :</span><span>${itemsData[i].size}</span><br>
                <span class="bold">Price :</span><span>${itemsData[i].price}</span><br>
                <button onclick="add(this)">Add to Cart</button>           
            </div>
        </div>
    `
}

// add to card work is here *************


var currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
var addToCard = JSON.parse(window.localStorage.getItem('addToCard')) || [];
var getData = window.localStorage.getItem("userdata");
var getParseData = JSON.parse(getData);
console.log(addToCard);


function add(e) {

    // Check user can signup or not 

   if(!currentUser){
    alert('SignIn First')
    window.location.href = './login.html'
   }
   else{
    
    var productName = e.parentNode.childNodes[2].textContent;
    // console.log(productName);

    // for (var j = 0; j < itemsData.length; j++) {
    //     if (idNode == itemsData[j].id) {
    //         console.log("hellow")
    //         for (var k = 0; k < getParseData.length; k++) {
    //             if (currentUser.email == getParseData[k].email) {
    //                 if (!getParseData[k].CardId) {
    //                     getParseData[k].CardId = [];
    //                 }
    //                 getParseData[k].CardId.push(itemsData[j]);
    //                 window.localStorage.setItem("userdata", JSON.stringify(getParseData));
    //             }
    //         }
    //     }
    // }

    itemsData.some((item) => {
       if(item.Name === productName){
        // console.log( 'Iff'  + item.Name);
        addToCard.push(item)
        window.localStorage.setItem('addToCard', JSON.stringify(addToCard))   // Push Kra rha Orders [] Ko localstorage ma
        return true;        /// Return true break kr rha 
    }
    else{
        // console.log( "Else" + item.Name);
        return false;
    }
})

    alert("Added to Cart")
}
}


// Card.html files ma Add To Card Items Print Krwa rha

if(window.location.href.indexOf('card.html') != -1){
    console.log('card fles');
   
   let addToCardArr = JSON.parse(window.localStorage.getItem('addToCard'))
   let itemDisplayDiv = document.querySelector('.item_display')
   
 addToCard.forEach(item => {
    // console.log(item);
    
    itemDisplayDiv.innerHTML += `
         <div class="itemsmain-flex">
            <img src=${item.image} alt="">
            <h3>${item.Name}</h3>
            <p>${item.price}</p>
            <p>${item.size}</p>
            <button onClick='AddToCardRemove(this)'>delete</button>
     </div>
    `
 });
  
}

function AddToCardRemove(e){
    let itemName = e.parentNode.childNodes[3].innerText;
    console.log(itemName);
    
    let addToCardArr = JSON.parse(window.localStorage.getItem('addToCard'));
 
    let filterAddToCardItem  = addToCardArr.filter((item) => {
      if(itemName !== item.Name.trim()){
       return item
      }
      else{
        e.parentNode.remove();   // delete item ui se remove kr rha
      }
        
   })
 
   window.localStorage.setItem('addToCard', JSON.stringify(filterAddToCardItem))
 
}

//  <----- Orders Donee Function ----->

function purchase() {
    alert('Order Done');
    var orders = JSON.parse(window.localStorage.getItem("Orders")) || [];
    var getProductsCistomer = JSON.parse(window.localStorage.getItem("addToCard"));
  
    
    for (var i = 0; i < getProductsCistomer.length; i++) {
      orders.push(getProductsCistomer[i]);
    }
   
    
    getProductsCistomer.length = 0;
    
    window.localStorage.setItem("addToCard",JSON.stringify(getProductsCistomer));
    window.localStorage.setItem("Orders", JSON.stringify(orders));
  
    var itemsHtml = document.querySelectorAll(".itemsmain-flex");
      
       itemsHtml.forEach((item) => {
          item.remove();
        })
    
}