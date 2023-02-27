import { gql } from '@apollo/client';
 export const ADD_BOOK = gql`
 mutation addBook($bookText: String!, $bookAuthor: String!) {
    addBook(bookText: $bookText, bookAuthor: $bookAuthor){
        _id
        bookText
        bookAuthor
        createdAt
        comments{
            _id
            commentText
        }
    }
 }
 `;