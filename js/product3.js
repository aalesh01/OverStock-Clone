var popularFurniture=[
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_PopCat_1_comfortersandsets.jpg?imwidth=400&impolicy=medium",
        text:"Comforters and Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_PopCat_2_quiltsandbedspreads.jpg?imwidth=400&impolicy=medium",
        text:"Quilts and Bedspreads"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_PopCat_3_bedsheetsandpillowcases.jpg?imwidth=400&impolicy=medium",
        text:"Bed Sheets and Pillowcases"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_PopCat_4_mattresspadsandtoppers.jpg?imwidth=400&impolicy=medium",
        text:"Mattress Pads and Toppers"
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
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more01_beddingsets.jpg?imwidth=200&impolicy=medium",
        text:"Bedding Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more02_comfortersandsets.jpg?imwidth=200&impolicy=medium",
        text:"Comforters and Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more03_quiltsandbedspreads.jpg?imwidth=200&impolicy=medium",
        text:"Quilts and Bedspreads"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more04_bedsheetsandpillowcases.jpg?imwidth=200&impolicy=medium",
        text:"Bed Sheets and  Pillowcases"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more05mattresspadsandtoppers.jpg?imwidth=200&impolicy=medium",
        text:"Mattress Pads and Toppers"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more06_bedprotectors.jpg?imwidth=200&impolicy=medium",
        text:"Bed Protectors"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more07_blankets.jpg?imwidth=200&impolicy=medium",
        text:"Blankets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more08_duvetcoversandsets.jpg?imwidth=200&impolicy=medium",
        text:"Duvet Covers and Sets"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more09_downcomforters.jpg?imwidth=200&impolicy=medium",
        text:"Down Comforters and Duvet Inserts"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more10_bedinabag.jpg?imwidth=200&impolicy=medium",
        text:"Bed-in-a-Bad"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more11_bedpillows.jpg?imwidth=200&impolicy=medium",
        text:"Bed Pillow"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more12_pillowshams.jpg?imwidth=200&impolicy=medium",
        text:"Pillow Shams"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more13_bedskirts.jpg?imwidth=200&impolicy=medium",
        text:"Bed Skirts"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more14_kidsbedding.jpg?imwidth=200&impolicy=medium",
        text:"Kids Bedding"
    },
    {
        imageUrl:"https://ak1.ostkcdn.com/img/mxc/05122022_BEDDING_219x219_shop_more15_daybedcoversets.jpg?imwidth=200&impolicy=medium",
        text:"Daybed Cover Sets"
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