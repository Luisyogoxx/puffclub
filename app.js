/* ==========================================================================
   PUFF CLUB - APPLICATION LOGIC & STORE ENGINE
   Ubicación: Pamplona (Norte de Santander) - Bucaramanga
   ========================================================================== */

// 1. DATASET OF PRODUCTS & VIDEOS WITH 100% MARGIN OFFICIAL PRICING
const PRODUCTS = [
  {
    id: 1,
    name: "Archer 60.000 Puffs Ice Control",
    brand: "Vapmod Tech",
    category: "ultra",
    badge: "🔥 TOP VENTAS",
    badgeClass: "blue",
    puffs: "60.000 Caladas",
    cost: 24060,
    price: 48000,
    oldPrice: 55000,
    image: "assets/archer-60000.jpg",
    video: "assets/archer-video.mp4",
    hasVideo: true,
    flavors: [
      "Watermelon Ice (Sandía Helada)",
      "Blue Razz Ice (Mora Azul Fría)",
      "Miami Mint (Menta Intensa)",
      "Grape Ice (Uva Helada)",
      "Sour Apple (Manzana Ácida)"
    ],
    specs: {
      "Capacidad": "28ml Pre-cargado",
      "Batería": "850mAh Recargable Type-C",
      "Control": "Ajuste de Hielo 4 Niveles",
      "Tecnología": "Dual Mesh Coil Inteligente",
      "Pantalla": "Full HD Táctil con % de Batería y Líquido"
    },
    description: "El vapeador más avanzado del mercado. Cuenta con revolucionario control de frío ajustable, pantalla táctil digital de alta definición y doble resistencia de malla para una producción colosal de vapor y sabor consistente."
  },
  {
    id: 2,
    name: "Spaceman Ultra Phantom 30K - 50K",
    brand: "Spaceman Vape",
    category: "ultra",
    badge: "🚀 ULTRA POTENCIA",
    badgeClass: "blue",
    puffs: "30.000 - 50.000 Puffs",
    cost: 22990,
    price: 46000,
    oldPrice: 52000,
    image: "assets/spaceman-50000.jpg",
    video: "assets/spaceman-video.mp4",
    hasVideo: true,
    flavors: [
      "Black Mint",
      "Triple Berry Ice",
      "Cherry Lemon Fizz",
      "Blueberry Watermelon",
      "Dragon Strawnana"
    ],
    specs: {
      "Modos": "Normal (30K) / Boost (50K)",
      "Batería": "800mAh Pure Cobalt",
      "Pantalla": "Animación LED Cyberpunk",
      "Flujo de aire": "3 Niveles de Calada",
      "Mesh": "Tecnología Sub-Ohm Mesh"
    },
    description: "Inspirado en la estética aeroespacial con animaciones futuristas. El Spaceman ofrece una experiencia de calada ultra densa y selector de modo Boost para duplicar la intensidad de vapor."
  },
  {
    id: 3,
    name: "Hookalits / HUMO AZUL 24K Edition",
    brand: "Humo Oficial / Hookalits",
    category: "edicion",
    badge: "⭐ EDICIÓN DE LUJO",
    badgeClass: "gold",
    puffs: "24.000 Caladas",
    cost: 20320,
    price: 41000,
    oldPrice: 48000,
    image: "assets/humo-azul.png",
    video: "assets/humo-azul-video.mp4",
    hasVideo: true,
    flavors: [
      "Blueberry Mint 24K (Azul)",
      "Gold Vanilla Tobacco (Dorado)",
      "Pink Fusion Tropical (Rose)",
      "Blackberry Ice Especial (Negro)"
    ],
    specs: {
      "Acabado": "Chasis Metálico 24K Brillante",
      "Batería": "700mAh Carga Rápida",
      "Capacidad": "18ml E-Liquid Premium",
      "Flujo": "Regulador de Aire Personalizable",
      "Edición": "Lote Exclusivo Numerado"
    },
    description: "Diseñado para los que buscan exclusividad y distinción. El Hookalits / Humo Azul 24K combina un cuerpo de lujo con fórmulas de sabor prémium."
  },
  {
    id: 4,
    name: "Vapeador Clase Azul Rose / Negro",
    brand: "Clase Vape",
    category: "edicion",
    badge: "✨ ESTILO & ELEGANCIA",
    badgeClass: "gold",
    puffs: "20.000 Caladas",
    cost: 20320,
    price: 41000,
    oldPrice: 48000,
    image: "assets/vapeador-clase-azul-rose.png",
    video: null,
    hasVideo: false,
    flavors: [
      "Azul Clásico (Blueberry Ice)",
      "Rose Fucsia (Pink Strawberry)",
      "Negro Brillante (Black Mint / Tobacco)"
    ],
    specs: {
      "Diseño": "Acabado Metálico de Lujo",
      "Colores": "Azul Clásico, Rose Fucsia, Negro Brillante",
      "Batería": "Recargable Type-C",
      "Resistencia": "Mesh Coil de Alto Rendimiento"
    },
    description: "Línea Clase con diseño sofisticado en tres tonos impactantes: Azul Clásico, Rose Fucsia y Negro Brillante. Calada refinada y máxima durabilidad."
  },
  {
    id: 5,
    name: "Kit Solo Bar 35.000 Puffs",
    brand: "SoloBar Official",
    category: "ultra",
    badge: "💎 KIT COMPLETO",
    badgeClass: "blue",
    puffs: "35.000 Puffs",
    cost: 18180,
    price: 36500,
    oldPrice: 42000,
    image: "assets/solobar-35000.webp",
    video: null,
    hasVideo: false,
    flavors: [
      "Watermelon Bubblegum Ice",
      "Blueberry Raspberry Mint",
      "Kiwi Strawberry Ice",
      "Grape Energy Rush"
    ],
    specs: {
      "Tipo": "Kit Batería Reutilizable + Pod 35K",
      "Batería": "1000mAh Larga Autonomía",
      "Carga": "USB Tipo C Super Fast",
      "Tecnología": "Sistema Modular Ecológico"
    },
    description: "Kit completo Solo Bar: incluye la batería inteligente recargable de alta capacidad y el cartucho de 35.000 caladas listo para disfrutar."
  },
  {
    id: 6,
    name: "Nimmbox Mecha Kit 25.000 Puffs",
    brand: "Nimmbox",
    category: "pro",
    badge: "⚡ DISEÑO MECHA",
    badgeClass: "blue",
    puffs: "25.000 Caladas",
    cost: 17650,
    price: 35500,
    oldPrice: 40000,
    image: "assets/nimmbox-25000.jpeg",
    video: "assets/nimmbox-video.mp4",
    hasVideo: true,
    flavors: [
      "Cyber Mint",
      "Strawberry Kiwi Crush",
      "Blue Razz Lemonade",
      "Watermelon Bubblegum"
    ],
    specs: {
      "Diseño": "Carcasa Mecha Transparente",
      "Luces": "RGB Interactivas al Inhalar",
      "Batería": "650mAh USB-C",
      "Capacidad": "16ml",
      "Coil": "Mesh 1.0 Ohm Optimizada"
    },
    description: "Estilo mecha cyberpunk con componentes internos visibles y luces RGB interactivas. Gran rendimiento de batería, calada suave y sabores dulces y frescos ininterrumpidos."
  },
  {
    id: 7,
    name: "Nicky Jam Edition 15.000 Puffs (Fume QRJoy)",
    brand: "QRJoy Fume",
    category: "pro",
    badge: "👑 NICKY JAM OFFICIAL",
    badgeClass: "gold",
    puffs: "15.000 Caladas",
    cost: 11760,
    price: 23500,
    oldPrice: 28000,
    image: "assets/nicky-jam.jpg",
    video: "assets/nicky-jam-video.mp4",
    hasVideo: true,
    flavors: [
      "Cangri Mint (Menta Cangri)",
      "Fenix Tropical Mango",
      "El Ganador Ice Melon",
      "Latin Passion Fruit"
    ],
    specs: {
      "Edición": "Colaboración Oficial Nicky Jam x Fume",
      "Pantalla": "Indicador Digital LED",
      "Batería": "600mAh Recargable Type-C",
      "Líquido": "14ml Fume Signature",
      "Flujo": "Calada Restringida MTL y DTL"
    },
    description: "La línea exclusiva del artista Nicky Jam junto a Fume QRJoy. Estética urbana prémium, pantalla digital y los mejores sabores latinos."
  },
  {
    id: 8,
    name: "Dummy Vape 8.000 Puffs",
    brand: "Dummy Vapes",
    category: "compact",
    badge: "🎨 URBAN STYLE",
    badgeClass: "dark",
    puffs: "8.000 Caladas",
    cost: 10160,
    price: 20500,
    oldPrice: 25000,
    image: "assets/dummy-8000.jpg",
    video: null,
    hasVideo: false,
    flavors: [
      "Gummi Bear",
      "Cool Mint",
      "Rainbow Candy",
      "Pineapple Twist"
    ],
    specs: {
      "Tamaño": "Ultra Compacto de Bolsillo",
      "Batería": "650mAh Recargable",
      "Capacidad": "12ml",
      "Diseño": "Arte Urbano Coleccionable"
    },
    description: "El vape compacto perfecto para el día a día. Estilo audaz, perfil liviano y un rendimiento de 8.000 caladas llenas de fidelidad de sabor."
  },
  {
    id: 9,
    name: "Pod Solo Bar 35.000 Puffs (Repuesto)",
    brand: "SoloBar",
    category: "baterias",
    badge: "🔄 CARTUCHO POD",
    badgeClass: "dark",
    puffs: "35.000 Puffs",
    cost: 9620,
    price: 19500,
    oldPrice: 23000,
    image: "assets/solobar-35000.webp",
    video: null,
    hasVideo: false,
    flavors: [
      "Blue Razz Ice Pod",
      "Watermelon Strawberry Pod",
      "Spearmint Pod",
      "Mango Peach Pod"
    ],
    specs: {
      "Uso": "Cartucho de Recambio para Base Solo Bar",
      "Capacidad": "20ml E-Liquid",
      "Resistencia": "Mesh Coil Integrada"
    },
    description: "Cartucho de repuesto Pod SoloBar con 35.000 caladas. Solo acóplalo a tu batería SoloBar y sigue disfrutando al mejor precio."
  },
  {
    id: 10,
    name: "Kilo Escobar 4.000 Puffs",
    brand: "Kilo / Escobar",
    category: "compact",
    badge: "⚡ CLÁSICO",
    badgeClass: "dark",
    puffs: "4.000 Caladas",
    cost: 6950,
    price: 14000,
    oldPrice: 17000,
    image: "assets/kilo-4000.jfif",
    video: null,
    hasVideo: false,
    flavors: [
      "Wild Watermelon",
      "Rainforest Mint",
      "Mango Guava Splash"
    ],
    specs: {
      "Perfil": "Diseño Tubular Ergonómico",
      "Capacidad": "9ml",
      "Nicotina": "5% Sal de Nicotina",
      "Resistencia": "Malla Kilo Mesh"
    },
    description: "Una leyenda del vapeo. Sabor dulce, calada sedosa y portabilidad inigualable para llevar contigo a cualquier fiesta o reunión."
  }
];

// 2. CONFIGURATION
const STORE_CONFIG = {
  phone: "573000000000",
  currency: "COP",
  brandName: "PUFF CLUB",
  locations: "Pamplona (Norte de Santander) - Bucaramanga"
};

// 3. CART STATE
let cart = JSON.parse(localStorage.getItem("puff_club_cart") || "[]");
let currentFilter = "all";
let searchQuery = "";

// 4. DOM ELEMENTS
const ageModal = document.getElementById("ageModal");
const btnAgeYes = document.getElementById("btnAgeYes");
const btnAgeNo = document.getElementById("btnAgeNo");

const productsGrid = document.getElementById("productsGrid");
const videoShowcaseGrid = document.getElementById("videoShowcaseGrid");
const noResults = document.getElementById("noResults");
const filterPills = document.getElementById("filterPills");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const countAll = document.getElementById("countAll");
const btnResetFilters = document.getElementById("btnResetFilters");

const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartItemsList = document.getElementById("cartItemsList");
const cartSubtotal = document.getElementById("cartSubtotal");
const clearCartBtn = document.getElementById("clearCartBtn");
const whatsappCheckoutBtn = document.getElementById("whatsappCheckoutBtn");
const customerNameInput = document.getElementById("customerName");
const customerCityInput = document.getElementById("customerCity");

const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
const modalCloseBtn = document.getElementById("modalCloseBtn");

const heroVideo = document.getElementById("heroVideo");
const heroSoundToggle = document.getElementById("heroSoundToggle");
const heroQuickAdd = document.getElementById("heroQuickAdd");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");

// 5. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initAgeGate();
  renderVideoShowcase();
  renderProducts();
  updateCartUI();
  setupEventListeners();
  setupHeroSound();
  
  if (countAll) {
    countAll.textContent = PRODUCTS.length;
  }
  
  if (window.lucide) {
    lucide.createIcons();
  }
});

// AGE VERIFICATION GATE
function initAgeGate() {
  const verified = localStorage.getItem("puff_age_verified");
  if (verified === "true") {
    if (ageModal) ageModal.classList.add("hidden");
    document.body.classList.remove("age-locked");
  } else {
    if (ageModal) ageModal.classList.remove("hidden");
    document.body.classList.add("age-locked");
  }

  if (btnAgeYes) {
    btnAgeYes.addEventListener("click", () => {
      localStorage.setItem("puff_age_verified", "true");
      if (ageModal) ageModal.classList.add("hidden");
      document.body.classList.remove("age-locked");
      showToast("¡Bienvenido a PUFF CLUB!", "check-circle");
    });
  }

  if (btnAgeNo) {
    btnAgeNo.addEventListener("click", () => {
      alert("Lo sentimos. Este sitio es exclusivamente para mayores de 18 años según la normativa vigente.");
      window.location.href = "https://www.google.com";
    });
  }
}

// FORMAT CURRENCY
function formatCOP(number) {
  return "$" + number.toLocaleString("es-CO") + " COP";
}

// RENDER VIDEO SHOWCASE SECTION
function renderVideoShowcase() {
  const videoProducts = PRODUCTS.filter(p => p.hasVideo && p.video);
  if (!videoShowcaseGrid) return;

  videoShowcaseGrid.innerHTML = videoProducts.map(prod => `
    <div class="showcase-video-card" onclick="openProductModal(${prod.id})">
      <div class="showcase-video-media">
        <video muted loop playsinline poster="${prod.image}" onmouseover="this.play()" onmouseout="this.pause()">
          <source src="${prod.video}" type="video/mp4">
        </video>
        <div class="showcase-play-indicator" title="Ver Video HD">
          <i data-lucide="play"></i>
        </div>
      </div>
      <div class="showcase-info">
        <div class="product-category-name">${prod.brand}</div>
        <h3>${prod.name}</h3>
        <p>${prod.puffs} • ${prod.flavors.length} Sabores / Tonos</p>
        <div class="showcase-meta">
          <span class="badge-puffs">${prod.puffs}</span>
          <span class="showcase-price">${formatCOP(prod.price)}</span>
        </div>
      </div>
    </div>
  `).join("");
}

// RENDER PRODUCTS CATALOG
function renderProducts() {
  if (!productsGrid) return;

  let filtered = PRODUCTS.filter(item => {
    const matchCategory = (currentFilter === "all") || (item.category === currentFilter);
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q || 
      item.name.toLowerCase().includes(q) || 
      item.brand.toLowerCase().includes(q) || 
      item.puffs.toLowerCase().includes(q) ||
      item.flavors.some(f => f.toLowerCase().includes(q));
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = "";
    if (noResults) noResults.classList.remove("hidden");
    return;
  }

  if (noResults) noResults.classList.add("hidden");

  productsGrid.innerHTML = filtered.map(prod => `
    <div class="product-card" data-id="${prod.id}">
      <div class="product-thumb-container">
        <div class="product-badges-corner">
          ${prod.badge ? `<span class="pill-badge ${prod.badgeClass}">${prod.badge}</span>` : ""}
          <span class="pill-badge dark">${prod.puffs}</span>
        </div>

        ${prod.hasVideo ? `
          <button class="product-has-video-badge" onclick="openProductModal(${prod.id}); event.stopPropagation();" title="Ver demostración en video">
            <i data-lucide="video"></i> Ver Video
          </button>
        ` : ""}

        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
      </div>

      <div class="product-details">
        <div class="product-category-name">${prod.brand}</div>
        <h3 class="product-title">${prod.name}</h3>

        <div class="product-specs-row">
          <span class="spec-tag">${prod.puffs}</span>
          <span class="spec-tag">${prod.flavors.length} Opciones</span>
        </div>

        <div class="product-flavors-row">
          <label for="flavor-${prod.id}">Elegir Sabor / Color:</label>
          <select id="flavor-${prod.id}" class="flavor-select" onclick="event.stopPropagation()">
            ${prod.flavors.map(f => `<option value="${f}">${f}</option>`).join("")}
          </select>
        </div>

        <div class="product-pricing-actions">
          <div class="product-price-box">
            <span class="current-price">${formatCOP(prod.price)}</span>
            ${prod.oldPrice ? `<span class="old-price">${formatCOP(prod.oldPrice)}</span>` : ""}
          </div>

          <div class="card-btns-row">
            <button class="btn-add-cart" onclick="addToCartFromCard(${prod.id})">
              <i data-lucide="shopping-bag"></i> Agregar
            </button>
            <button class="btn-card-quick-view" onclick="openProductModal(${prod.id})" title="Ver detalles y video">
              <i data-lucide="eye"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  if (window.lucide) {
    lucide.createIcons();
  }
}

// ADD TO CART HANDLER
function addToCartFromCard(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const selectEl = document.getElementById(`flavor-${productId}`);
  const selectedFlavor = selectEl ? selectEl.value : product.flavors[0];

  addToCart(product, selectedFlavor);
}

function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  addToCart(product, product.flavors[0]);
}

function addToCart(product, flavor, qty = 1) {
  const existingIndex = cart.findIndex(item => item.id === product.id && item.flavor === flavor);

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      flavor: flavor,
      puffs: product.puffs,
      qty: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`¡${product.name} agregado al carrito!`, "check-circle");
  openCartDrawer();
}

function saveCart() {
  localStorage.setItem("puff_club_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCount) {
    cartCount.textContent = totalItems;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  if (cartSubtotal) {
    cartSubtotal.textContent = formatCOP(subtotal);
  }

  if (!cartItemsList) return;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="cart-empty-state">
        <i data-lucide="shopping-bag"></i>
        <h4>Tu carrito está vacío</h4>
        <p>Agrega tus vapeadores favoritos con un solo clic.</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  cartItemsList.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-flavor"><i data-lucide="sparkles" style="width:10px;height:10px;display:inline;"></i> ${item.flavor}</div>
        <div class="cart-item-price">${formatCOP(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeCartQty(${index}, -1)">-</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="changeCartQty(${index}, 1)">+</button>
      </div>
      <button class="btn-remove-item" onclick="removeCartItem(${index})" title="Eliminar">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

function changeCartQty(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast("Producto eliminado del carrito", "trash-2");
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("¿Estás seguro de que deseas vaciar tu carrito de compras?")) {
    cart = [];
    saveCart();
    updateCartUI();
    showToast("Carrito vaciado", "trash-2");
  }
}

// WHATSAPP CHECKOUT GENERATOR
function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío. Agrega productos antes de realizar el pedido.");
    return;
  }

  const name = customerNameInput ? customerNameInput.value.trim() : "";
  const city = customerCityInput ? customerCityInput.value.trim() : "Pamplona / Bucaramanga";
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  let message = `🔥 *¡HOLA PUFF CLUB! QUIERO REALIZAR UN PEDIDO* 🔥\n`;
  message += `📍 *Zona:* Pamplona (Norte de Santander) / Bucaramanga\n`;
  message += `═══════════════════════════\n`;
  
  if (name) {
    message += `👤 *Cliente:* ${name}\n`;
  }
  message += `📍 *Ciudad/Dirección:* ${city}\n`;
  message += `\n📦 *LISTA DE PRODUCTOS:*\n`;

  cart.forEach((item, i) => {
    message += `${i + 1}. *${item.name}* (x${item.qty})\n`;
    message += `   • Sabor/Color: ${item.flavor}\n`;
    message += `   • Subtotal: ${formatCOP(item.price * item.qty)}\n`;
  });

  message += `\n💰 *VALOR TOTAL:* ${formatCOP(subtotal)}\n`;
  message += `═══════════════════════════\n`;
  message += `🚀 *¿Tienen disponibilidad para entrega inmediata?*`;

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${STORE_CONFIG.phone}?text=${encodedMsg}`;

  window.open(waUrl, "_blank");
}

// PRODUCT DETAIL & VIDEO MODAL
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !modalContent) return;

  const specsList = product.specs ? Object.entries(product.specs).map(([k, v]) => `
    <div class="modal-spec-box">
      <div class="label">${k}</div>
      <div class="val">${v}</div>
    </div>
  `).join("") : "";

  modalContent.innerHTML = `
    <div class="modal-media-wrap">
      ${product.hasVideo && product.video ? `
        <video controls autoplay loop playsinline poster="${product.image}">
          <source src="${product.video}" type="video/mp4">
          Tu navegador no soporta reproducción de video.
        </video>
      ` : `
        <img src="${product.image}" alt="${product.name}">
      `}
    </div>

    <div class="modal-info-col">
      <div>
        <div class="product-category-name">${product.brand} • ${product.puffs}</div>
        <h2>${product.name}</h2>
      </div>

      <p style="color:var(--text-muted); font-size:0.92rem; line-height:1.5;">
        ${product.description}
      </p>

      ${specsList ? `
        <div class="modal-specs-list">
          ${specsList}
        </div>
      ` : ""}

      <div class="product-flavors-row">
        <label for="modal-flavor-select">Seleccionar Sabor / Opción:</label>
        <select id="modal-flavor-select" class="flavor-select" style="padding:0.6rem;">
          ${product.flavors.map(f => `<option value="${f}">${f}</option>`).join("")}
        </select>
      </div>

      <div class="modal-pricing-row">
        <div class="price">${formatCOP(product.price)}</div>
        ${product.oldPrice ? `<div class="old-price" style="font-size:1.1rem;">${formatCOP(product.oldPrice)}</div>` : ""}
      </div>

      <div class="modal-cta-group">
        <button class="btn-primary glow-btn large" style="flex:1;" onclick="addFromModal(${product.id})">
          <i data-lucide="shopping-bag"></i> Agregar al Carrito (${formatCOP(product.price)})
        </button>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  productModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function addFromModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const select = document.getElementById("modal-flavor-select");
  const flavor = select ? select.value : product.flavors[0];

  addToCart(product, flavor);
  closeProductModal();
}

function closeProductModal() {
  if (!productModal) return;
  productModal.classList.remove("active");
  
  const modalVideo = productModal.querySelector("video");
  if (modalVideo) {
    modalVideo.pause();
  }

  if (!cartDrawer.classList.contains("active") && !document.body.classList.contains("age-locked")) {
    document.body.style.overflow = "auto";
  }
}

// CART DRAWER TOGGLE
function openCartDrawer() {
  cartDrawer.classList.add("active");
  cartOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  cartDrawer.classList.remove("active");
  cartOverlay.classList.remove("active");
  if (!productModal.classList.contains("active") && !document.body.classList.contains("age-locked")) {
    document.body.style.overflow = "auto";
  }
}

// HERO SOUND TOGGLE
function setupHeroSound() {
  if (!heroVideo || !heroSoundToggle) return;

  heroSoundToggle.addEventListener("click", () => {
    heroVideo.muted = !heroVideo.muted;
    const isMuted = heroVideo.muted;
    heroSoundToggle.innerHTML = isMuted 
      ? '<i data-lucide="volume-x"></i> <span>Activar Audio</span>'
      : '<i data-lucide="volume-2"></i> <span>Silenciar</span>';
    if (window.lucide) lucide.createIcons();
  });

  if (heroQuickAdd) {
    heroQuickAdd.addEventListener("click", () => quickAddToCart(1));
  }
}

// TOAST NOTIFICATION
function showToast(message, icon = "check-circle") {
  if (!toast || !toastMsg) return;
  toastMsg.textContent = message;
  const iconEl = document.getElementById("toastIcon");
  if (iconEl) {
    iconEl.setAttribute("data-lucide", icon);
    if (window.lucide) lucide.createIcons();
  }

  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 3000);
}

// EVENT LISTENERS
function setupEventListeners() {
  if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);
  if (clearCartBtn) clearCartBtn.addEventListener("click", clearCart);
  if (whatsappCheckoutBtn) whatsappCheckoutBtn.addEventListener("click", checkoutWhatsApp);

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProductModal);
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  if (filterPills) {
    filterPills.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        filterPills.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        renderProducts();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearSearch) {
        clearSearch.classList.toggle("active", searchQuery.length > 0);
      }
      renderProducts();
    });
  }

  if (clearSearch) {
    clearSearch.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearSearch.classList.remove("active");
      renderProducts();
    });
  }

  if (btnResetFilters) {
    btnResetFilters.addEventListener("click", resetFilters);
  }

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
    mobileNav.querySelectorAll(".mob-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
      });
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCartDrawer();
    }
  });
}

function resetFilters() {
  currentFilter = "all";
  searchQuery = "";
  if (searchInput) searchInput.value = "";
  if (clearSearch) clearSearch.classList.remove("active");

  if (filterPills) {
    filterPills.querySelectorAll(".filter-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-filter") === "all");
    });
  }
  renderProducts();
}
