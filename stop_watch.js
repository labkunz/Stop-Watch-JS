console.log("Expected construct Stop Watch JS code");

//let show_mg_btn = null;

GetElement = (target_id) => {
    let element = document.querySelector(`#${target_id}`);
    if (element == null) {
        setTimeout(() => {GetElement(target_id);}, 500);
    } else {
        element.addEventListener("click", function (e) {
            alert("Expected construct Stop Watch JS code");
        });
        //return func;
    }
}

GetElement("show_mg");
//GetElement(show_mg_btn, "show_mg");

// function GetElement(element) {
//     return new Promise((resolve) => {
        
//     });
// }

// async function CheckGetElement() {

// }
PlusZero = (num) => {
    return num >= 10 ? `${num}` : `0${num}`;
}

DisplayTime = () => {
    let for_hour = document.querySelector("#for_hour");
    let for_minute = document.querySelector("#for_minute");
    let for_second = document.querySelector("#for_second");

    if (for_hour == null || for_minute == null || for_second == null) {
        return;
    }

    let dateObj = new Date();
    for_hour.innerHTML = PlusZero(dateObj.getHours());
    for_minute.innerHTML = PlusZero(dateObj.getMinutes());
    for_second.innerHTML = PlusZero(dateObj.getSeconds());
}

ShowNowTime = () => {
    DisplayTime();
    setTimeout(() => {ShowNowTime();}, 1000);
}
ShowNowTime();

