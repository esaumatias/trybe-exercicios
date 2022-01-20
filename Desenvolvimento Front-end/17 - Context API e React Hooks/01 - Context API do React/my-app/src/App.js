import logo from './logo.svg';
import './App.css';
import MyContext from './MyContext';
import MyOtherComponent from './MyOtherComponent';

function App() {
  const value = {
    valor: 10,
  }
  return (
    <div className="App">
      <MyContext.Provider value={ value }>
          <MyOtherComponent />
      </MyContext.Provider>
    </div>
  );
}



export default App;
