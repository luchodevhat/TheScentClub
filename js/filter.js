document.addEventListener("DOMContentLoaded", () => {

  const filters = document.querySelectorAll(".filter");
  const products = document.querySelectorAll(".product");

  filters.forEach(filter => {
    filter.addEventListener("change", () => {

      let activeFilters = Array.from(filters)
        .filter(f => f.checked)
        .map(f => f.value);

      products.forEach(product => {
        let category = product.dataset.category;

        if (activeFilters.length === 0 || activeFilters.includes(category)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });

    });
  });

});