console.log("Expected construct Stop Watch JS code");

let show_mg_btn = null;

GetElement = (element) => {
    element = document.querySelector("#show_mg");
    if (element == null) {
        setTimeout((element) => {GetElement(element)}, 500);
    } else {
        element.addEventListener("click", function (e) {
            alert("Expected construct Stop Watch JS code");
        });
    }
}

GetElement(show_mg_btn);

// function GetElement(element) {
//     return new Promise((resolve) => {
        
//     });
// }

// async function CheckGetElement() {

// }



