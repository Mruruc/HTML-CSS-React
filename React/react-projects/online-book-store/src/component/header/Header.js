import '../../style/header.css';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className='header'>
      <div className='page-name'>
        Online Book Store
      </div>

      <div className='search-bar'>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header
