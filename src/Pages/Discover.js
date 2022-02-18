import React, { useEffect, useState } from 'react';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';

const Discover = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://redux-book-shelf.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data.data))
    }, []);
    console.log(books);
    return (
        <>
            <PageLayout>
                {
                    books.map(book => <Book key={book._id} book={book} />)
                }
            </PageLayout>
        </>
    );
};

export default Discover;