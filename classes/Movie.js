const Media = require("./Media");

class Movie extends Media {
    static longestMovie(array) {
        let longestMovieDuration = array[0];
        for (const movie of array) {
            if (movie.duration > longestMovieDuration.duration) {
                longestMovieDuration = movie;
            }
        }
        return longestMovieDuration;
    }
    constructor(title, genre, year, director, duration, rating) {
        super(title, genre, year)
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }
    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
}

module.exports = Movie;