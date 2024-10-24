document.getElementById("main-action-button").onclick = () => {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

const links = document.querySelectorAll(".menu-item > a");
links.forEach((link) => {
    link.onclick = () => {
        document.getElementById(link.getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
});

const buttons = document.querySelectorAll(".products-item .button");
buttons.forEach((button) => {
    button.onclick = () => {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
});

const prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = (e) => {
    const currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;
    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 90;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) +  " " + newCurrency;
    }
};

const product = document.getElementById("product");
const name = document.getElementById("name");
const phone = document.getElementById("phone");

document.getElementById("order-action").onclick = () => {
    let hasError = false;

    [product, name, phone].forEach(item => {
        if (!item.value) {
            item.style.borderColor = "red";
            hasError = true;
        } else {
            item.style.borderColor = "";
        }
    });

    if (!hasError) {
        [product, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!")
    }
}