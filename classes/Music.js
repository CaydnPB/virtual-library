const Media = require("./Media");

class Music extends Media {
    static shortestAlbum(array) {
        let shortestAlbumLength = array[0];
        for (const current of array) {
            if (current.length < shortestAlbumLength.length) {
                shortestAlbumLength = current;
            }
        }
        return shortestAlbumLength;
    }
    constructor(title, genre, year, artist, length) {
        super(title, genre, year)
        this.artist = artist;
        this.length = length;
    }
    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }
}

module.exports = Music;