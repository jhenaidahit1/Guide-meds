new Swiper('.card-wrapper', {
  
  loop: true,
  spaceBetween:30,

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive brealpoint
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
     1024: {
      slidesPerView: 4
    },
  },
});

// testmonial part start===============================================================================

new Swiper('.testmonial-card-wrapper', {
  
  loop: true,
  spaceBetween:30,

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive brealpoint
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
     1024: {
      slidesPerView: 2
    },
  },
});
// testmonial part end===============================================================================


//aroow up ===========================================================================

  // Select the button
        const scrollTopBtn = document.getElementById("scrollTopBtn");

        // Show the button when scrolling down
        window.onscroll = () => {
            if (document.documentElement.scrollTop > 200) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };

        // Scroll to the top smoothly when button is clicked
        scrollTopBtn.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };



  // home page closed============================================================================================================================

  // about page start==================================================================================      

  new Swiper('.blog-scroll-card-wrapper', {
  
  loop: true,
  spaceBetween:30,

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive brealpoint
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
     1024: {
      slidesPerView: 3
    },
  },
});

  // ===========================================
  const thumbnails = document.querySelectorAll('.thumbnail-images img');
const mainImage = document.querySelector('.main-image img');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
    });
});

// "--------------------
const askExpertButton = document.querySelector('.ask-expert');
askExpertButton.addEventListener('click', () => {
    alert('contact-page.html');
});

// ---------------------product page----------------------------------------------start
const quantityInput = document.getElementById('quantity');
const subtotalElement = document.getElementById('subtotal');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

const pricePerUnit = 599.00;

increaseButton.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
    updateSubtotal(quantity);
});

decreaseButton.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        updateSubtotal(quantity);
    }
});

function updateSubtotal(quantity) {
    const subtotal = quantity * pricePerUnit;
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
}
  

  // ---------button-------
function showTab(tabId) {
      // Remove 'active' class from all buttons
      document.querySelectorAll('.tab-buttons button').forEach(button => {
        button.classList.remove('active');
      });

      // Hide all tab content
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
      });

      // Show selected tab and make its button active
      document.getElementById(tabId).classList.remove('hidden');
      document.getElementById(tabId + '-tab').classList.add('active');
    }


    // product page 1--------------------------
       new Swiper('.product-scroll-card-wrapper', {
  
  loop: true,
  spaceBetween:30,

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive brealpoint
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
     1024: {
      slidesPerView: 5
    },
  },
});
    // product page 1--------------------------
// all product page-------------------
function showSingleTab(tabId) {
  // Remove 'active' class from all buttons
  document.querySelectorAll('.all-product-tab-buttons button').forEach(button => {
    button.classList.remove('all-product-active');
  });

  // Hide all tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.add('hidden');
  });

  // Show the clicked tab and activate its button
  document.getElementById(tabId).classList.remove('hidden');
  document.getElementById(tabId + '-tab').classList.add('all-product-active');
}

// all product page-------------------