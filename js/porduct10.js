var popularFurniture=[
    {
        imageUrl:"https://ak1.ostkcdn.com/images/products/17960745/Avenue-Greene-Nola-Mocha-Triple-Bunk-Bed-8637f807-600a-4eaa-88cc-29a8452e6ac5.jpg?imWidth=320&impolicy=medium",
        text:"Kids Beds"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_2.jpg?imwidth=400&impolicy=medium",
        text:"Kids Comforter Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_3.jpg?imwidth=400&impolicy=medium",
        text:"Kids Rugs & Decor"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_4.jpg?imwidth=400&impolicy=medium",
        text:"Kids Storage"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_5.jpg?imwidth=400&impolicy=medium",
        text:"Bean Bags"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_6.jpg?imwidth=400&impolicy=medium",
        text:"Shop All Kids & Toddler Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_7.jpg?imwidth=400&impolicy=medium",
        text:"Nursery Funiture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_8.jpg?imwidth=400&impolicy=medium",
        text:"Baby Crib Bedding"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_9.jpg?imwidth=400&impolicy=medium",
        text:"Storage & Organization"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_10.jpg?imwidth=400&impolicy=medium",
        text:"Gliders & Ottomans"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_11.jpg?imwidth=400&impolicy=medium",
        text:"Nursery"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Shop All Baby & Nursery"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Cribs"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Kids Beds"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Kids Mattresses"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Kids Bedding"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Outdoor Play"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Kids Rugs & Decor"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Swing Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Trampolines"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Playhouses"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Water Toys"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Kids Outdoor Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Shop All Outdoor Play"
    }
];


popularFurniture.forEach((element)=>{
    var image=document.createElement('img');
    image.src=element.imageUrl;
    var p=document.createElement('p');
    p.innerText=element.text;
    var a= document.createElement('a')
    a.href=" ./items.html"
    a.append(image,p)
    var box=document.createElement('div');
    box.append(a);
    document.querySelector('#popularFurniture').append(box);
});


