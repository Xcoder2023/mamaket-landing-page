
import './App.css';
import Banner from './components/Banner';
import General from './components/app-store-page/app-child-page/General';
import Cart from './components/caert-page/Cart';
import Flags from './components/country-flag-page/Flags';
import Products from './components/products-page/Products';
import Question from './components/question-page/Question';

function App() {
  return (
    <div className="App">
      <Banner />
      <Cart />
      <Flags />
      <Products />
      <Question />
      <General />
    </div>
  );
}

export default App;
