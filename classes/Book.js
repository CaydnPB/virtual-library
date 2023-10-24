const Media = require("./Media");

class Book extends Media {
    static highestRating(array) {
        let highestRatedBook = array[0];
        for (const book of array) {
            if (book.rating > highestRatedBook.rating) {
                highestRatedBook = book;
            }
        }
        return highestRatedBook;
    }
    constructor(title, genre, year, author, numPages, rating) {
        super(title, genre, year)
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }
    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
}

module.exports = Book;