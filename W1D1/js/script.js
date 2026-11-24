// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

const twitter = document.querySelector("aside div:last-child > ol li:nth-child(2)")
twitter.remove()

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

const links = document.querySelectorAll(".stretched-link, .jumbotron a")

function deleteParentFromReadMore(){
    for (const link of links) {
        link.addEventListener("click", () =>{
            link.closest(".jumbotron, .no-gutters").remove()
        })
    }
}
deleteParentFromReadMore()

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

const authors = document.querySelectorAll(".blog-post-meta a")

function authorAlert(){
    for( const author of authors ){
        author.addEventListener("mouseover", ()=>{
            alert(`L'autore del blog è ${author.innerText}`)
        })
    }
}

authorAlert()
