import '../../style/book-list.css';
import Book from './Book';
import list from './books';




function findBook(){
  const bookId = parseInt(document.getElementById('bookId').value);

 const book = list.filter((element) => {
   if (element.id === bookId) {
     return element;
   }
 });  
 console.log(book); 
}

function findBook2(id){
 return list.find(book=> book.id===id);
}


const BookList = () => {
  return (
    <div>
      <div>
        <input type='number' placeholder='Enter The Book ID' id='bookId' />{' '}
        <br />
        <input type='submit' onClick={findBook} />
      </div>

      <section className='book-list'>
        {list.map((book, index) => (
          <Book
            number={index + 1}
            img={book.img}
            title={book.title}
            author={book.author}
            key={book.id}
          />
        ))}
      </section>
    </div>
  );
};

export default BookList;
