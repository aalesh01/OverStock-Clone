var user=localStorage.getItem('user')
let logout =false
if(user){ 
    let log = document.createElement("button")
    log.innerText='Log out'
    logout = true
    log.addEventListener('click', function (){
        if(logout){
          let remove =  document.querySelector(".qLinks")
          remove.removeChild( remove.lastElementChild)
          localStorage.removeItem('user')
          logout = false
            window.location.href= "./index.html"
        }
    } )
    document.querySelector(".qLinks").append(log)


}

var user=localStorage.getItem('user')
 if(!user){
    alert("Please log in")
    window.location.href='../Sign _in/Sign _in.html'
}
else{
    if(localStorage.getItem("myList") === null) {
        var myList = []
    }
    else{
        myList = JSON.parse(localStorage.getItem("myList"))
    }
    
    if (localStorage.getItem("itemsInCart") === null) var cartItems = [];
    else cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
    
    myList.forEach((element,index) => {
        console.log("in my list")
        var card = document.createElement("div");
    
        var image = document.createElement("img");
        image.setAttribute("src", element.imgurl);
    
        var price = document.createElement("h3");
        price.innerText = "Sales starts at INR " + element.price;
    
        var text = document.createElement("p");
        text.innerText = element.text;
    
        var addToCartBT = document.createElement("button");
        addToCartBT.innerText = "Add to Cart";
        addToCartBT.setAttribute("class", "addTocartBT");
    
        addToCartBT.addEventListener("click", function () {
            cartItems.push(element);
            myOrder.push(element)
    
            localStorage.setItem("myorderitem", JSON.stringify(myOrder));
            localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
            alert("Added to Cart");
        })
        
        var removeBT = document.createElement("button");
        removeBT.innerText = "Remove";
        removeBT.setAttribute("id", "removeBT")
        removeBT.addEventListener("click", function () {
            myList.splice(index, 1);
            localStorage.setItem("myList", JSON.stringify(myList));
            document.location.reload();
        })
    
        card.append(image, price, text, addToCartBT, removeBT);
    
        document.getElementById("allCards").append(card);
    
    
    });

}





