const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  
  let section_center = document.querySelector(".section-center")
  let btn_container = document.querySelector(".btn-container")
  
  // butonları oluşturma
  
  const buttonCreate = () => {
  
    let buttons = `
    <button type="button" id="All" class="btn btn-outline-dark mx-2">All</button>
    <button type="button" id="Korea" class="btn btn-outline-dark mx-2">Korea</button>
    <button type="button" id="Japan" class="btn btn-outline-dark mx-2">Japan</button>
    <button type="button" id="China" class="btn btn-outline-dark mx-2">China</button>
    `
    btn_container.innerHTML = buttons;
  
  }
  buttonCreate()
  
  //Sayfa yüklendiği anda bütün yemek listesini getir
  function Default() {
    let listing = " "
    menu.map((e) => {
      listing += createFoodList(e);
    });
    section_center.innerHTML = listing
  
  }
  Default()
  
  // buton eventi oluşturma
  let buttonEventForAll = document.getElementById("All").addEventListener("click",listAllFood)
  let buttonEventForKorea = document.getElementById("Korea").addEventListener("click", listKoreaFood)
  let buttonEventForJapan = document.getElementById("Japan").addEventListener("click", listJapanFood)
  let buttonEventForChina = document.getElementById("China").addEventListener("click", listChinaFood)
  
  
  // yemekleri filtreleme
  function listAllFood() {
    let listing = " "
    menu.map((e) => {
      listing += createFoodList(e);
    });
    section_center.innerHTML = listing
  }
  
  function listKoreaFood() {
    let listing = " "
    menu.map((e) => {
      if (e.category == "Korea") {
        listing += createFoodList(e);
      }
    });
    section_center.innerHTML = listing
  }
  
  
  function listJapanFood() {
    let listing = " "
    menu.map((e) => {
      if (e.category == "Japan") {
        listing += createFoodList(e);
      }
    });
    section_center.innerHTML = listing
  }
  
  
  function listChinaFood() {
    let listing = " "
    menu.map((e) => {
      if (e.category == "China") {
        listing += createFoodList(e);
      }
    });
    section_center.innerHTML = listing
  }
  
  // Şablon oluşturma
  function createFoodList(item) {
    let menu = `
    <div class="menu-items col-lg-6 col-sm-12">
       <img src="${item.img}" alt="${item.title}" ramen="" class="photo">
          <div class="menu-info">
              <div class="menu-title">
                  <h4>${item.title} Ramen</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
    `;
    return menu;
  }
  