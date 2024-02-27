document.addEventListener("DOMContentLoaded", function() {
  var toggleContent1 = document.getElementById("toggle-content-1");
  var fullContent1 = document.getElementById("full-content-1");

  var toggleContent2 = document.getElementById("toggle-content-2");
  var fullContent2 = document.getElementById("full-content-2");

  var toggleContent3 = document.getElementById("toggle-content-3");
  var fullContent3 = document.getElementById("full-content-3");

  fullContent1.style.display = "none";
  toggleContent1.textContent = "Baca Selengkapnya";

  fullContent2.style.display = "none";
  toggleContent2.textContent = "Baca Selengkapnya";

  fullContent3.style.display = "none";
  toggleContent3.textContent = "Baca Selengkapnya";

  toggleContent1.addEventListener("click", function() {
    if (fullContent1.style.display === "none") {
      fullContent1.style.display = "block";
      toggleContent1.textContent = "Tutup Bacaan";
    } else {
      fullContent1.style.display = "none";
      toggleContent1.textContent = "Baca Selengkapnya";
    }
  });

  toggleContent2.addEventListener("click", function() {
    if (fullContent2.style.display === "none") {
      fullContent2.style.display = "block";
      toggleContent2.textContent = "Tutup Bacaan";
    } else {
      fullContent2.style.display = "none";
      toggleContent2.textContent = "Baca Selengkapnya";
    }
  });

  toggleContent3.addEventListener("click", function() {
    if (fullContent3.style.display === "none") {
      fullContent3.style.display = "block";
      toggleContent3.textContent = "Tutup Bacaan";
    } else {
      fullContent3.style.display = "none";
      toggleContent3.textContent = "Baca Selengkapnya";
    }
  });
});
