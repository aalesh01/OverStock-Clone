if(localStorage.getItem('user')){
    user=true
}else{
    user =false
}
let logout =false
if(user){ 
    let log = document.createElement("button")
    log.innerText='Log out'
    logout = true
    log.addEventListener('click', function (){
        if(logout){
          let remove =  document.querySelector(".qLinks")
          remove.removeChild( remove.lastElementChild)
          localStorage.removeItem('user')
          logout = false
            window.location.href= "./index.html"
        }
    } )
    document.querySelector(".qLinks").append(log)


}





var saleData = [
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/04072022_HB_CMS_2.svg?imwidth=1920",
        text: "Select Garden & Patio"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/04072022_HB_CMS_3.svg?imwidth=1920",
        text: "Select Living Room Furniture"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/04072022_V2_HB_CMS_4.svg?imwidth=1920",
        text: "Select Bedroom Furniture"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/04072022_HB_INTL_4.svg?imwidth=1920",
        text: "Select Dining Room Furniture"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/04072022_HB_CMS_5.svg?imwidth=1920",
        text: "Select Lighting & Ceiling Fans"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/04072022_HB_INTL_6.svg?imwidth=1920",
        text: "Select Bedding & Bath"
    }
];

saleData.forEach((element) => {
    var ad= document.createElement('a')
    ad.href="../pages/items.html"
    var image = document.createElement('img');
    image.src = element.imageUrl;
    var imgContainer = document.createElement('div');
    var textContent = document.createElement('h4');
    textContent.innerText = element.text;
    ad.append(image,textContent)
    imgContainer.append(ad);
    document.querySelector('#saleContainer').append(imgContainer);
});


var categories = [
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920",
        text: "Furniture"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920",
        text: "Area Rugs"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920",
        text: "Bed & Bath"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920",
        text: "Home Decor"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920",
        text: "Window Treatments"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920",
        text: "Kitchen"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920",
        text: "Outdoor"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920",
        text: "Home Improvement"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920",
        text: "Storage"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920",
        text: "Mattresses"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920",
        text: "Lighting"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920",
        text: "Shop All Deals"
    }
];
categories.forEach((element) => {
    var a = document.createElement('a')
    a.href= "../pages/items.html"
    var image = document.createElement('img');
    image.src = element.imageUrl;
    var imgContainer = document.createElement('div');
    var textContent = document.createElement('p');
    textContent.innerText = element.text;
    a.append(image, textContent);
    imgContainer.append(a)
    document.querySelector('#category').append(imgContainer);
});


var homeSpring = [
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_8.jpg?imwidth=1920",
        heading: "Gifts for Plant Lovers",
        text: "Treat the green thumbs in your life to these perfect plant-focused gifts."
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_7.jpg?imwidth=1920",
        heading: "Ceiling Fans",
        text: "Keep your space comfy & conditioned all season long with stylish ceiling fans."
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_1.jpg?imwidth=1920",
        heading: "Durable Outdoor Rugs",
        text: "Treat your feet to patio comfort with these resilient rugs."
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_3.jpg?imwidth=1920",
        heading: "Wicker Patio Furniture",
        text: "Save on long-lasting comfort with the natural texture of wicker furniture."
    }
];

homeSpring.forEach((element) => {
    var a = document.createElement('a')
    a.href= '../pages/items.html'
    var image = document.createElement('img');
    image.src = element.imageUrl;
    var imgContainer = document.createElement('div');
    var head = document.createElement('h3');
    head.innerText = element.heading;
    var textContent = document.createElement('p');
    textContent.innerText = element.text;
    a.append(image, head, textContent);
    imgContainer.append(a)
    document.querySelector('#homeSpring').append(imgContainer);
});


var overstockBrands = [
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_36046663.jpg?imwidth=1920",
        text1: "Extra 15% off",
        text2: "Select Rugs by",
        text3: "Artistic Weavers & More*"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_18977242.jpg?imwidth=1920",
        text1: "Extra 15% off",
        text2: "Select Furniture by",
        text3: "Flash Furniture*"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_22687048.jpg?imwidth=1920",
        text1: "Extra 15% off",
        text2: "Select Decorative Rugs by",
        text3: "Unique Loom*"
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_36535383.jpg?imwidth=1920",
        text1: "Save On",
        text2: "Select Bedding by",
        text3: "Country Living"
    }
];
overstockBrands.forEach((element) => {
     var a = document.createElement('a')
     a.href='../pages/items.html'
    var image = document.createElement('img');
    image.src = element.imageUrl;
    var imgContainer = document.createElement('div');
    var t1 = document.createElement('p');
    var t2 = document.createElement('p');
    var t3 = document.createElement('p');
    t1.innerText = element.text1;
    t2.innerText = element.text2;
    t3.innerText = element.text3;
    a.append(image, t1, t2, t3);
    imgContainer.append(a)
    document.querySelector('#overstockBrands').append(imgContainer);
});
var yourStyle = [
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/030822-SBS-Farmhouse.jpg?imwidth=1920",
        heading: "Farmhouse",
        text: "Country comforts abound in this fresh take on rustic home decor."
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/030822-SBS-Traditional.jpg?imwidth=1920",
        heading: "Traditional",
        text: "Cozy designs, clean and classic, give this style it’s signature appeal."
    },
    {
        imageUrl: "https://ak1.ostkcdn.com/img/mxc/030822-SBS-MidCenMod.jpg?imwidth=1920",
        heading: "Mid-Century Modern",
        text: "Retro meets modern chic in these clean lines and vibrant tones."
    }
];
yourStyle.forEach((element) => {
    var a = document.createElement('a')
    a.href="../pages/items.html"
    var image = document.createElement('img');
    image.src = element.imageUrl;
    var imgContainer = document.createElement('div');
    var head = document.createElement('h3');
    head.innerText = element.heading;
    var textContent = document.createElement('p');
    textContent.innerText = element.text;
    a.append(image, head, textContent);
    imgContainer.append(a)
    document.querySelector('#yourStyle').append(imgContainer);
});

var livingRoomF = ["Sofas & Couches",
    "Sectionals",
    "Benches",
    "Ottomans & Poufs",
    "Accent Chairs",
    "Recliners",
    "Coffee & Accent Tables",
    "TV Stands"]

// var cat = document.querySelectorAll("#categories>a");

// cat.forEach(element => {
//     console.log(element);
//     element.addEventListener("mouseover", function () {
//         console.log("hii");
//         var dropdown = document.createElement("div");
//         var heading = document.createElement("h2");
//         heading.innerText = "Living Room Furniture";
//         var list = document.createElement("ul");
//         livingRoomF.forEach(element => {
//             var listItem = document.createElement("p");
//             listItem.innerText = element;
//             list.append(listItem);
//         });

//         dropdown.append(heading, list);
//         document.getElementById("hoveredCard").innerHTML = "";
//         document.getElementById("hoveredCard").append(dropdown);
//     })
//     element.addEventListener("mouseleave", function () {
//         document.getElementById("hoveredCard").innerHTML = "";

//     })

// });
