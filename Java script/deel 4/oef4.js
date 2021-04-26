

/* Eerst array aanmaken */
let array = [
    {
        title: "The theory of everything",
        auteur: "Stephen King",
        gelezen: "Ja"
    },
    {title: "12 rules for life",auteur: "Jordan Peterson",gelezen: "Nee"}
];

/* ul --> buiten de list.*/
let ul = document.createElement('ul');
array.forEach(book =>{
    let li = document.createElement('li');
    let licontent = `titel: ${book.title}, auteur: ${book.auteur}, ${book.gelezen}`   // string
    li.innerHTML = '<p>' + licontent + '</p>'; // maakt hier een p aan.
    ul.appendChild(li);
})

document.body.appendChild(ul); // weergeeft het op de pagina/ google.


//dit komt allemaal langs elkaar te staan, maar wil je het onder elkaar dan nieuwe P aanmaken.