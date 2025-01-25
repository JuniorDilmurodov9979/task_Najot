let products = [
  {
    id: 1,
    name: "Xiaomi 11 Ultra",
    price: 469,
    number: 5,
    image: "images/product1.png",
    description: `It has a 6.81-inch AMOLED display with a 120Hz refresh rate, a Snapdragon 888 processor, 12GB of RAM, and 256GB of storage. It also has a 5,000mAh battery, a 50MP main camera, a 48MP ultra-wide camera, and a 48MP periscope camera.`,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 399,
    number: 5,
    image: "images/product2.png",
    description: `It has a 6.2-inch AMOLED display with a 120Hz refresh rate, a Snapdragon 888 processor, 8GB of RAM, and 128GB of storage. It also has a 4,000mAh battery, a 12MP main camera, a 12MP ultra-wide camera, and a 64MP telephoto camera.`,
  },
  {
    id: 3,
    name: "OnePlus 9 Pro",
    price: 499,
    number: 5,
    image: "images/product3.png",
    description: `It has a 6.7-inch AMOLED display with a 120Hz refresh rate, a Snapdragon 888 processor, 12GB of RAM, and 256GB of storage. It also has a 4,500mAh battery, a 48MP main camera, a 50MP ultra-wide camera, and an 8MP telephoto camera.`,
  },
  {
    id: 4,
    name: "IPhone 12 Pro",
    price: 499,
    number: 5,
    image: "images/product4.png",
    description: `It has a 6.1-inch OLED display, an A14 Bionic processor, 6GB of RAM, and 128GB of storage. It also has a 2,815mAh battery, a 12MP main camera, a 12MP ultra-wide camera, and a 12MP telephoto camera.`,
  },
  {
    id: 5,
    name: "Google Pixel 5",
    price: 299,
    number: 5,
    image: "images/product5.png",
    description: `It has a 6-inch OLED display with a 90Hz refresh rate, a Snapdragon 765G processor, 8GB of RAM, and 128GB of storage. It also has a 4,080mAh battery, a 12.2MP main camera, and a 16MP ultra-wide camera.`,
  },
  {
    id: 6,
    name: "Sony Xperia 1 III",
    price: 599,
    number: 3,
    image: "images/product6.png",
    description: `It has a 6.5-inch OLED display with a 120Hz refresh rate, a Snapdragon 888 processor, 12GB of RAM, and 256GB of storage. It also has a 4,500mAh battery, a 12MP main camera, a 12MP ultra-wide camera, and a 12MP telephoto camera.`,
  },
  {
    id: 7,
    name: "LG Wing",
    price: 399,
    number: 5,
    image: "images/product7.png",
    description: `It has a 6.8-inch OLED display, a Snapdragon 765G processor, 8GB of RAM, and 128GB of storage. It also has a 4,000mAh battery, a 64MP main camera, a 13MP ultra-wide camera, and a 12MP pop-up camera.`,
  },
  {
    id: 8,
    name: "Motorola Edge",
    price: 299,
    number: 2,
    image: "images/product8.png",
    description: `It has a 6.7-inch OLED display with a 90Hz refresh rate, a Snapdragon 765G processor, 6GB of RAM, and 256GB of storage. It also has a 4,500mAh battery, a 64MP main camera, a 16MP ultra-wide camera, and an 8MP telephoto camera.`,
  },
  {
    id: 9,
    name: "Nokia 8.3",
    price: 299,
    number: 2,
    image: "images/product9.png",
    description: `It has a 6.81-inch IPS LCD display, a Snapdragon 765G processor, 8GB of RAM, and 128GB of storage. It also has a 4,500mAh battery, a 64MP main camera, a 12MP ultra-wide camera, and a 2MP macro camera.`,
  },
  {
    id: 10,
    name: "Asus ROG Phone 5",
    price: 599,
    number: 1,
    image: "images/product10.png",
    description: `It has a 6.78-inch AMOLED display with a 144Hz refresh rate, a Snapdragon 888 processor, 16GB of RAM, and 256GB of storage. It also has a 6,000mAh battery, a 64MP main camera, a 13MP ultra-wide camera, and a 5MP macro camera.`,
  },
];

let list = document.querySelector(".list");
let cardHide = document.querySelector(".card__hide");
let cartOpen = document.querySelector(".cart__open");
let cart = document.querySelector(".cart");
let ProductAddBtn = document.querySelector(".product__add");
let ProductModal = document.querySelector(".product__modal");
let modalHide = document.querySelector(".modal__hide");
let productForm = document.querySelector(".product__form");
let cartList = document.querySelector(".cart__list");
let productSave = document.querySelector(".product__save");
let array = [];

// Products array rendering 
function renderList(arr) {
  list.innerHTML = "";
  if (arr.length === 0) {
    list.innerHTML = "<p>No products available</p>";
    return;
  }

  arr.forEach((item) => {
    if (item.number === 0) return;

    let newItem = document.createElement("li");
    newItem.dataset.id = item.id;
    newItem.classList.add(
      "item",
      "w-[300px]",
      "flex",
      "flex-col",
      "justify-between",
      "items-center",
      "gap-2",
      "border",
      "border-gray-200",
      "rounded-md"
    );

    newItem.innerHTML = `
      <div>
        <img class="item__pic rounded-md h-[300px]" src="${item.image}" alt="${item.name}" />
      </div>
      <div class="flex flex-col w-full gap-1 p-4">
        <h2 class="item__title text-center font-bold text-gray-600 text-lg">${item.name}</h2>
        <p class="item__price font-medium text-md">Price: ${item.price}$</p>
        <p class="item__number font-medium">Number: ${item.number}</p>
        <p class="item__desc">Description: ${item.description}</p>
        <button class="item__btn bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md mt-auto">Add to cart</button>
      </div>
    `;
    list.appendChild(newItem);
  });
}
renderList(products);
// Products array rendering done

// There are toogle functions   
cart.addEventListener("click", () => {
  cartOpen.classList.toggle("hidden");
});
cardHide.addEventListener("click", () => {
  cartOpen.classList.toggle("hidden");
});
ProductAddBtn.addEventListener("click", () => {
  if (!cartOpen.classList.contains("hidden")) {
    alert("Close the shopping cart to add a product.");
    return;
  }
  ProductModal.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");

  ProductModal.classList.remove("hidden");
});
modalHide.addEventListener("click", () => {
  ProductModal.classList.toggle("hidden");
  document.body.classList.remove("overflow-hidden");
});
// There are toogle functions done

// Modal form
productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.querySelector(".product__name").value;
  let price = document.querySelector(".product__price").value;
  let number = document.querySelector(".product__number").value;
  let imageFile = document.querySelector(".product__image").files[0];
  let desc = document.querySelector(".product__desc").value;
  let imageUrl = URL.createObjectURL(imageFile);

  if (price <= 0 || number <= 0) {
    alert("Price and number must be greater than 0");
    return;
  }
  let renderProductAdd = (arr) => {
    arr.push({
      id: arr.length + 1,
      name,
      price,
      number,
      image: imageUrl,
      description: desc,
    });
    const newImg = document.querySelector(".item__pic");
    newImg.onload = () => {
      URL.revokeObjectURL(imageUrl);
    };

    //create Li
    let newItem = document.createElement("li");
    newItem.dataset.id = arr.length;
    newItem.classList.add(
      "item",
      "w-[300px]",
      "flex",
      "flex-col",
      "justify-between",
      "items-center",
      "gap-2",
      "border",
      "border-gray-200",
      "rounded-md"
    );
    newItem.innerHTML += `
      <div class="">
        <img class="item__pic rounded-md w-full h-[300px]" src="${imageUrl}" alt="${name}" />
      </div>
      <div class="flex flex-col gap-1 w-full p-4">
        <h2 class="item__title text-center font-bold text-gray-600 text-lg">${name}</h2>
        <p class="item__price font-medium text-md">Price: ${price}$</p>
        <p class="item__number font-medium">Number: ${number}</p>
        <p class="item__desc">Description: ${desc}</p>
        <button class="item__btn bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md">Add to cart</button>
      </div>
      `;
    list.appendChild(newItem);
  };
  renderProductAdd(products);

  productForm.reset();
  alert("Product added successfully.");

  ProductModal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});
// Modal form done

// Add id to item of list
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("item__btn")) {
    let id = e.target.parentElement.parentElement.dataset.id;
    addCart(id);
    // console.log(id);
  }
});

// Add cart
const addCart = (id) => {
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    alert("Product not found.");
    return;
  }

  if (product.number <= 0) {
    alert("This product is out of stock.");
    return;
  }

  const existingItem = array.find((item) => item.product_id === product.id);

  if (existingItem) {
    existingItem.count += 1; 
  } else {
    array.push({
      product_id: product.id, 
      count: 1, 
    });
  }

  product.number -= 1; 
  renderCart(); 
  renderList(products); 
};
// Add cart done

// Render cart
const renderCart = () => {
  const cartList = document.querySelector(".cart__list");
  cartList.innerHTML = ""; // Clear the current cart list

  let totalSum = 0; // Variable to calculate the total price

  array.forEach((item) => {
    const product = products.find(
      (prod) => prod.id === parseInt(item.product_id)
    );

    if (product) {
      const li = document.createElement("li");
      li.classList.add(
        "cart-item",
        "flex",
        "gap-4",
        "items-center",
        "border-b",
        "pb-4"
      );

      li.innerHTML = `
      <div>
        <img class="w-40 h-30 rounded-md object-fit" src="${
          product.image
        }" alt="${product.name}" /> 
      </div>
      <div>
        <span class="flex-1">${product.name}</span>
        <div class="flex items-center gap-2">
          <button 
            class="decrement bg-gray-200 px-2 py-1 rounded-md text-black" 
            data-id="${product.id}"
          >-</button>
          <span class="font-medium">${item.count}</span>
          <button 
            class="increment bg-gray-200 px-2 py-1 rounded-md text-black" 
            data-id="${product.id}"
          >+</button>
        </div>
        <span class="flex-1 text-right">Total: $${
          product.price * item.count
        }</span>
        v
      </div>
      `;

      cartList.appendChild(li);

      // Add to total sum
      totalSum += product.price * item.count;
    }
  });

  // Add total sum to the cart
  const totalElement = document.createElement("div");
  totalElement.classList.add(
    "total",
    "text-lg",
    "font-bold",
    "border-t",
    "pt-4",
    "flex",
    "justify-between"
  );
  totalElement.innerHTML = `
    <span>Total:</span>
    <span>$${totalSum}</span>
  `;

  cartList.appendChild(totalElement);

  // Update the cart count badge
  document.getElementById("count").textContent = array.reduce(
    (total, item) => total + item.count,
    0
  );

  // Add event listeners for increment and decrement buttons
  const incrementButtons = document.querySelectorAll(".increment");
  const decrementButtons = document.querySelectorAll(".decrement");

  incrementButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      updateCartItem(id, "increment");
    })
  );

  decrementButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      updateCartItem(id, "decrement");
    })
  );
};
renderList(products);
// Render cart


// Update cart item for inc and dec
const updateCartItem = (id, action) => {
  const product = products.find((prod) => prod.id === id);
  const cartItem = array.find((item) => item.product_id === id);

  if (!product || !cartItem) return;

  if (action === "increment") {
    if (product.number > 0) {
      cartItem.count += 1;
      product.number -= 1;
    } else {
      alert("No more stock available for this product.");
    }
  } else if (action === "decrement") {
    if (cartItem.count > 1) {
      cartItem.count -= 1;
      product.number += 1;
    } else {
      // Remove item if quantity is 1 and decrement is clicked
      array = array.filter((item) => item.product_id !== id);
      product.number += 1;
    }
  }

  renderCart(); // Update the cart
  renderList(products); // Update the product list
};
// Update cart item for inc and dec done