/*
    Buscando e contando dados em Arrays

        Baseado no Array De Livros por Categoria abaixo, faça os seguintes desafios

         - Contar o número de categorias e o número de livros em cada categoria
         - Contar o número de autores
         - Mostrar Livros do autor Augusto Cury
         - Transformar a função acima em uma que irá receber o nome do autor e devolver os livros desse autor.
*/
//Sistema de biblioteca
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos de mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
        {
            title: "Você é Insubstituível",
            author: "Augusto Cury",
        },
        {
            title: "Ansiedade - Como enfrentar o mal do século",
            author: "Augusto Cury",
        },
        {
            title: "Os 7 hábitos das pessoas altamente eficazes",
            author: "Stephen R. Covey",
        }

        ],
    },
];

// 1Q
const totalCategories = booksByCategory.length
console.log(totalCategories);

// 2Q
for(let category of booksByCategory) {
    console.log('Total de livros da categoria:', category.category)
    console.log(category.books.length)

}

function countAuthors(){
    let authors = [];
        for(let category of booksByCategory){
            for(let book of category.books){
                if(authors.indexOf(book.author)== -1){
                    authors.push(book.author)
                }
            }
        }

        console.log("Total de autores:" , authors.length)
}

countAuthors();

function booksOfAuthor(author){
    let books = [];
        for(let category of booksByCategory){
            for(let book of category.books){
                if(book.author === author){
                    book.push(book.title)
                }
            }
        }

        console.log(`Livros do Autor ${author}: , ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury');
