import logo from './logo.svg';
import './App.css';
import E1CompEstatico1 from './E1CompEstatico1';
import E2CompEstatico2  from './E2CompEstatico2';
import E3CompDinamico1 from './E3CompDinamico1';
import E5CompEventos from './E5CompEventos';
import E4CompDinamico2 from './E4CompDinamico2';
import E6CompEstados from './E6CompEstados';
import TareaTema12 from './TareaTema12';


function App() {

  const producto ={
    nombre:"horno",
    marca:"balay",
  }

  const coche ={
    nombre:"M2",
    marca:"BMW",
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <E1CompEstatico1/>

        <E2CompEstatico2/>

        <E3CompDinamico1 id='1' producto={producto}/>

        <E4CompDinamico2 id='1' coche={coche}/>
        <E4CompDinamico2 id='2' />

        <E5CompEventos/>

        <E6CompEstados/>

        <TareaTema12/>
        


      </header>
    </div>
  );
}

export default App;
