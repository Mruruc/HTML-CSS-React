
import '../../style/book-list.css';

const Book = (props) => {
  return (
    <article className='book'>

      <span className='book-number'>{props.number}</span>

      <img src={props.img} className='book-img' />

     <h2 className='book-title'>{props.title}</h2><h4 
     
      style={{ color: 'green' }}>{props.author}</h4>
    </article>
  );
};

export default Book;
