export class UI {
  constructor() {
    this.navBarTab = document.getElementById("v-pills-tab");
    this.globalCategories = [];
  }

  addAllCategoriesToUI(categories) {
    let shortCategory = [];
    let result = "";
    this.globalCategories = categories;

    categories.map((e) => {
      if (e.length > 8) {
        e = e.substring(0, 24) + "...";
        shortCategory.push(e);
      }
    });

    for (let index = 0; index < shortCategory.length; index++) {
      const element = shortCategory[index];
      result += ` <button class="nav-link fw-bold w-100 d-flex align-items-start " id="v-pills-0${[
        index,
      ]}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${[
        index,
      ]}-tab" type="button" role="tab">${element}</button>`;
     
    }
    this.navBarTab.innerHTML = result;
     
  }

  addProductsToUI(products){
      for (let catagoryIndex = 0; catagoryIndex < 6; catagoryIndex++) {
      let productResult = "";
      let tabContent = document.getElementById(`v-pills-${catagoryIndex}-tab`);
      for (let index = 0; index < 20; index++) {
        let product = products[this.globalCategories[catagoryIndex]][index];
        productResult += `
            <div class="col">
            <div class="card h-100 product-card p-3">
              <img src="${product.image}" class="card-img-top bg-grey owl-lazy"  data-src=${product.image}>
              <div class="card-body">
                <h5 class="card-title fw-bold ">${
                  product.name.slice(0, 32) + "..."
                }</h5>
                <div class="card-body rounded-3 product-card-color">
                <p class="card-text fw-bolder">${product.priceText}</p>
                </div>
                <p class="card-text p-2"><small class="text-muted">${
                  product.params.shippingFee ? "Ücretsiz Kargo" : ""
                }</small></p>
                <a href="#" class="btn btn-primary d-block spet">Sepete Ekle</a>
              </div>
            </div>
          </div>
        `;
      }
      tabContent.innerHTML = productResult;
      $('.spet').click(function(){
          $('.toast').toast('show')
      });
    }
}

owlCourselOptions() {
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
 
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots:false,
    lazyLoad:true,
    responsiveClass: true,
    nav: true,
    navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
  $("#v-pills-00-tab").addClass("active");
}
}
