const loadCountry = () =>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => showCountry(data))
};
const showCountry = country =>{
    const countryHTML = country.map(country=>countrystr(country));
    countryHTML.join(' ')
    // console.log(countryHTML);
    document.getElementById('countries').innerHTML=countryHTML.join(' ');
}
// Option 3
const countrystr = ({area,name, flags, region}) =>{
    return `
    <div class="countries">
        <h1>${name.common}</h1>
        <p>Area: ${area}</p>
        <p>Region: ${region}</p>
        <img width='200' src="${flags.png}">
    </div>
    `
}
// Option 2
/* const countrystr = country =>{
    const {area,name, flags} = country;
    return `
    <div class="countries">
        <h1>${name.common}</h1>
        <p>Area:${area}</p>
        <img width='200' src="${flags.png}">
    </div>
    `
} */

// Option :1
/* const countrystr = country =>{
    return `
    <div class="countries">
        <h1>${country.name.common}</h1>
        <img width='200' src="${country.flags.png}">
    </div>
    `
} */
loadCountry();