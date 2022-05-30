
var showmore= [{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Mid Century Modern_20190408.jpg",
    heading: "Mid-Century Modern Style",
    shop: "Shop Now"
},

{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Coastal_20190408.jpg",
    heading: "Coastal Style",
    shop: "Shop Now"
},

{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Farmhouse_20190408.jpg",
    heading: "Farmhouse Style",
    shop: "Shop Now"
},

{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Glam_20190408.jpg",
    heading: "Glam Style",
    shop: "Shop Now"
},

{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Industrial_20190408.jpg",
    heading: "Industrial Style",
    shop: "Shop Now"
},

{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Rustic_20190408.jpg",
    heading: "Rustic Style",
    shop: "Shop Now"
},


{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Shabby Chic_20190408.jpg",
    heading: "Shabby Chic Style",
    shop: "Shop Now"
},


{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Modern_20190408.jpg",
    heading: "Modern Style",
    shop: "Shop Now"
},


{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Americana_20190408.jpg",
    heading: "Americana Style",
    shop: "Shop Now"
},


{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Boho_20190408.jpg",
    heading: "Boho Style",
    shop: "Shop Now"
},



{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Scandanavian_20190408.jpg",
    heading: "Scandinavian Style",
    shop: "Shop Now"
},


{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Traditional_20190408.jpg",
    heading: "Traditional Style",
    shop: "Shop Now"
},


{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/French Country_20190408.jpg",
    heading: "French Country Style",
    shop: "Shop Now"
},


{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Beach House_20190408.jpg",
    heading: "Beach House Style",
    shop: "Shop Now"
},


{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Contemporary_20190408.jpg",
    heading: "Contemporary Style",
    shop: "Shop Now"
},


{
    imageurl: "https://ak1.ostkcdn.com/img/mxc/Transitional_20190408.jpg",
    heading: "Transitional Style",
    shop: "Shop Now"
}
]
showmore.forEach((element) => {
    var a = document.createElement('a')
    a.href="../pages/items.html"
    var image = document.createElement('img');
    image.src = element.imageurl;
    var imgContainer = document.createElement('div');
    var head = document.createElement('h3');
    head.innerText = element.heading;
    var textContent = document.createElement('p');
    textContent.innerText = element.shop;
    a.append(image, head, textContent);
    imgContainer.append(a)
    document.querySelector('#yourStyle').append(imgContainer);
});
