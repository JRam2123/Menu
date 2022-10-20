const menu = [{
        id: 1,
        title: "Blooming Onion",
        category: "starter",
        price: 9.99,
        img: "./img/bloom-onion.jpg",
        desc: `A jumbo Vidalia onion sliced open, hand battered then deep fried to a golden brown. Served with our homemade tangy sauce.
        `,
    },
    {
        id: 2,
        title: "buffalo chicken dip",
        category: "starter",
        price: 8.99,
        img: "./img/Buff-Ckn-Dip.jpg",
        desc: `Made from scratch and served with tortilla chips.`,
    },
    {
        id: 3,
        title: "White Cheddar Cheese Curds",
        category: "starter",
        price: 6.99,
        img: "./img/chesse-curds.jpg",
        desc: `Warm your tummy with our battered white cheddar deep fried to perfection, then topped with parmesan cheese. Served with Ranch.`,
    },
    {
        id: 4,
        title: "Loaded Cheese Fries with Bacon",
        category: "starter",
        price: 8.99,
        img: "./img/cheese-frys.jpg",
        desc: `Our famous fries covered with melted Colby Jack cheese, topped with bacon bits and green onions.  Served with Ranch for dipping. `,
    },
    {
        id: 5,
        title: "Queso Dip",
        category: "starter",
        price: 4.99,
        img: "./img/queso-dip.jpg",
        desc: `A hot bowl of spicy cheese dip served with our crispy tortilla chips.`,
    },
    {
        id: 6,
        title: "Nacho Grande",
        category: "starter",
        price: 10.99,
        img: "./img/nachos.jpg",
        desc: `Enough to share, or a meal just for you! A heaping platter of crispy corn chips covered with spicy taco meat, beans and topped with special cheese. Served with jalapeno peppers, sour cream and salsa.
        Enjoy the ultimate Top with lettuce, onion and diced tomato.
        `,
    },
    {
        id: 7,
        title: "Pub Pretzels & Beer Cheese",
        category: "starter",
        price: 6.99,
        img: "./img/pub-pretz.png",
        desc: `Served with "Fat Tire" Cheddar cheese source.`,
    },
    {
        id: 8,
        title: "Portobello Mushrooms",
        category: "starter",
        price: 6.99,
        img: "./img/fried-mush.jpg",
        desc: `Sliced Portobello breaded mushrooms.  Served with "Fat Tire" Chedder cheese sauce.`,
    },
    {
        id: 9,
        title: "Fried Pickles",
        category: "starter",
        price: 6.99,
        img: "./img/fried-pickles.jpg",
        desc: `Fried pickles served with Ranch dressing.`,
    },
    {
        id: 10,
        title: "O-Rings",
        category: "starter",
        price: 4.99,
        img: "./img/fried-onion-rings.jpg",
        desc: `Not your ordinary onion rings! Cut, breaded and fried crunchy. Served with a tangy sauce.`,
    },
    {
        id: 11,
        title: "Wings'n O-rings",
        category: "combos",
        price: 12.99,
        img: "./img/combos/wing-rings.jpg",
        desc: `Tandem treat!
        6 Famous jumbo wings combined with an order of crispy onion rings. Served with Ranch.`,
    },
    {
        id: 12,
        title: "Wings'n Ribs",
        category: "combos",
        price: 13.99,
        img: "./img/combos/wings-ribs.jpg",
        desc: `6 Famous jumbo wings combined with a half rack of our Back Ribs. Served with Ranch.`,
    },
    {
        id: 13,
        title: "Wings'n Fries",
        category: "combos",
        price: 11.99,
        img: "./img/combos/wings-frys.jpg",
        desc: `6 Famous jumbo wings combined with our crispy fries smothered with Cobly cheese and bacon bits. Served with Ranch.`,
    },
    {
        id: 14,
        title: "Boneless Wings",
        category: "combos",
        price: 9.99,
        img: "./img/combos/boneless-wings.jpg",
        desc: `Choose one of our 12 Lube sauces. Served with celery sticks and Ranch. 1/2 lb. wings - 1 lb. wings`,
    },
    {
        id: 15,
        title: "Mild, Medium, Hot, Honey-BBQ, Spicy-BBQ, Sweet-BBQ, Carribean-Jerk, Mango-Habanero, Asian-Zing, Teriyaki, Roasted-Garlic-Parmesan, Spicy-Garlic",
        category: "Flavors",
        price: .50,
        img: "./img/combos/wing-sauce.jpg",
        desc: ``,
    },

    {
        id: 16,
        title: "Spinach Chicken Salad",
        category: "salads",
        price: 7.99,
        img: "./img/salads/spinach-salad.jpg",
        desc: `Fresh spinach, crisp romaine, chicken, red onion, bacon, blue cheese crumbles and Mandarin oranges. Served with hot bacon dressing and a warm garlic bread stick.`,
    },
    {
        id: 17,
        title: "Buffalo Chicken Salad",
        category: "salads",
        price: 8.99,
        img: "./img/salads/buffalo-chicken-salad.jpg",
        desc: `Breaded chicken slathered in our spicy wing sauce combined with “Made in Iowa” Bleu cheese crumbles, smokey bacon bits, crunchy tortilla strips, pico de gallo and Ranch dressing.  Served with a warm garlic bread stick.`,
    },
    {
        id: 18,
        title: "Grilled Chicken Salad",
        category: "salads",
        price: 8.99,
        img: "./img/salads/chicken-salad.jpg",
        desc: `Striped of white meat charbroiled chicken served on top of a crunchy lettuce, carrots, tomato, eggs, green peppers and Cheddar cheese.  Served with our mouth-watering Honey-mustard dressing and warm garlic bread stick.`,
    },
    {
        id: 19,
        title: "Grilled Chicken Caesar Salad",
        category: "salads",
        price: 8.99,
        img: "./img/salads/grilled-chicken-salad.jpg",
        desc: `Classic combination of crisp romaine, garlic croutons, fresh grated Parmesan and Caesar dressing.  Topped with a charbroiled chicken breast.  Served with a warm garlic bread stick.`,
    },
    {
        id: 20,
        title: "Blackened Chicken Salad",
        category: "salads",
        price: 8.99,
        img: "./img/salads/blackened-chicken-salad.jpg",
        desc: `Kick it up with this spicy combination of blackened chicken breast on a bed of lettuce, eggs, tomato and cheese.  Served with Hot Bacon Mustard dressing and a warm garlic bread stick.

        `,
    },
    {
        id: 21,
        title: "Salad Dressings",
        category: "salads",
        price: .50,
        img: "./img/salads/salad-dressings.jpg",
        desc: `Bleu Cheese, Thousand Island, Ranch, Fat-Free Ranch, French, Fat-Free French, Fat-Free Italian, Honey-Mustard, Hot Bacon Mustard, or Vinegar and Oil.`,
    },
    {
        id: 22,
        title: "Meat Cravers",
        category: "pizza",
        price: 11.99,
        img: "./img/pizza/meat-cravers.jpg",
        desc: `Sausage, pepperoni, bacon, and Canadian bacon topped with Mozzarella cheese.`,
    },
    {
        id: 23,
        title: "Buffalo Chicken",
        category: "pizza",
        price: 11.99,
        img: "./img/pizza/buffalo.jpg",
        desc: `The Filling Station combines two of your favorite tastes! Our famous wing sauce and boneless Buffalo chicken, topped with chopped celery. Pepper Jack and Mozzarella cheese. Served with a side of Ranch.`,
    },
    {
        id: 24,
        title: "Barbeque Chicken",
        category: "pizza",
        price: 11.99,
        img: "./img/pizza/bbq-chicken.jpg",
        desc: `Grilled chicken, tangy BBQ sauce, sliced red onion, topped with fresh cilantro and Mozzarella cheese.`,
    },
    {
        id: 25,
        title: "Pepperoni",
        category: "pizza",
        price: 11.99,
        img: "./img/pizza/pepp.jpg",
        desc: `Mounds of pepperoni and Mozzarella cheese.`,
    },
    {
        id: 26,
        title: "The Filling Station Burger",
        category: "burgers",
        price: 11.99,
        img: "./img/burgers/fried-egg-burger.jpg",
        desc: `Only The Filling Station would crown our burger with one large fried egg, two crispy Applewood bacon strips and top it with melted American cheese.`,
    },
    {
        id: 27,
        title: "Cheese Burger",
        category: "burgers",
        price: 9.99,
        img: "./img/burgers/chz.jpg",
        desc: `Made just the way you like it with mouth-watering melted American cheese.`,
    },
    {
        id: 28,
        title: "Beefy Bacon Cheese Burger",
        category: "burgers",
        price: 10.99,
        img: "./img/burgers/bacon.jpg",
        desc: `Guaranteed to satisfy your appetite.  Our big charbroiled burger topped with Applewood bacon strips and American cheese.`,
    },
    {
        id: 29,
        title: "Pub Burger ",
        category: "burgers",
        price: 10.99,
        img: "./img/burgers/pub.jpg",
        desc: `Our classic charbroiled burger topped with crisp bacon, carmelized onions and "Fat Tire" Beer Cheddar cheese sauce.`,
    },





];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function() {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        // console.log(item);

        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function(values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ["all"]
    );
    const categoryBtns = categories
        .map(function(category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}