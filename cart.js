if (localStorage.getItem("itemsInCart") === null) var cartItems = [];
else cartItems = JSON.parse(localStorage.getItem("itemsInCart"));

cartItems.forEach((element,index) => {
    var item = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", element.imgurl);

    var itemDetails = document.createElement("div");

    var text = document.createElement("p");
    text.innerText = element.text;

    var strikText = document.createElement("p");
    strikText.innerText = "INR " + element.price;
    strikText.setAttribute("id", "strike");

    var price = document.createElement("p");
    price.innerText = "Sale INR " + (element.price / 0.20);
    price.setAttribute("id", "price")

    var dropdownBT = document.createElement("select");
    for (var i = 1; i <= 20; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
        option.innerText = i;
        dropdownBT.append(option);
    }

    var removeBT = document.createElement("button");
    removeBT.innerText = "Remove";
    removeBT.setAttribute("id","removeBT")
    removeBT.addEventListener("click",function(){
        cartItems.splice(index,1);
        localStorage.setItem("itemsInCart",JSON.stringify(cartItems));
        document.location.reload();
    })

    itemDetails.append(text, strikText, price, dropdownBT, removeBT);
    item.append(image, itemDetails);
    document.getElementById("pList").append(item);
});