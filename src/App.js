import './App.css';
import Contact from './Component/Contact/Contact';
import Header from './Component/Header/Header';
import Services from './Component/Services/Services';


function App() {

  return (
    <div className='min-h-screen' >
      <Header />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
