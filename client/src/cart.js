if(document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready(){
    let btnRemove = document.querySelectorAll("#btn-remove-item");
    // let add = document.querySelectorAll("#addQuantity");
    // let reduce = document.querySelectorAll("#reduceQuantity");

    for(let i = 0; i < btnRemove.length; i++) {
        let button = btnRemove[i];
        button.addEventListener("click", removeItem)
    }

    // let strNum = parseInt(document.getElementById("number").innerText);
    // for(let i = 0; i < add.length; i++) {
    //     let addButton = add[i];
    //     addButton.addEventListener("click", () => {
    //         if(strNum >= 1){
    //             strNum++;
    //             document.getElementById("number").innerText = strNum;
    //         } else if(strNum <= 1) {
    //             strNum = 1;
    //             document.getElementById("number").innerText = strNum;
    //         }
    //     })
    // }

    // for(let i = 0; i < reduce.length; i++) {
    //     let reduceButton = reduce[i];
    //     reduceButton.addEventListener("click", () => {
    //         if(strNum > 1){
    //             strNum--;
    //             document.getElementById("number").innerText = strNum;  
    //         } else if(strNum <= 1) {
    //             strNum = 1;
    //             document.getElementById("number").innerText = strNum;
    //         }
    //     })
    // }

}

function removeItem(e) {
    let buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartSubtotal();
}

function updateCartSubtotal() {
    let cartRows = document.querySelectorAll("#cart>*");
    console.log(cartRows)
    let subtotal = 0;
    let total = 0;
    for(let i = 0; i < cartRows.length; i++) {
        let row = cartRows[i];
        let itemPrice = row.getElementById("itemPrice");
        let price = parseFloat(itemPrice.getElementById("price").innerText.replace("RM", ""));
        console.log(price)
        let quantity = parseInt(document.getElementById("number").innerText);
        console.log(quantity)
        subtotal += (price * quantity);
    }
    let shipping = parseFloat(document.getElementById("shipFee").innerText.replace("RM", ""));
    total += subtotal + shipping;
    subtotal = Math.round(subtotal * 100) / 100;
    total = Math.round(total * 100) / 100;
    document.getElementById("subtotal").innerText = "RM" + subtotal;
    document.getElementById("total").innerText = "RM" + total;
}






