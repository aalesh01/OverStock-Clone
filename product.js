var furnitureCategories=[
    {
        text:"Living Room Furniture"
    },
    {
        text:"Dining Room Furniture"
    },
    {
        text:"Bedroom Furniture"
    },
    {
        text:"Patio Furniture"
    },
    {
        text:"Kitchen Furniture"
    },
    {
        text:"Entryway Furniture"
    },
    {
        text:"Home Office Furniture"
    },
    {
        text:"Small Space Furniture"
    },
    {
        text:"Bathroom Furniture"
    },
    {
        text:"Mattresses"
    },
    {
        text:"Recreation Room"
    },
    {
        text:"Kids & Toddler Furniture"
    },
    {
        text:"Home Gym"
    },
    {
        text:"Shop All Furniture on Sale"
    }
];

var heading=document.createElement("h2");
heading.innerText="Featured Categories";

document.querySelector('.featuredCategories').append(heading);


furnitureCategories.forEach((element)=>{
    var textCont=document.createElement('p');
    textCont.innerText=element.text;
    document.querySelector('.featuredCategories').append(textCont);
});

var popularFurniture=[
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_1.jpg?imwidth=400&impolicy=medium",
        text:"Patio Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_2.jpg?imwidth=400&impolicy=medium",
        text:"Living Room Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_3.jpg?imwidth=400&impolicy=medium",
        text:"Dining Room Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_4.jpg?imwidth=400&impolicy=medium",
        text:"Bedroom Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Furni_PopCat_10.jpg?imwidth=400&impolicy=medium",
        text:"Mattresses"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_6.jpg?imwidth=400&impolicy=medium",
        text:"Home Office Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_6_SmallSpaceFurniture.jpg?imwidth=400&impolicy=medium",
        text:"Small Office Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_7_KitchenFurniture.jpg?imwidth=400&impolicy=medium",
        text:"Kitchen Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_9.jpg?imwidth=400&impolicy=medium",
        text:"Entryway Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_10.jpg?imwidth=400&impolicy=medium",
        text:"Bathroom Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Furni_PopCat_11.jpg?imwidth=400&impolicy=medium",
        text:"Recreation Room Furniture"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_12.jpg?imwidth=400&impolicy=medium",
        text:"Kids & Toddler Room Furniture"
    }
];


popularFurniture.forEach((element)=>{
    var image=document.createElement('img');
    image.src=element.imageUrl;
    var p=document.createElement('p');
    p.innerText=element.text;
    var box=document.createElement('div');
    box.append(image,p);
    document.querySelector('#popularFurniture').append(box);
});


var furnitureItems=[
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular1.jpg?imwidth=200&impolicy=medium",
        text:"Sofas & Couches"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular2.jpg?imwidth=200&impolicy=medium",
        text:"Sectional Sofas"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular3.jpg?imwidth=200&impolicy=medium",
        text:"Living Room Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular4.jpg?imwidth=200&impolicy=medium",
        text:"Accent Tables"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular5.jpg?imwidth=200&impolicy=medium",
        text:"Loveseats"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular6.jpg?imwidth=200&impolicy=medium",
        text:"Accent Chairs"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/12242020-gnp-furniture-219x219_shop_more_diningrm.jpg?imwidth=200&impolicy=medium",
        text:"Dining Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular8.jpg?imwidth=200&impolicy=medium",
        text:"Dining Tables"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular9.jpg?imwidth=200&impolicy=medium",
        text:"Dining Chairs"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular10.jpg?imwidth=200&impolicy=medium",
        text:"Buffets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular11.jpg?imwidth=200&impolicy=medium",
        text:"Bar Stools"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular12.jpg?imwidth=200&impolicy=medium",
        text:"Beds"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular13.jpg?imwidth=200&impolicy=medium",
        text:"Bedroom Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular14.jpg?imwidth=200&impolicy=medium",
        text:"Headboards"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular15.jpg?imwidth=200&impolicy=medium",
        text:"Chests & Dressers"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular16.jpg?imwidth=200&impolicy=medium",
        text:"Nightstands"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular17.jpg?imwidth=200&impolicy=medium",
        text:"Kids & Toddler Beds"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg",
        text:"Shop All Furniture on Sale"
    }
];
furnitureItems.forEach((element)=>{
    var image=document.createElement('img');
    image.src=element.imageUrl;
    var textCont=document.createElement('p');
    textCont.innerText=element.text;
    var box=document.createElement('div');
    box.append(image,textCont);
    document.querySelector('#moreFurniture').append(box);
});