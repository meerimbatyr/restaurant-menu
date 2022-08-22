//get only the unique categories --Hardest one
//iterate over categories return buttons
//make sure to select buttons when they are available

//items
const menu = [
  {
    id: 1,
    name: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    name: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
  },
  {
    id: 3,
    name: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    name: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`,
  },
  {
    id: 5,
    name: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
  },
  {
    id: 6,
    name: "Oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    name: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
  },
  {
    id: 8,
    name: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
  },
  {
    id: 9,
    name: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    name: "Steak Dinner",
    category: "dinner",
    price: 39.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

///

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//Render Data to UI dynamically

window.addEventListener("DOMContentLoaded", () => {
  displayData(menu);
  displayButtons();
});

function displayData(menu) {
  section.innerHTML = "";
  menu.forEach((item) => {
    const { img, name, price, desc } = item;
    item = `
        <article class="menu-item">
          <img class="item-info" src="${img}" alt="${name}" />
          <div class="item-info">
            <header>
              <h4>${name}</h4>
              <h4 class="price">${price}</h4>
            </header>
            <p class="item-text">${desc}</p>
          </div>
        </article>
  
  `;
    section.innerHTML += item;
  });
}

function displayButtons() {
  const categories = menu.map((item) => item.category);

  const uniqueCategories = new Set(categories);
  uniqueCategories.add("all");
  console.log(uniqueCategories);

  for (let category of uniqueCategories) {
    const button = `
      <button class="filter-btn" data-id=${category} type="button">
          ${category}
      </button>
  `;
    btnContainer.innerHTML += button;

    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;

        //filter the data
        const filtered = menu.filter((item) => {
          if (item.category === id) {
            return item;
          }
        });

        //when pressed on certain category it should display items with those categores only
        if (id == "all") {
          displayData(menu);
        } else {
          displayData(filtered);
        }
      });
    });
  }
}
