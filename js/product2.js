var popularFurniture = [
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB1_Bohemian-Eclectic-lifestyle-336x336.png?imwidth=400&amp;impolicy=medium",
        text: "Bohemian & Eclectic Area Rugs"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB2_Modern-Contemporary-lifestyle-336x336.png?imwidth=400&amp;impolicy=medium",
        text: "Modern & Contemporary Area Rugs"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB3_Vintage-336x336.png?imwidth=400&amp;impolicy=medium",
        text: "Vintage Area Rugs"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB4_Shag-336x336.png?imwidth=400&amp;impolicy=medium",
        text: "Shag Area Rugs"
    }
];


popularFurniture.forEach((element) => {
    var image = document.createElement('img');
    image.src = element.imageUrl;
    var p = document.createElement('p');
    p.innerText = element.text;
    var a = document.createElement('a')
    a.href = " ./items.html"
    a.append(image, p)
    var box = document.createElement('div');
    box.append(a);
    document.querySelector('#popularFurniture').append(box);
});


var furnitureItems = [
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER1_Area-rugs-267x267.png?imwidth=200&amp;impolicy=medium",
        text: "Area Rugs"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER2_Rug-Pads-267x267.png?imwidth=200&impolicy=medium",
        text: "Rug Pads"
    },

    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER3_Shag-rugs-267x267.png?imwidth=200&impolicy=medium",
        text: " Shag Rugs"
    },

    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER4_Kitchen-rugs-mats-267x267.png?imwidth=200&impolicy=medium"
        ,
        text: "Kitchen Rugs & Mats"
    },

    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular4.jpg?imwidth=200&impolicy=medium",
        text: "Stair Treads"
    },


    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER6_One-of-a-kind-267x267.png?imwidth=200&impolicy=medium",
        text: "One of King Rugs"
    },


    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER7_Machine-Washable-267x267.png?imwidth=200&impolicy=medium",
        text: "Machine Washable"
    },

    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular7.jpg?imwidth=200&impolicy=medium",
        text: "Handmade Rugs"
    },

    {
        // imageurl: "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular7.jpg?imwidth=200&impolicy=medium",
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular8.jpg?imwidth=200&impolicy=medium",

        text: "Flat Weave Rugs"
    },


    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER10_Outdoor-rugs-267x267.png?imwidth=200&impolicy=medium",
        text: "Outdoor Rugs"
    },

    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER11_Runner-rugs-267x267.png?imwidth=200&impolicy=medium",
        text: "Runner Rugs"
    },


    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER12_Kids-tween-rugs-267x267.png?imwidth=200&impolicy=medium",
        text: "Kids & Tween Rugs"
    },

    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular12.jpg?imwidth=200&impolicy=medium",
        text: "Door Mats"
    },

    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER14_Bath-mats-rugs-267x267.png?imwidth=200&impolicy=medium",
        text: "Bath Mats & Rugs"
    },


    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER15_Persian-rugs-267x267.png?imwidth=200&impolicy=medium",
        text: "Persian Rugs"
    },


    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER16_Shop-new-arrivals-267x267.png?imwidth=200&impolicy=medium",
        text: "Shop New Arrivals"
    },
];
furnitureItems.forEach((element) => {
    var image = document.createElement('img');
    image.src = element.imageUrl;
    var textCont = document.createElement('p');
    textCont.innerText = element.text;
    var a = document.createElement('a')
    a.href = " ./items.html"
    a.append(image, textCont);
    var box = document.createElement('div');
    box.append(a);
    document.querySelector('#moreFurniture').append(box);
});