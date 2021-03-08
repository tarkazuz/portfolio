import './App.scss';
import MyRouter from './router/MyRouter';

document.body.classList.add('has-navbar-fixed-top');

function App() {
  return (
    <div className="App">
      <MyRouter/>
    </div>
  );
}

export default App;
