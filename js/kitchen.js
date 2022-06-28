var popularFurniture=[
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_1_SmallAppliances.jpg?imwidth=400&impolicy=medium",
        text:"Small Appliances"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_2_Dinnerware.jpg?imwidth=400&impolicy=medium",
        text:"Dinnerware"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_KITCHEN_PopCat_3.jpg?imwidth=400&impolicy=medium",
        text:"Cookware"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/10122021_KITCHEN_PopCat_3_Mixers.jpg?imwidth=400&impolicy=medium",
        text:"Mixers"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_4_CookingEssentials.jpg?imwidth=400&impolicy=medium",
        text:"Cooking Essentials"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_5_Serveware.jpg?imwidth=400&impolicy=medium",
        text:"Serveware"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_6_Bakeware.jpg?imwidth=400&impolicy=medium",
        text:"Bakeware"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-PopCat_7.jpg?imwidth=400&impolicy=medium",
        text:"Ranges & Ovens"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_7_TableLinensandDecor.jpg?imwidth=400&impolicy=medium",
        text:"Table Linens & Decor"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Kitchen_PopCat_7.jpg?imwidth=400&impolicy=medium",
        text:"Flatware"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-PopCat_8.jpg?imwidth=400&impolicy=medium",
        text:"Major Appliances "
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_8_GlassesandBarware.jpg?imwidth=400&impolicy=medium",
        text:"Glasses & Barware"
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
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular7.jpg?imwidth=200&impolicy=medium",
        text:"Counter Accessories"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular8.jpg?imwidth=200&impolicy=medium",
        text:"Stroage Canisters"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular9.jpg?imwidth=200&impolicy=medium",
        text:"Dish Racks"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular10.jpg?imwidth=200&impolicy=medium",
        text:"Trash Cans"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular11.jpg?imwidth=200&impolicy=medium",
        text:"Wine Racks"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular12.jpg?imwidth=200&impolicy=medium",
        text:"Pot Racks"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular13.jpg?imwidth=200&impolicy=medium",
        text:"Islands"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular14.jpg?imwidth=200&impolicy=medium",
        text:"Caninets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular15.jpg?imwidth=200&impolicy=medium",
        text:"Butcher Blocks"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular16.jpg?imwidth=200&impolicy=medium",
        text:"Carts"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-175x175_otherPopular17.jpg?imwidth=200&impolicy=medium",
        text:"Kitchen Shelves"
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