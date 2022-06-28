var popularFurniture=[
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_1.jpg?imwidth=400&impolicy=medium",
        text:"Outdoor Decor"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_2.jpg?imwidth=400&impolicy=medium",
        text:"Mirrors"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_3.jpg?imwidth=400&impolicy=medium",
        text:"Window Treatments"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_4.jpg?imwidth=400&impolicy=medium",
        text:"Wall Art"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_5.jpg?imwidth=400&impolicy=medium",
        text:"Throw Pillows"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_6.jpg?imwidth=400&impolicy=medium",
        text:"Wall Decor"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_7.jpg?imwidth=400&impolicy=medium",
        text:"Decorative Accessories"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_8.jpg?imwidth=400&impolicy=medium",
        text:"Accent Pieces"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_9.jpg?imwidth=400&impolicy=medium",
        text:"Ligthing"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_10.jpg?imwidth=400&impolicy=medium",
        text:"Rugs"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_11.jpg?imwidth=400&impolicy=medium",
        text:"Slipcovers & Furniture Covers"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Indoor Fireplaces"
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
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular1.jpg?imwidth=200&impolicy=medium",
        text:"Ceiling Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular2.jpg?imwidth=200&impolicy=medium",
        text:"Lamps"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular3.jpg?imwidth=200&impolicy=medium",
        text:"Flush Mounts"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular4.jpg?imwidth=200&impolicy=medium",
        text:"Wall Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular5.jpg?imwidth=200&impolicy=medium",
        text:"Ceiling Fans"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular6.jpg?imwidth=200&impolicy=medium",
        text:"Blinds & Shades"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular7.jpg?imwidth=200&impolicy=medium",
        text:"Curtain Rods & Hardware"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular8.jpg?imwidth=200&impolicy=medium",
        text:"Clocks"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular9.jpg?imwidth=200&impolicy=medium",
        text:"Decorative Sheleves"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular10.jpg?imwidth=200&impolicy=medium",
        text:"Silk Plants"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular11.jpg?imwidth=200&impolicy=medium",
        text:"vases"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular12.jpg?imwidth=200&impolicy=medium",
        text:"Picture Frames & Albums"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular13.jpg?imwidth=200&impolicy=medium",
        text:"Doormats"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular14.jpg?imwidth=200&impolicy=medium",
        text:"Canvas Art"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular15.jpg?imwidth=200&impolicy=medium",
        text:"Prints"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular16.jpg?imwidth=200&impolicy=medium",
        text:"Fire Pits & Chimineas"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular17.jpg?imwidth=200&impolicy=medium",
        text:"Planters, Hagers & Stands"
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