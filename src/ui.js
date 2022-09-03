export class UI {
  constructor() {
    this.navBarTab = document.getElementById("v-pills-tab");
    this.globalCategories = [];
  }

  addAllCategoriesToUI(categories) {
    let result = "";
    this.globalCategories = categories;


    for (let index = 0; index < categories.length; index++) {
      const element = categories[index];
      result += ` <button class="nav-link fw-bold col-lg-12 col-md-4 col-sm-8 col-11 d-block d-sm-flex align-items-start " style="color: #828282; overflow: hidden; white-space: nowrap;"  id="v-pills-0${[
        index,
      ]}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${[
        index,
      ]}-tab" type="button" role="tab">${element}</button>`;
     
    }
    this.navBarTab.innerHTML = result;
     
  }

  addProductsToUI(products){
    
      for (let catagoryIndex = 0; catagoryIndex < this.globalCategories.length; catagoryIndex++) {
      let productResult = "";
      let tabContent = document.getElementById(`v-pills-${catagoryIndex}-tab`);
      
      for (let index = 0; index < products[this.globalCategories[catagoryIndex]].length; index++) {
        let product = products[this.globalCategories[catagoryIndex]][index];
        productResult += `
            <div class="col">
            <div class="card h-100 product-card p-3">
              <img src="${product.image}" class="card-img-top bg-grey owl-lazy"  data-src=${product.image}>
              <div class="card-body">
                <h5 class="card-title fw-bold ">${
                  product.name.slice(0, 32)
                }</h5>
                <div class="card-body rounded-3 product-card-color">
                <p class="card-text fw-bolder">${product.priceText}</p>
                </div>
                <p class="card-text p-2"><small class="text-muted">${
                  product.params.shippingFee ? `<i class="fa-solid fa-truck fa-2xs me-2" style="color: green;"></i> Ücretsiz Kargo` : ""
                }</small></p>
                <a href="#" class="btn btn-primary d-block toaster">Sepete Ekle</a>
              </div>
            </div>
          </div>
        `;
      }
      tabContent.innerHTML = productResult;
      $('.toaster').click(function(){
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
    margin: 0,
    dots:false,
    lazyLoad:true,
    responsiveClass: true,
    nav: true,
    navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1300: {
        items: 3,
        nav: true,
      },
      1760: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });
  $("#v-pills-00-tab").addClass("active");
}
}
