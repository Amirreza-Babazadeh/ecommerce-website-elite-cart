# 🛒 Elite Cart - Modern & Responsive E-Commerce Website

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Swiper.js](https://img.shields.io/badge/Swiper.js-6332F6?style=for-the-badge&logo=swiper&logoColor=white)](https://swiperjs.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://amirrezastore.netlify.app/)

> A stylish, accessible, and fully responsive multi-page e-commerce storefront designed for fashion and lifestyle brands. Built from scratch with semantic HTML5, modern CSS3 (Flexbox & CSS Grid), and vanilla JavaScript.

👉 **Live Demo:** [https://amirrezastore.netlify.app/](https://amirrezastore.netlify.app/)

---

## 🌟 Key Features

- **📱 100% Fully Responsive Layout**: Built with a mobile-first mindset, fluid typography, and CSS `clamp()` spacing. Flawless on smartphones (320px+), tablets, laptops, and ultra-wide screens.
- **🧭 Responsive Mobile Navigation Drawer**: Off-canvas slide-in navigation drawer for mobile & tablet screens with backdrop click-outside and `Escape` key dismiss.
- **🎠 Interactive Touch Sliders**: Hero banner carousel and responsive product carousels powered by **Swiper.js** with touch swipe support, responsive breakpoints, and pagination bullets.
- **🖼️ Interactive Product Gallery**: Product detail page featuring dynamic thumbnail switcher that updates the main product display image on click.
- **➕ Interactive Quantity Steppers**: Functional dynamic increment (`+`) and decrement (`-`) quantity controls across cart and product detail pages.
- **📑 Tabbed Product Information**: Responsive tabs for switching between Product Description, Technical Specifications, and Customer Reviews.
- **🔍 Custom Dropdowns & Category Filters**: Polished category selection and sorting menus built with `NiceSelect2`.
- **♿ High Accessibility & SEO**:
  - Distinct descriptive `<title>` tags across all 9 pages for search indexing.
  - 100% descriptive `alt` tags on all product cards, categories, and icons for screen readers.
  - Unique form and radio button IDs scoped per product card to ensure conflict-free size & color selection.
- **🚀 Zero Build Tools Required**: Pure, clean HTML, CSS, and JS — lightning fast and easy to deploy anywhere (GitHub Pages, Netlify, Vercel).

---

## 📄 Pages Overview

The store features 9 fully designed and functional templates:

| Page | File | Description |
| :--- | :--- | :--- |
| **Home** | [`index.html`](index.html) | Hero slider, trending items, product carousels, category grid, features banner, and newsletter subscription |
| **Shop** | [`shop.html`](shop.html) | Full catalog grid with sidebar filters (price, categories, colors, sizes) and pagination |
| **Product Details** | [`details.html`](details.html) | Image gallery preview, stock indicator, size/color selectors, quantity stepper, and tabbed specifications/reviews |
| **Shopping Cart** | [`cart.html`](cart.html) | Responsive product summary table, dynamic quantity adjuster, coupon code input, and order subtotal calculations |
| **Checkout** | [`checkout.html`](checkout.html) | Billing & delivery details form, order summary overview, and payment method selector |
| **Wishlist** | [`wishlist.html`](wishlist.html) | Saved favorites table with stock availability status and quick "Add to Cart" action |
| **My Account** | [`account.html`](account.html) | Clean user authentication interface for login and account registration |
| **Contact Us** | [`contact.html`](contact.html) | Contact info cards, interactive message form, Google Maps integration, and FAQ accordion |
| **Returns Policy** | [`returns.html`](returns.html) | Step-by-step return guidelines and expandable FAQ accordion |

---

## 📁 Project Structure

```text
My Big Store/
│
├── index.html            # Homepage
├── shop.html             # Shop / Catalog page
├── details.html          # Single Product Details page
├── cart.html             # Shopping Cart page
├── checkout.html         # Checkout page
├── wishlist.html         # User Wishlist page
├── contact.html          # Contact & Support page
├── account.html          # Login / Register page
├── returns.html          # Returns Policy & FAQs
├── README.md             # Project documentation
│
└── assets/
    ├── css/
    │   ├── styles.css        # Main stylesheet (Design tokens, components, media queries)
    │   └── nice-select2.css  # Custom dropdown select styles
    ├── js/
    │   ├── main.js           # Core site logic (Mobile drawer, scroll-to-top, quantity steppers)
    │   ├── home.js           # Swiper.js slider initializations & responsive breakpoints
    │   ├── accordion.js      # Interactive FAQ accordion toggles
    │   └── nice-select2.js   # Accessible custom select dropdown library
    └── img/                  # Optimized product, category, and UI icon assets
```

---

## 🛠️ Built With

- **HTML5**: Semantic elements (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`)
- **CSS3**: Modern CSS Grid, Flexbox, CSS Variables (`--first-color`, `--hue`, typography scales), `clamp()` fluid functions
- **JavaScript (ES6+)**: DOM manipulation, event listeners, accessibility controls
- **External Libraries & CDNs**:
  - [Swiper.js v12](https://swiperjs.com/) (Touch sliders)
  - [Remix Icon v4.7](https://remixicon.com/) (Vector icon set)
  - [Nice-Select2](https://github.com/bluzky/nice-select2) (Stylized native `<select>` replacements)
  - [Google Fonts](https://fonts.google.com/) (*Azeret Mono* and *Instrument Sans*)

---

## 🚀 How to Run Locally

You can preview the project locally without installing complex packages or build tools:

### Option 1: Python HTTP Server (Recommended)
1. Clone the repository:
   ```bash
   git clone https://github.com/Amirreza-Babazadeh/ecommerce-website-elite-cart.git
   ```
2. Navigate into the directory:
   ```bash
   cd ecommerce-website-elite-cart
   ```
3. Start the local server:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and visit:
   ```text
   http://localhost:8000
   ```

### Option 2: VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Right-click on `index.html` and choose **"Open with Live Server"**.

---

## 👨‍💻 Author

**Amirreza Babazadeh**
- GitHub: [@Amirreza-Babazadeh](https://github.com/Amirreza-Babazadeh)
- Live Website: [Elite Cart on Netlify](https://amirrezastore.netlify.app/)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
