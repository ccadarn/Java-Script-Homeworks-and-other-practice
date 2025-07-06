/* Task: Create a Library Catalog

Create a JavaScript program that represents a simple library catalog using objects.

Create a Book object with properties like title, author, genre, and isAvailable (a boolean indicating if the book is available).
Create a Library object that holds an array of Book objects.
Implement functions within the Library object to:
Add a new book to the library catalog.
Remove a book from the library catalog.
Display all available books.
Update the availability of a book (e.g., set a book as borrowed or returned).
Search for a book by title or author and display its information. */

// Your Attempt:

// Missing '=' to assign an object to 'book'
const book {
    title:  '',
    author: '',
    genere: '', // Typo: 'genre' misspelled
    isAvailable: true
}

// Missing '=' to assign an object to 'library'
const library {
    book: [], // Incorrect property name; should be 'books'
    addBook(title, author, genere) { // Typo: 'genere' should be 'genre'
        return 
        book[title] = title, // Incorrect syntax for adding properties to an object
        book[author] = author,
        book[genere] = genere, 
        isAvailable = true // Incorrect usage; should be 'this.isAvailable = true' and 'this.books.push({...})'
    }

    removeBook(book) {
        delete book // Incorrect; 'delete' is used to delete object properties, not the object itself
    }

    allBooks() {
        for (let key in book) { // Incorrect; should iterate through 'this.books'
            return key, book.key; // Incorrect; 'return' exits the loop on the first iteration
        }
    }

    bookAvailability(){ // Missing parameter; should take 'title' as a parameter
        if (book[isAvailable] === true) { // Incorrect usage; should be 'this.books.find(book => book.title === title)'
            return book[isAvailable] = false; // Incorrect; changing availability for all books, not a specific one
        }
        return book[isAvailable] = true; // Same issue as above
    }

    bookSearch(title, author) {
        (book[title] === title) || (book[author] === author) ? return book; // Incorrect; incorrect conditional and 'return' statement
    } 
}

// Corrected Version with Comments:

const book = {
    title: '',
    author: '',
    genre: '', // Corrected 'genere' to 'genre'
    isAvailable: true
};

const library = {
    books: [], // Corrected property name to 'books'

    addBook(title, author, genre) {
        // Removed 'return' statement and corrected object addition
        this.books.push({
            title: title,
            author: author,
            genre: genre, // Corrected 'genere' to 'genre'
            isAvailable: true // Corrected syntax for assigning 'isAvailable'
        });
    },

    removeBook(title) {
        // Corrected removal logic using 'filter'
        this.books = this.books.filter(book => book.title !== title);
    },

    allBooks() {
        // Removed incorrect 'for...in' loop and directly return 'this.books'
        return this.books;
    },

    bookAvailability(title) {
        // Corrected function logic to toggle availability for a specific book
        const foundBook = this.books.find(book => book.title === title);
        if (foundBook) {
            foundBook.isAvailable = !foundBook.isAvailable;
            return foundBook.isAvailable;
        }
        return "Book not found";
    },

    bookSearch(title, author) {
        // Corrected the search logic to filter books based on title or author
        return this.books.filter(book => book.title === title || book.author === author);
    }
};

// Example usage:
library.addBook('The Hobbit', 'J.R.R. Tolkien', 'Fantasy');
library.addBook('1984', 'George Orwell', 'Dystopian');
console.log(library.allBooks());
library.removeBook('The Hobbit');
console.log(library.allBooks());
console.log(library.bookAvailability('1984'));
console.log(library.bookSearch('1984', 'George Orwell'));


//------------------------------------------------------------------------------------------------------------------
/* Task: Create a Music Playlist Manager

Develop a JavaScript program that manages a music playlist using objects.

Create a Song object with properties like title, artist, duration, and isPlaying (a boolean indicating if the song is currently playing).
Create a Playlist object that holds an array of Song objects.
Implement functions within the Playlist object to:
Add a new song to the playlist.
Remove a song from the playlist.
Play a specific song.
Stop the currently playing song.
Display all songs in the playlist along with their details. */

const Song = {
    title: '',
    artist: '',
    duration: '',
    isPlaying: false
};

const Playlist = {
    songs: [],

    addSong(title, artist, duration) {
        // Pushing a new song object with initialized isPlaying property to the songs array
        this.songs.push({
            title: title,
            artist: artist,
            duration: duration,
            isPlaying: false // Initializing isPlaying property when adding a song
        });
    },

    removeSong(title) {
        // Filtering out the song that matches the provided title
        this.songs = this.songs.filter(song => song.title !== title); // Fixed filtering logic
    },

    playSong(title) {
        const track = this.songs.find(song => song.title === title);
        if (track && !track.isPlaying) { // Checking if the song is found and not already playing
            track.isPlaying = true;
            return `${title} is now playing`;
        } else {
            return 'Song not found, or is already playing';
        }
    },

    stopSong() {
        const track = this.songs.find(song => song.isPlaying); // Finding the currently playing song
        if (track) {
            track.isPlaying = false;
            return `${track.title} has stopped playing`;
        } else {
            return 'No song is currently playing';
        }
    },

    displayPlaylist() {
        return this.songs;
    }
};

// Usage example:
Playlist.addSong('Song Title', 'Artist Name', '3:45');
console.log(Playlist.displayPlaylist());
console.log(Playlist.playSong('Song Title'));
console.log(Playlist.stopSong());
console.log(Playlist.removeSong('Song Title'));

  //--------------------------------------------------------------------------
  /*
1) Create an empty JavaScript object to represent the address book.
2) Implement a function to add a new contact to the address book. 
The function should take parameters for name, phone number, and address, and create a new object representing the contact.
3) Implement a function to display all contacts in the address book.
4) Optionally, you can add functionality to search for a contact by name, update a contact's information, or delete a contact.

This task will help you practice creating and manipulating JavaScript objects while also incorporating functions to interact with these objects. 
You can use the browser console or an online JavaScript editor to run and test your code as you build your address book.*/

const adressBook = {
    name: '',
    phoneNumber: '',
    adress: ''
}

const newContact = (name, phoneNumber, adress) => {
    return {
    adressBook.name = name,
    adressBook.phoneNumber = phoneNumber,
    adressBook.adress = adress
    }
}

const allContacts = () => {
    return adressBook
}

//---------CORRECT ANSWER
const addressBook = []; // Empty array to store contacts

const addContact = (name, phoneNumber, address) => {
    const newContact = {
        name: name,
        phoneNumber: phoneNumber,
        address: address
    };
    addressBook.push(newContact); // Add the new contact object to the addressBook array
};

const displayAllContacts = () => {
    return addressBook; // Returns the array containing all contacts
};

// Example usage:
addContact('John Doe', '1234567890', '123 Main St');
addContact('Jane Smith', '9876543210', '456 Oak Ave');

console.log(displayAllContacts()); // Output all contacts in the address book

//4) Optionally, you can add functionality to search for a contact by name, update a contact's information, or delete a contact.

const searchByName = (name) => {
    const contact = adressBook.find(name => adressBook.name === name)
    if (contact) {
        return contact;
    } else
    return `There is no ${name} in this adress book`;
}


