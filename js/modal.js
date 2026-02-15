document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("productModal");
  const closeBtn = document.querySelector(".close-modal");

  const modalName = document.getElementById("modalName");
  const modalDesc = document.getElementById("modalDesc");
  const modalPrice = document.getElementById("modalPrice");
  const modalImage = document.getElementById("modalImage");
  const whatsappBtn = document.getElementById("whatsappBtn");

  document.querySelectorAll(".product").forEach(product => {
    product.addEventListener("click", () => {

      let name = product.dataset.name;
      let desc = product.dataset.desc;
      let price = product.dataset.price;
      let img = product.dataset.img;

      modalName.textContent = name;
      modalDesc.textContent = desc;
      modalPrice.textContent = price;
      modalImage.src = img;

      let numero = "50670394886"; // tu número
      let mensaje = `Hola, quiero comprar ${name} ${price}`;
      whatsappBtn.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});