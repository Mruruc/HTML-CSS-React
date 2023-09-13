import './style/body.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Main from './component/main/Main';
import app from './style/app.css';

const App = () => {
  return (
    <div className='app'>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App
