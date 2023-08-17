const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Corea",
        price: 10.99,
        img:"./image/tteokbokki.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:"./image/chickenRamen.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Corea",
        price: 8.99,
        img:"./image/bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:"./image/dandanMian.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Jajangmyeon",
        category: "Corea",
        price: 15.99,
        img:"./image/jajangmyeon.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 6,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:"./image/doroyaki.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
    {
        id: 7,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:"./image/yangzhouFriedRice.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 8,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:"./image/onigiri.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    }
];

// butonlar oluşturuluyor.

const btnContainer=document.querySelector('#btnList')


const btnAll=document.createElement('button')
btnAll.textContent='All'
btnAll.classList.add('btn', 'btn-outline-danger', 'btn-item')
btnAll.setAttribute('type', 'button');
btnContainer.appendChild(btnAll);

const btnCorea=document.createElement('button')
btnCorea.textContent='Corea'
btnCorea.classList.add('btn', 'btn-outline-danger', 'btn-item')
btnCorea.setAttribute('type', 'button');
btnContainer.appendChild(btnCorea);

const btnJapan=document.createElement('button')
btnJapan.textContent='Japan'
btnJapan.classList.add('btn', 'btn-outline-danger', 'btn-item')
btnJapan.setAttribute('type', 'button');
btnContainer.appendChild(btnJapan);

const btnChina=document.createElement('button')
btnChina.textContent='China'
btnChina.classList.add('btn', 'btn-outline-danger', 'btn-item')
btnChina.setAttribute('type', 'button');
btnContainer.appendChild(btnChina);



const filterCategory=(selectCategory)=>{
    if(selectCategory==='All'){
        return menu;
        
    }
    return menu.filter((item)=>{
       return item.category===selectCategory
    });
    
    

}

const eventHandler=(selectBtn)=>{
    showMenu(filterCategory(selectBtn))

}

btnAll.addEventListener("click", ()=>eventHandler("All"));
btnJapan.addEventListener("click", () => eventHandler("Japan"));
btnCorea.addEventListener("click", () => eventHandler("Corea"));
btnChina.addEventListener("click", () => eventHandler("China"));

const menuListContainer=document.querySelector("#menuList")


const showMenu=(menuList)=>{
    menuListContainer.innerHTML="";
    menuList.forEach(item => {

        const menuItem = document.createElement('div');
        menuItem.innerHTML=""
        menuItem.classList.add('menu-items', 'col-lg-6', 'col-sm-12');
        menuItem.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
        <div class="menu-title">
            <h4>${item.title}</h4>
            <h4>${item.price}</h4>
        </div>
        <p class="menu-text">${item.desc}</p>
        </div>
        `;
        menuListContainer.appendChild(menuItem);
        
    });

}



window.addEventListener("DOMContentLoaded", () => {
    eventHandler("All");
});