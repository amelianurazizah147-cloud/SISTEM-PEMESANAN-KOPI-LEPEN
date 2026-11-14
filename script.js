// =================================
// DATA MENU KEDAI KOPI LEPEN
// =================================

const menus = [
  // MINUMAN DINGIN & JUICE
  ["Es Teh", 5000, "Minuman Dingin & Juice"],
  ["Es Jeruk", 8000, "Minuman Dingin & Juice"],
  ["Es Lemon Tea", 7000, "Minuman Dingin & Juice"],
  ["Es Kopi Lepen", 7000, "Minuman Dingin & Juice"],
  ["Es Cappuccino", 10000, "Minuman Dingin & Juice"],
  ["Es Milo Original", 10000, "Minuman Dingin & Juice"],
  ["Es Milo Oreo", 15000, "Minuman Dingin & Juice"],
  ["Es Tipis (Timun + Jeruk Nipis)", 12000, "Minuman Dingin & Juice"],
  ["Es Coklat", 10000, "Minuman Dingin & Juice"],
  ["Red Velvet", 13000, "Minuman Dingin & Juice"],
  ["Greentea", 13000, "Minuman Dingin & Juice"],
  ["Taro", 13000, "Minuman Dingin & Juice"],
  ["Soda Gembira", 15000, "Minuman Dingin & Juice"],
  ["Soda Susu", 12000, "Minuman Dingin & Juice"],
  ["Jus Alpukat", 12000, "Minuman Dingin & Juice"],
  ["Jus Mangga", 12000, "Minuman Dingin & Juice"],
  ["Jus Jambu", 10000, "Minuman Dingin & Juice"],
  ["Jus Sirsak", 10000, "Minuman Dingin & Juice"],
  ["Jus Tomat", 10000, "Minuman Dingin & Juice"],
  ["Jus Wortel", 10000, "Minuman Dingin & Juice"],
  ["Kopi Tabanan Bali", 7000, "Minuman Dingin & Juice"],

  // MINUMAN PANAS
  ["Kopi Lepen Panas", 7000, "Minuman Panas"],
  ["Kopi Susu", 8000, "Minuman Panas"],
  ["Cappuccino Panas", 8000, "Minuman Panas"],
  ["Teh Tubruk", 6000, "Minuman Panas"],
  ["Teh Manis Panas", 5000, "Minuman Panas"],
  ["Teh Tawar Panas", 4000, "Minuman Panas"],
  ["Wedang Jahe Gula Aren", 8000, "Minuman Panas"],
  ["Wedang Uwuh", 10000, "Minuman Panas"],
  ["Jeruk Panas", 8000, "Minuman Panas"],
  ["Coklat Panas", 8000, "Minuman Panas"],
  ["Lemon Tea Panas", 7000, "Minuman Panas"],

  // MENU UTAMA
  ["Gurameh Goreng / Bakar", 120000, "Menu Utama"],
  ["Gurameh Asam Manis", 130000, "Menu Utama"],
  ["Gurameh Cabe Ijo", 130000, "Menu Utama"],
  ["Ayam Bakar / Goreng / Gepuk", 10000, "Menu Utama"],
  ["Lele Bakar / Goreng / Gepik", 10000, "Menu Utama"],
  ["Ayam Kampung Goreng / Bakar", 24000, "Menu Utama"],
  ["Bebek Goreng", 25000, "Menu Utama"],
  ["Nasi Goreng Mawut", 19000, "Menu Utama"],
  ["Nasi Goreng Biasa", 17000, "Menu Utama"],
  ["Bakmie Goreng / Nyemek / Kuah", 17000, "Menu Utama"],
  ["Capcay Goreng / Nyemek / Kuah", 17000, "Menu Utama"],
  ["Bihun Goreng / Nyemek / Kuah", 17000, "Menu Utama"],
  ["Pecel", 12000, "Menu Utama"],
  ["Oseng Kangkung", 12000, "Menu Utama"],
  ["Oseng Kangkung Ayam", 15000, "Menu Utama"],
  ["Oseng Pakis", 12000, "Menu Utama"],
  ["Oseng Daage Lenca", 12000, "Menu Utama"],
  ["Nasi Putih", 6000, "Menu Utama"],
  ["Nasi Jumbo", 10000, "Menu Utama"],

  // CAMILAN
  ["Mendoan", 12000, "Camilan"],
  ["Dage Goreng", 12000, "Camilan"],
  ["Bakwan", 12000, "Camilan"],
  ["Lumpia", 12000, "Camilan"],
  ["Pisang Goreng", 12000, "Camilan"],
  ["Pisang Coklat Keju", 12000, "Camilan"],
  ["Siomay", 12000, "Camilan"],
  ["Jalabia", 12000, "Camilan"],
  ["Kentang Goreng", 12000, "Camilan"],
  ["Sosis Goreng", 7500, "Camilan"],
  ["Snack Mix", 20000, "Camilan"],

  // PAKET HEMAT
  ["Paket Nasi Ayam + Es Teh / Teh Anget", 19000, "Paket Hemat"],
  ["Paket Nasi Ayam + Es Jeruk / Jeruk Anget", 21000, "Paket Hemat"],
  ["Paket Nasi Lele + Es Teh / Teh Anget", 19000, "Paket Hemat"],
  ["Paket Nasi Lele + Es Jeruk / Jeruk Anget", 21000, "Paket Hemat"]
];


// =================================
// VARIABEL
// =================================

let cart = [];
let activeCategory = "Semua";

const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");
const cartItems = document.getElementById("cartItems");
const checkoutBtn = document.getElementById("checkoutBtn");
const cashInput = document.getElementById("cashInput");


// =================================
// FORMAT RUPIAH
// =================================

function rupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);
}


// =================================
// MENAMPILKAN MENU
// =================================

function renderMenus() {

  const keyword = searchInput.value.toLowerCase();

  const filtered = menus.filter(item => {

    const cocokKategori =
      activeCategory === "Semua" ||
      item[2] === activeCategory;

    const cocokPencarian =
      item[0].toLowerCase().includes(keyword);

    return cocokKategori && cocokPencarian;
  });

  menuGrid.innerHTML = "";

  document.getElementById("catalogTitle").textContent =
    activeCategory;

  document.getElementById("menuCount").textContent =
    filtered.length + " pilihan menu";

  document.getElementById("emptyState").classList.toggle(
    "hidden",
    filtered.length !== 0
  );

  filtered.forEach(item => {

    const card = document.createElement("div");

    card.className = "menu-card";

    const category = document.createElement("span");
    category.className = "menu-category";
    category.textContent = item[2];

    const name = document.createElement("h4");
    name.textContent = item[0];

    const bottom = document.createElement("div");
    bottom.className = "menu-bottom";

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = rupiah(item[1]);

    const button = document.createElement("button");
    button.className = "add-btn";
    button.textContent = "+";
    button.addEventListener("click", () => addToCart(item[0]));

    bottom.append(price, button);
    card.append(category, name, bottom);

    menuGrid.appendChild(card);
  });
}


// =================================
// FILTER KATEGORI
// =================================

document.getElementById("categoryNav")
.addEventListener("click", function(event) {

  const button = event.target.closest(".category-btn");

  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".category-btn")
  .forEach(btn => {
    btn.classList.toggle("active", btn === button);
  });

  renderMenus();
});


// =================================
// PENCARIAN MENU
// =================================

searchInput.addEventListener("input", renderMenus);


// =================================
// TAMBAH MENU KE KERANJANG
// =================================

function addToCart(name) {

  const menu = menus.find(item => item[0] === name);

  const existing = cart.find(item => item.name === name);

  if (existing) {

    existing.qty++;

  } else {

    cart.push({
      name: menu[0],
      price: menu[1],
      qty: 1
    });

  }

  renderCart();
}


// =================================
// UBAH JUMLAH PESANAN
// =================================

function changeQty(name, amount) {

  const item = cart.find(item => item.name === name);

  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {

    cart = cart.filter(item => item.name !== name);

  }

  renderCart();
}


// =================================
// HAPUS PESANAN
// =================================

function removeItem(name) {

  cart = cart.filter(item => item.name !== name);

  renderCart();
}


// =================================
// HITUNG TOTAL
// =================================

function getTotal() {

  return cart.reduce((sum, item) => {

    return sum + (item.price * item.qty);

  }, 0);
}


// =================================
// MENAMPILKAN KERANJANG
// =================================

function renderCart() {

  cartItems.innerHTML = "";

  const totalQty = cart.reduce(
    (sum, item) => sum + item.qty, 0
  );

  document.getElementById("cartCount").textContent =
    totalQty + " item";

  const total = getTotal();

  document.getElementById("subtotal").textContent =
    rupiah(total);

  document.getElementById("total").textContent =
    rupiah(total);

  checkoutBtn.disabled = cart.length === 0;

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="cart-empty">
        <h3>Belum ada pesanan</h3>
        <p>Silakan pilih menu terlebih dahulu.</p>
      </div>
    `;

  }

  cart.forEach(item => {

    const row = document.createElement("div");

    row.className = "cart-item";

    const left = document.createElement("div");

    const name = document.createElement("h4");
    name.textContent = item.name;

    const price = document.createElement("small");
    price.textContent = rupiah(item.price) + " / item";

    const controls = document.createElement("div");
    controls.className = "cart-controls";

    const minus = document.createElement("button");
    minus.className = "qty-btn";
    minus.textContent = "−";
    minus.addEventListener("click", () =>
      changeQty(item.name, -1)
    );

    const qty = document.createElement("span");
    qty.textContent = item.qty;

    const plus = document.createElement("button");
    plus.className = "qty-btn";
    plus.textContent = "+";
    plus.addEventListener("click", () =>
      changeQty(item.name, 1)
    );

    controls.append(minus, qty, plus);
    left.append(name, price, controls);

    const right = document.createElement("div");

    const itemTotal = document.createElement("div");
    itemTotal.className = "item-total";
    itemTotal.textContent =
      rupiah(item.price * item.qty);

    const remove = document.createElement("button");
    remove.className = "remove-btn";
    remove.textContent = "Hapus";
    remove.addEventListener("click", () =>
      removeItem(item.name)
    );

    right.append(itemTotal, remove);

    row.append(left, right);

    cartItems.appendChild(row);

  });

  updateChange();
}


// =================================
// METODE PEMBAYARAN
// =================================

// =================================
// METODE PEMBAYARAN
// =================================

function selectedPayment() {
  return document.querySelector(
    'input[name="payment"]:checked'
  ).value;
}

function selectedBank() {
  const bankSelect = document.getElementById("bankSelect");
  return bankSelect ? bankSelect.value : "";
}

// Mengatur pilihan metode pembayaran
document.querySelectorAll('input[name="payment"]')
.forEach(input => {
  input.addEventListener("change", function() {

    document.querySelectorAll(".payment-option")
    .forEach(label => {
      label.classList.toggle(
        "selected",
        label.querySelector("input").checked
      );
    });

    updateChange();
  });
});


// =================================
// HITUNG KEMBALIAN DAN TAMPILKAN BANK
// =================================

function updateChange() {

  const payment = selectedPayment();

  const isCash = payment === "Tunai";
  const isTransfer = payment === "Transfer";

  // Tampilkan kolom uang tunai
  document.getElementById("cashArea")
    .classList.toggle("hidden", !isCash);

  // Tampilkan pilihan bank jika Transfer
  document.getElementById("bankArea")
    .classList.toggle("hidden", !isTransfer);

  const cash = Number(cashInput.value) || 0;

  const change = Math.max(0, cash - getTotal());

  document.getElementById("change").textContent =
    rupiah(change);
}

cashInput.addEventListener("input", updateChange);


// =================================
// HALAMAN BUKTI PEMBAYARAN
// =================================

function printReceipt() {

  if (cart.length === 0) return;

  const payment = selectedPayment();
  const total = getTotal();

  const cash = payment === "Tunai"
    ? Number(cashInput.value) || 0
    : total;

  const bank = payment === "Transfer"
    ? selectedBank()
    : "";

  // Validasi pembayaran tunai
  if (payment === "Tunai" && cash < total) {
    alert("Uang pembayaran masih kurang!");
    cashInput.focus();
    return;
  }

  // Validasi pilihan bank
  if (payment === "Transfer" && !bank) {
    alert("Silakan pilih bank untuk pembayaran transfer.");
    document.getElementById("bankSelect").focus();
    return;
  }

  const customer =
    document.getElementById("customerName").value.trim()
    || "Pelanggan";

  const date = new Date().toLocaleString("id-ID");

  const receiptNumber =
    "KPL-" + Date.now().toString().slice(-8);

  const change = payment === "Tunai"
    ? Math.max(0, cash - total)
    : 0;

  // Membuat rincian pesanan
  const rows = cart.map(item => `
    <tr>
      <td>
        ${escapeHTML(item.name)}
        <div class="item-detail">
          ${item.qty} x ${rupiah(item.price)}
        </div>
      </td>

      <td class="item-price">
        ${rupiah(item.qty * item.price)}
      </td>
    </tr>
  `).join("");

  // Informasi pembayaran
  const paymentDetail = payment === "Transfer"
    ? `
      <div class="detail-row">
        <span>Bank tujuan</span>
        <strong>${escapeHTML(bank)}</strong>
      </div>
    `
    : payment === "Tunai"
      ? `
        <div class="detail-row">
          <span>Uang diterima</span>
          <strong>${rupiah(cash)}</strong>
        </div>

        <div class="detail-row">
          <span>Kembalian</span>
          <strong>${rupiah(change)}</strong>
        </div>
      `
      : `
        <div class="detail-row">
          <span>Jenis pembayaran</span>
          <strong>QRIS</strong>
        </div>
      `;

  const statusNote = payment === "Transfer"
    ? "Catatan: bukti ini mencatat pilihan metode transfer dan bank. Pembayaran perlu diperiksa atau dikonfirmasi oleh kasir secara manual."
    : "Transaksi berhasil dicatat oleh sistem kasir.";

  // Tampilan halaman bukti pembayaran
  const receipt = `
  <!DOCTYPE html>
  <html lang="id">

  <head>
    <meta charset="UTF-8">

    <meta name="viewport"
      content="width=device-width, initial-scale=1.0">

    <title>Bukti Pembayaran - Kedai Kopi Lepen</title>

    <style>

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 30px 16px;
        background: #f7f3ed;
        color: #29231f;
        font-family: Arial, sans-serif;
      }

      .receipt {
        max-width: 620px;
        margin: 0 auto;
        padding: 30px;
        background: #fffdf9;
        border: 1px solid #eadfd4;
        border-radius: 16px;
        box-shadow: 0 8px 28px rgba(55,35,22,.08);
      }

      .brand {
        text-align: center;
        padding-bottom: 20px;
        border-bottom: 1px dashed #cdb9a7;
      }

      .brand-mark {
        display: inline-grid;
        place-items: center;
        width: 48px;
        height: 48px;
        margin-bottom: 8px;
        border-radius: 13px;
        background: #4b3024;
        color: white;
        font-weight: bold;
      }

      h1 {
        margin: 0;
        color: #4b3024;
        font-size: 23px;
        letter-spacing: .5px;
      }

      .subtitle {
        margin: 7px 0 0;
        color: #887d73;
        font-size: 13px;
      }

      .success {
        margin: 22px 0;
        padding: 13px;
        border-radius: 10px;
        background: #edf4e9;
        color: #365b32;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
      }

      .meta {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-bottom: 22px;
      }

      .meta div {
        padding: 11px;
        background: #f7f3ed;
        border-radius: 9px;
      }

      .meta span,
      .detail-row span {
        display: block;
        color: #887d73;
        font-size: 11px;
        margin-bottom: 5px;
      }

      .meta strong {
        font-size: 13px;
        overflow-wrap: anywhere;
      }

      h2 {
        margin: 0 0 12px;
        font-size: 15px;
        color: #4b3024;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 18px;
      }

      td {
        padding: 12px 4px;
        border-bottom: 1px solid #eee5dc;
        font-size: 13px;
        vertical-align: top;
      }

      .item-detail {
        margin-top: 5px;
        color: #887d73;
        font-size: 11px;
      }

      .item-price {
        text-align: right;
        white-space: nowrap;
        font-weight: bold;
      }

      .total {
        display: flex;
        justify-content: space-between;
        padding: 16px 0;
        border-top: 1px dashed #cdb9a7;
        border-bottom: 1px dashed #cdb9a7;
        font-weight: bold;
      }

      .total strong {
        color: #6f4934;
        font-size: 21px;
      }

      .payment {
        margin-top: 20px;
      }

      .detail-row {
        display: flex;
        justify-content: space-between;
        gap: 15px;
        padding: 9px 0;
        border-bottom: 1px solid #eee5dc;
      }

      .detail-row strong {
        font-size: 13px;
        text-align: right;
      }

      .note {
        margin-top: 18px;
        padding: 12px;
        background: #f7f3ed;
        border-radius: 9px;
        color: #77685d;
        font-size: 11px;
        line-height: 1.6;
      }

      .thanks {
        margin: 22px 0 0;
        text-align: center;
        color: #887d73;
        font-size: 12px;
      }

      .actions {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 22px;
      }

      button {
        padding: 12px 18px;
        border: 0;
        border-radius: 8px;
        background: #6f4934;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }

      .back {
        background: #eadfd4;
        color: #4b3024;
      }

      @media(max-width: 480px) {
        .receipt {
          padding: 20px 16px;
        }

        .meta {
          grid-template-columns: 1fr;
        }

        .total strong {
          font-size: 18px;
        }
      }

      @media print {
        body {
          padding: 0;
          background: white;
        }

        .receipt {
          max-width: none;
          border: 0;
          border-radius: 0;
          box-shadow: none;
          padding: 10px;
        }

        .actions {
          display: none;
        }
      }

    </style>
  </head>

  <body>

    <main class="receipt">

      <header class="brand">
        <div class="brand-mark">KL</div>

        <h1>KEDAI KOPI LEPEN</h1>

        <p class="subtitle">
          Bukti Pembayaran & Rincian Pesanan
        </p>
      </header>

      <div class="success">
        ✓ Bukti transaksi berhasil dibuat
      </div>

      <section class="meta">

        <div>
          <span>Nomor Transaksi</span>
          <strong>${receiptNumber}</strong>
        </div>

        <div>
          <span>Tanggal</span>
          <strong>${date}</strong>
        </div>

        <div>
          <span>Nama Pelanggan</span>
          <strong>${escapeHTML(customer)}</strong>
        </div>

        <div>
          <span>Metode Pembayaran</span>
          <strong>${escapeHTML(payment)}</strong>
        </div>

      </section>

      <h2>Rincian Pesanan</h2>

      <table>
        <tbody>
          ${rows}
        </tbody>
      </table>

      <div class="total">
        <span>Total Pembayaran</span>
        <strong>${rupiah(total)}</strong>
      </div>

      <section class="payment">

        <h2>Informasi Pembayaran</h2>

        ${paymentDetail}

      </section>

      <div class="note">
        ${statusNote}
      </div>

      <p class="thanks">
        Terima kasih telah berkunjung ke Kedai Kopi Lepen.
        <br>
        Selamat menikmati pesanan Anda!
      </p>

      <div class="actions">

        <button onclick="window.print()">
          Cetak Bukti Pembayaran
        </button>

        <button class="back" onclick="window.close()">
          Tutup Halaman
        </button>

      </div>

    </main>

  </body>
  </html>
  `;

  // Membuka halaman bukti pembayaran
  const resultWindow = window.open("", "_blank");

  if (!resultWindow) {
    alert(
      "Pop-up diblokir browser. Izinkan pop-up untuk membuka halaman bukti pembayaran."
    );
    return;
  }

  resultWindow.document.open();
  resultWindow.document.write(receipt);
  resultWindow.document.close();
}
// =================================
// AMANKAN TEKS PELANGGAN
// =================================

function escapeHTML(text) {

  return text.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));

}


// =================================
// TOMBOL CETAK
// =================================

checkoutBtn.addEventListener("click", printReceipt);


// =================================
// PESANAN BARU
// =================================

document.getElementById("newOrderBtn")
.addEventListener("click", function() {

  if (
    cart.length > 0 &&
    !confirm("Apakah ingin menghapus semua pesanan?")
  ) {
    return;
  }

  cart = [];

  cashInput.value = "";

  document.getElementById("customerName").value = "";

  renderCart();

});


// =================================
// JALANKAN SISTEM
// =================================

renderMenus();

renderCart();