window.onload = () => {
    init();
}

const init = async () => {
    const list = await countrysList(countries);
    console.log(list)
    const ul = await printList(list);
    const cars1 = await carsMap(cars);
    console.log(cars1)
    const cars2 = await carsList(cars1);
    const countrymap2 = await countryMap(countries2);
    const countryprint2 = await countryPrint(countrymap2);


}

//Part 1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countrysList = (countries) => {
    const list = countries.map(countrie => {
        return `<li>${countrie}</li>`
    }).join('');
    return list
}
const printList = (list) => {
    const ul = document.createElement('div');
    ul.className = 'list';
    ul.innerHTML += list;
    document.body.appendChild(ul);
}

//Part 2
const removeElement = document.querySelector('.fn-remove-me');
removeElement.remove();

//Part 3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const carsMap = (cars) => {
    const carsMapFinal = cars.map(car => {
        return `<li>${car}</li>`
    }).join('');
    return carsMapFinal
}

const carsList = (carsMapFinal) => {
    const ul = document.createElement('ul');
    const div = document.querySelector(`[data-function="printHere"]`);
    ul.className = 'cars';
    ul.innerHTML += carsMapFinal;
    div.appendChild(ul);

}

//Part 4

const countries2 = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const countryMap = (countries2) => {
    const countryMapFinal = countries2.map(country => {
        return `<div class=containerCountries2>
        <h4>${country.title}</h4>
        <img src=${country.imgUrl}>
        </div>`
    }).join('');

    return countryMapFinal
}
const countryPrint = (countryMapFinal) => {
    const div = document.querySelector(`[data-function="printHere"]`);
    div.innerHTML += countryMapFinal;
    document.div.appendChild(div);
}

//Part 5

const deletebutton = document.querySelectorAll(".containerCountries2");
const deletebtn = document.createElement("button");

deletebtn.textContent = "Delete";
deletebtn.addEventListener("click", () => deleteLast());

let deleteLast = () => {
    const last = deletebutton[deletebutton.length - 1];
    deletebutton[last].remove();

}

document.body.appendChild(deletebtn);