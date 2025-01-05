let btn = document.getElementById('find');
let countryInp = document.getElementById('country');
let result = document.getElementById('result');

btn.addEventListener("click", async () => {
    let countryName = countryInp.value.trim(); // Trim extra spaces
    if (!countryName) {
        result.innerHTML = "<p>Please enter a country name.</p>";
        return;
    }
    
    let finalURL = `https://restcountries.com/v3.1/name/${countryName.toLowerCase()}?fullText=true`;
    
    try {
        let response = await fetch(finalURL);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error("Country not found");
        }

        let data = await response.json();

        // Display country information
        result.innerHTML = `
            <img src="${data[0].flags.png}" class="flagimg">
            <h2>${data[0].name.common.toUpperCase()}</h2>
            <p>Capital: ${data[0].capital[0]}</p>
            <p>Continent: ${data[0].continents[0]}</p>
            <p>Population: ${data[0].population.toLocaleString()}</p>
            <p>Currency: ${data[0].currencies[Object.keys(data[0].currencies)[0]].name} (${data[0].currencies[Object.keys(data[0].currencies)[0]].symbol})</p>
            <p>Common Languages: ${Object.values(data[0].languages).join(", ")}</p>
        `;
    } catch (error) {
        // Handle errors and display a user-friendly message
        result.innerHTML = `<p style="color: red;">Error: ${error.message}. Please check the country name and try again.</p>`;
    }
});

// let btn=document.getElementById('find');
// let countryInp=document.getElementById('country');
// let result=document.getElementById('result');
// btn.addEventListener("click", async ()=>{
//     let countryName=countryInp.value;
//    let finalURL=`https://restcountries.com/v3.1/name/${countryName.toLowerCase()}?fullText=true`;
//    let response= await fetch(finalURL);
//   let data= await response.json();
//   console.log(data);
//   console.log(data[0].name.common);
// console.log(data[0].flags.png);
//   console.log(data[0].capital[0]);
//   console.log(data[0].continents[0]);
//   //popul
// console.log(data[0].population);
// //currencies
//   console.log(Object.keys(data[0].currencies)[0]); //EUR
//   console.log(data[0].currencies[Object.keys(data[0].currencies)].name);// using EUR they find name of currency i.e Euro
//   console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);// same using EUR find symbol
//   //common language
// console.log(Object.keys(data[0].languages));
// // console.log(data[0].languages[Object.keys(data[0].languages)][0]);
// console.log(Object.values(data[0].languages).toString());

// result.innerHTML=`
// <img src="${data[0].flags.png}" class="flagimg">
// <h2>${countryName.toUpperCase()}</h2>
// <p>Capital : ${data[0].capital[0]}</p>
// <p>Continent : ${data[0].continents[0]}</p>
// <p>Population : ${data[0].population}</p>
// <p>Currency : ${data[0].currencies[Object.keys(data[0].currencies)].name}-${data[0].currencies[Object.keys(data[0].currencies)].symbol}</p>
// <p>Common Languages Spoken : ${Object.values(data[0].languages).toString()}</p>

// `;
// });
