document.addEventListener('DOMContentLoaded', function() {
  let prevScrollPos = window.pageYOffset;
  const navbarA = document.querySelector('.navbar-a');

  window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos <= prevScrollPos) {
      navbarA.classList.remove('hidden');
    } else {
      navbarA.classList.add('hidden');
    }

    prevScrollPos = currentScrollPos;
  });


  const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
  const body = document.body;
  const sec1 = document.querySelector('.zero'); // Ganti dengan selector yang sesuai
  const sec2 = document.querySelector('.satu'); // Ganti dengan selector yang sesuai
  const sec3 = document.querySelector('.dua'); // Ganti dengan selector yang sesuai
  const sec4 = document.querySelector('.tiga'); // Ganti dengan selector yang sesuai
  const warna= document.querySelectorAll('.teks');

  const imagesbg = ["resources/btg.png", "resources/snst.png"];
  const images1 = ["resources/b.png", "resources/egypt_page-0001.jpg"]; // Daftar nama file gambar latar belakang
  const images3 = ["resources/c.png", "resources/egypt_page-0002.jpg"];
  const images2 = ["resources/a.png", "resources/egypt_page-0003.jpg"];
  const images4 = ["resources/d.png", "resources/f_page-0001"];
  const coolors = ["#fff","#333"]

  let currentIndex = 1;

  changeBackgroundBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % 2;
    const newImage = `url('${imagesbg[currentIndex]}')`;
    const newImage1 = `url('${images1[currentIndex]}')`;
    const newImage2 = `url('${images2[currentIndex]}')`;
    const newImage3 = `url('${images3[currentIndex]}')`;
    const newImage4 = `url('${images4[currentIndex]}')`;
    const newColor = coolors[currentIndex];
  
    document.body.style.transition = "background-image 0.5s ease-in-out";
    body.style.backgroundImage = newImage;
  
    sec1.style.transition = "background-image 0.5s ease-in-out";
    sec1.style.backgroundImage = newImage1;
  
    sec2.style.transition = "background-image 0.5s ease-in-out";
    sec2.style.backgroundImage = newImage2;
  
    sec3.style.transition = "background-image 0.5s ease-in-out";
    sec3.style.backgroundImage = newImage3;
  
    sec4.style.transition = "background-image 0.5s ease-in-out";
    sec4.style.backgroundImage = newImage4;
  
    const teksElements = document.querySelectorAll('.teks'); // Mengambil semua elemen dengan class 'teks'
    teksElements.forEach(function(el) {
      el.style.transition = "color 0.5s ease-in-out"; // Transisi warna teks
      el.style.color = newColor; // Mengganti warna teks sesuai warna yang diatur
    });
  });
});






  