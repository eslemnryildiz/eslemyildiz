        
document.addEventListener("DOMContentLoaded", function() {
    // Tümü etiketine tıklanınca
    document.querySelector(".item.active").addEventListener("click", function() {
        var postCards = document.querySelectorAll(".post_card");
        // Tüm post kartlarını göster
        for (var i = 0; i < postCards.length; i++) {
            postCards[i].style.display = "block";
        }
    });
});




document.getElementById("katilim").addEventListener("click", function() {
    var postCards = document.querySelectorAll(".post_card");
    for (var i = 0; i < postCards.length; i++) {
        if (postCards[i].classList.contains("katilim")) {
            postCards[i].style.display = "block"; 
        } else {
            postCards[i].style.display = "none";
        }
    }
});


document.getElementById("organizasyon").addEventListener("click", function() {
    var postCards = document.querySelectorAll(".post_card");
    for (var i = 0; i < postCards.length; i++) {
        if (postCards[i].classList.contains("organizasyon")) {
            postCards[i].style.display = "block"; 
        } else {
            postCards[i].style.display = "none";
        }
    }
});


document.getElementById("hobi").addEventListener("click", function() {
    var postCards = document.querySelectorAll(".post_card");
    for (var i = 0; i < postCards.length; i++) {
        if (postCards[i].classList.contains("hobi")) {
            postCards[i].style.display = "block"; 
        } else {
            postCards[i].style.display = "none";
        }
    }
});

document.getElementById("yeni").addEventListener("click", function() {
    var postCards = document.querySelectorAll(".post_card");
    for (var i = 0; i < postCards.length; i++) {
        if (postCards[i].classList.contains("yeni")) {
            postCards[i].style.display = "block"; 
        } else {
            postCards[i].style.display = "none";
        }
    }
});







document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll(".blog_categories .item");

    listItems.forEach(function(item) {
        item.addEventListener("click", function() {
            listItems.forEach(function(item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".app_links li");

    menuItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            menuItems.forEach(function(item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});



// nav

function openCVPage() {
    // ID'si "cv" olan elemente tıklandığında cv.html sayfasını aç
    var element = document.getElementById("cv");
    if (element) {
      element.addEventListener("click", function() {
        window.location.href = "cv.html";
      });
    }
    
  }
  openCVPage();

  function openIletisimPage() {
    // ID'si "cv" olan elemente tıklandığında cv.html sayfasını aç
    var element = document.getElementById("iletisim");
    if (element) {
      element.addEventListener("click", function() {
        window.location.href = "iletisim.html";
      });
    }
    
  }
  openIletisimPage();

  function openHakkimdaPage() {
    // ID'si "cv" olan elemente tıklandığında cv.html sayfasını aç
    var element = document.getElementById("hakkimda");
    if (element) {
      element.addEventListener("click", function() {
        window.location.href = "hakkimda.html";
      });
    }
    
  }
  openHakkimdaPage();

  function openSertifikaPage() {
    // ID'si "cv" olan elemente tıklandığında cv.html sayfasını aç
    var element = document.getElementById("sertifika");
    if (element) {
      element.addEventListener("click", function() {
        window.location.href = "sertifika.html";
      });
    }
    
  }
  openSertifikaPage();
