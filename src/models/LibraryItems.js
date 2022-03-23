
function LibraryItemDecorator(media){
    // this is the parent class that all books,movies,etc extend

    // list of possible statuses (enum)
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out',
        PURCHASED: 'purchased', NOT_PURCHASED: 'not-purchased', IN_BAG: 'in-bag'}

    // set the default status
    media.status = STATUSES.CHECKED_IN;
    media.purchased = STATUSES.NOT_PURCHASED;

    // methods
    media.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN && this.purchased === STATUSES.NOT_PURCHASED;
    }

    media.inBag = function(){
        this.status = STATUSES.IN_BAG;
    }

    //  option 1
    // media.remove = function(){
    //     return removeMethod(this);
    // }

    // option 2
    // media.remove = removeMethod;

    // media.remove = function(){
    //     return removeMethod();
    // }

    return media;
}

// this is a constructor function
// we use TitleCase to represent classes/prototypes/constructor functions
function Book(title, pages){
    this.title = title;
    this.pages = pages;
}

// or ES6 syntactic sugar (these are not really classes in the traditional sense)
class Movie {
    title = '';
    runtime = 0;

    constructor(title, runtime){
        this.title = title;
        this.runtime = runtime;
    }
}

class Album {
    title = '';
    artist = '';
    trackCount = 0;
    constructor(title, artist, trackCount) {
        this.title = title;
        this.artist = artist;
        this.trackCount = trackCount;
    }
}

export { LibraryItemDecorator, Album, Book, Movie };
