if (localStorage.getItem("itemsInCart") === null) var cartItems = [];
else cartItems = JSON.parse(localStorage.getItem("itemsInCart"));

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

if(!user){
    alert("Please log in")
    window.location.href='../Sign _In/Sign _In.html'
}
else{
    var totalPrice = 0;
var subTotalPrice = 0;
cartItems.forEach((element, index) => {
    var item = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", element.imgurl);

    var itemDetails = document.createElement("div");

    var text = document.createElement("p");
    text.innerText = element.text;

    var strikText = document.createElement("p");
    strikText.innerText = "INR " + element.price;
    strikText.setAttribute("id", "strike");
    totalPrice += +(element.price);


    var price = document.createElement("p");
    price.innerText = "Sale INR " + Math.round(+(element.price / 1.5));
    price.setAttribute("id", "price")
    subTotalPrice += Math.round(+(element.price / 1.5));

    // var dropdownBT = document.createElement("select");

    // for (var i = 1; i <= 20; i++) {
    //     var option = document.createElement("option");
    //     option.setAtatribute("value", i);
    //     option.innerText = i;
    //     dropdownBT.append(option);
    // }

    var removeBT = document.createElement("button");
    removeBT.innerText = "Remove";
    removeBT.setAttribute("id", "removeBT")
    removeBT.addEventListener("click", function () {
        cartItems.splice(index, 1);
        localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
        document.location.reload();
    })

    itemDetails.append(text, strikText, price, removeBT);
    item.append(image, itemDetails);
    document.getElementById("pList").append(item);
});
var table = document.createElement("table");
var row1 = document.createElement('tr');

var items = document.createElement('td');
items.innerText = "(" + cartItems.length + ") Items ";

var totalP = document.createElement('td');
totalP.innerText = "INR " + totalPrice.toFixed(2)

var row2p5 = document.createElement('tr');

var text2 = document.createElement('td');
text2.innerText = "Discount";

var discount = document.createElement('td');
discount.innerText = "INR " + (totalPrice - subTotalPrice).toFixed(2);


var row2 = document.createElement('tr');

var text1 = document.createElement('td');
text1.innerText = "Your Total:";

var subTotalP = document.createElement('td');
subTotalP.innerText = "INR " + subTotalPrice.toFixed(2);;

row1.append(items, totalP);
row2p5.append(text2, discount);
row2.append(text1, subTotalP);

var checkoutBT = document.createElement("button");
checkoutBT.innerText = "Check-Out";
checkoutBT.setAttribute("id", "coBT")
checkoutBT.addEventListener("click", function () {
    document.location.href = ("payment.html");
})

table.append(row1, row2p5, row2, checkoutBT);
document.getElementById("totalAmount").append(table);

}



