const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondtEl = document.getElementById("currency-second");
const worthSecondtEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");


updateRate()


function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/99b221ad136cd5836a3c87ff/latest/${currencyFirstEl.value}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            const rate = data.conversion_rates[currencySecondtEl.value];
            console.log(rate);

            // Update the DOM to display the current exchange rate
            exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondtEl.value}`;

            worthSecondtEl.value = (worthFirstEl.value * rate).toFixed(2)

        }
        );
}


// Add event listeners to re-calculate when user changes either currency or amount
currencyFirstEl.addEventListener("change", updateRate);
currencySecondtEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);

