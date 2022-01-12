class Song {

    constructor(title, autor, year) {
        this._title = title;
        this._autor = autor;
        this._year = year;
    }

    get title() {
        return "Song:" + this._title;
    }

    get autor() {
        return "Song:" + this._autor;
    }

    get year() {
        return "Song:" + this._year;
    }
}

class Mixer {

    constructor(title, autor, year) {
        this._title = title;
        this._autor = autor;
        this._year = year;
    }

    get title() {
        return "Song:" + this._title;
    }

    get autor() {
        return "Song:" + this._autor;
    }

    get year() {
        return "Song:" + this._year;
    }
}




const musicSet = [{
    name: "song-name",
    file: "music.mp3",
    autor: "autor",
    year: "year",
}]