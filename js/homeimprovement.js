var popularFurniture=[
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_1.jpg?imwidth=400&impolicy=medium",
        text:"Bathroom Vanities"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_10.jpg?imwidth=400&impolicy=medium",
        text:"Showers"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_2.jpg?imwidth=400&impolicy=medium",
        text:"Bathtubs"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_11.jpg?imwidth=400&impolicy=medium",
        text:"Toilets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-bathroom-PopCat_5.jpg?imwidth=400&impolicy=medium",
        text:"Vanity Mirrors"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_3.jpg?imwidth=400&impolicy=medium",
        text:"Bathroom Sinks"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-bathroom-PopCat_7.jpg?imwidth=400&impolicy=medium",
        text:"Bathroom Faucets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-bathroom-PopCat_8.jpg?imwidth=400&impolicy=medium",
        text:"Bathroom Hardware"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-kitchen-PopCat_4.jpg?imwidth=400&impolicy=medium",
        text:"Backsplash Tile"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_14.jpg?imwidth=400&impolicy=medium",
        text:"Kitchen Faucets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_13.jpg?imwidth=400&impolicy=medium",
        text:"Kitchen Sinks"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_19.jpg?imwidth=400&impolicy=medium",
        text:"Kitchen Cabinets"
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
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular14.jpg?imwidth=200&impolicy=medium",
        text:"Hardware"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular15.jpg?imwidth=200&impolicy=medium",
        text:"Door & Windows"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-219x219_shop_more03.jpg?imwidth=200&impolicy=medium",
        text:"Fencing & Privacy Screens"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular17.jpg?imwidth=200&impolicy=medium",
        text:"Wall Coverings"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular2.jpg?imwidth=200&impolicy=medium",
        text:"Showerheads"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-219x219_shop_more06.jpg?imwidth=200&impolicy=medium",
        text:"Kitchen & Peantry Storage"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular16.jpg?imwidth=200&impolicy=medium",
        text:"Power Tools"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-219x219_shop_more08.jpg?imwidth=200&impolicy=medium",
        text:"Bathroom Shelving"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-219x219_shop_more09.jpg?imwidth=200&impolicy=medium",
        text:"Heating & Cooling"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular3.jpg?imwidth=200&impolicy=medium",
        text:"Bidets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular1.jpg?imwidth=200&impolicy=medium",
        text:"Sink & Faucet Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular5.jpg?imwidth=200&impolicy=medium",
        text:"Plumbing"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular7.jpg?imwidth=200&impolicy=medium",
        text:"Ranges & Ovens"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular8.jpg?imwidth=200&impolicy=medium",
        text:"Range Hoods"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular11.jpg?imwidth=200&impolicy=medium",
        text:"Air Quality"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular17.jpg?imwidth=200&impolicy=medium",
        text:"Vacuums"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-219x219_shop_more17.jpg?imwidth=200&impolicy=medium",
        text:"Sauna & Stream"
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