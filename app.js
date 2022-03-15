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
const countrystr = country =>{
    const {area,name, flags} = country;
    return `
    <div class="countries">
        <h1>${name.common}</h1>
        <p>Area:${area}</p>
        <img width='200' src="${flags.png}">
    </div>
    `
}
/* const countrystr = country =>{
    return `
    <div class="countries">
        <h1>${country.name.common}</h1>
        <img width='200' src="${country.flags.png}">
    </div>
    `
} */
loadCountry();