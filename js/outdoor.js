var popularFurniture=[
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_1.jpg?imwidth=400&impolicy=medium",
        text:"Patio Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Outdoor_PopCat_2.jpg?imwidth=400&impolicy=medium",
        text:"Outdoor Rugs"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_3.jpg?imwidth=400&impolicy=medium",
        text:"Outdoor Decor"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_Popcat_4.jpg?imwidth=400&impolicy=medium",
        text:"Fire Pits & Chimineas"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_5.jpg?imwidth=400&impolicy=medium",
        text:"Garden Accetns"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_6.jpg?imwidth=400&impolicy=medium",
        text:"Outdoor Lighiting"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_7.jpg?imwidth=400&impolicy=medium",
        text:"Patio Umbreallas & Shades"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-PopCat_7.jpg?imwidth=400&impolicy=medium",
        text:"Gardening & Yard Care "
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_9.jpg?imwidth=400&impolicy=medium",
        text:"Outdoor Storage"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Swing Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-PopCat_9.jpg?imwidth=400&impolicy=medium",
        text:"Grills & Outdoor Cooking"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Outdoor Dining"
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


var furnitureItems=[
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular1.jpg?imwidth=200&impolicy=medium",
        text:"Outdoor Sections"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular2.jpg?imwidth=200&impolicy=medium",
        text:"Outdoor Dining Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular3.jpg?imwidth=200&impolicy=medium",
        text:"Hammocks & Swings"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular4.jpg?imwidth=200&impolicy=medium",
        text:"Outdoor Cushions & Pillows"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular5.jpg?imwidth=200&impolicy=medium",
        text:"Bistro Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular6.jpg?imwidth=200&impolicy=medium",
        text:"Outdoor  Coffee & Side Tables"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular7.jpg?imwidth=200&impolicy=medium",
        text:"Outdoor Chaise Lounges"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular8.jpg?imwidth=200&impolicy=medium",
        text:"Outdoor Bar Carts"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular9.jpg?imwidth=200&impolicy=medium",
        text:"Outdoor Club Chairs"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular10.jpg?imwidth=200&impolicy=medium",
        text:"Adirondack Chairs"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular11.jpg?imwidth=200&impolicy=medium",
        text:"Outdoor Benches"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular12.jpg?imwidth=200&impolicy=medium",
        text:"Planters, Hangers & Stands"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular13.jpg?imwidth=200&impolicy=medium",
        text:"Outdoor Fountains"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular14.jpg?imwidth=200&impolicy=medium",
        text:"Outdoor Wall Ligthing"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular16.jpg?imwidth=200&impolicy=medium",
        text:"Solar Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular17.jpg?imwidth=200&impolicy=medium",
        text:"Garden Accents"
    }
];
furnitureItems.forEach((element)=>{
    var image=document.createElement('img');
    image.src=element.imageUrl;
    var textCont=document.createElement('p');
    textCont.innerText=element.text;
    var a= document.createElement('a')
    a.href=" ./items.html"
    a.append(image,textCont);
    var box=document.createElement('div');
    box.append(a);
    document.querySelector('#moreFurniture').append(box);
});