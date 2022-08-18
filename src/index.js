import { Request } from "./request";
import { UI } from "./ui";

const request = new Request("http://localhost:3000/responses");

const ui = new UI()

eventListeners();


function eventListeners(){
    document.addEventListener("DOMContentLoaded", getAllProduct)
}

function getAllProduct(){
 
    request.getData()
    .then((result) => {
    ui.addAllCategoriesToUI(result[0][0].params.userCategories)
    ui.addProductsToUI(result[0][0].params.recommendedProducts)
    ui.owlCourselOptions()
    })
    .catch((err) => {
     console.log(err)
    });
}

