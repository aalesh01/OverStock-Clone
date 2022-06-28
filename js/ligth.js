var popularFurniture=[
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02222021-gnp-lighting-PopCat_1.jpg?imwidth=400&impolicy=medium",
        text:"Chandeliers"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-PopCat_3.jpg?imwidth=400&impolicy=medium",
        text:"Flush Mount Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02222021-gnp-lighting-PopCat_3.jpg?imwidth=400&impolicy=medium",
        text:"Pendant Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-PopCat_8.jpg?imwidth=400&impolicy=medium",
        text:"Floor Lamps"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-PopCat_1.jpg?imwidth=400&impolicy=medium",
        text:"Ceiling Fans"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02222021-gnp-lighting-PopCat_6.jpg?imwidth=400&impolicy=medium",
        text:"Table Lamps"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02222021-gnp-lighting-PopCat_7.jpg?imwidth=400&impolicy=medium",
        text:"Lamp Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02222021-gnp-lighting-PopCat_8.jpg?imwidth=400&impolicy=medium",
        text:"Outdoor Wall Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02222021-gnp-lighting-PopCat_9.jpg?imwidth=400&impolicy=medium",
        text:"Bathroom Vanity Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02222021-gnp-lighting-PopCat_10.jpg?imwidth=400&impolicy=medium",
        text:"Sconces"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-PopCat_5.jpg?imwidth=400&impolicy=medium",
        text:"Track Ligthing"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/02222021-gnp-lighting-PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"String Lights"
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
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular1.jpg?imwidth=200&impolicy=medium",
        text:"Kids Celililng Fans"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular2.jpg?imwidth=200&impolicy=medium",
        text:"Recessed Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular3.jpg?imwidth=200&impolicy=medium",
        text:"Semi-Flush Mount Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular4.jpg?imwidth=200&impolicy=medium",
        text:"Lamp Shades"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular5.jpg?imwidth=200&impolicy=medium",
        text:"Landscape Lighting"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular6.jpg?imwidth=200&impolicy=medium",
        text:"Post Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular7.jpg?imwidth=200&impolicy=medium",
        text:"Pool Table Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular8.jpg?imwidth=200&impolicy=medium",
        text:"Picture Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular9.jpg?imwidth=200&impolicy=medium",
        text:"Under Cabinet Ligths"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular10.jpg?imwidth=200&impolicy=medium",
        text:"Island Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular11.jpg?imwidth=200&impolicy=medium",
        text:"Swing Arm Ligths"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular12.jpg?imwidth=200&impolicy=medium",
        text:"Night Ligths"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular13.jpg?imwidth=200&impolicy=medium",
        text:"Salt Lamps"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular14.jpg?imwidth=200&impolicy=medium",
        text:"Outdoor Ceiling Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular15.jpg?imwidth=200&impolicy=medium",
        text:"Desk Lamps"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular16.jpg?imwidth=200&impolicy=medium",
        text:"Tiffany Lights"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-175x175_otherPopular17.jpg?imwidth=200&impolicy=medium",
        text:"Kids Lamps & Lamp Shades"
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