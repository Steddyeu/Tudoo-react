import './App.css';
import React from 'react';
import Header from './components/Header';
import Form from './components/Form';


class App extends React.Component {
  render(){
  return (
    <div className="App">
<Header />
<Form />
    </div>
  );
}
}

export default App;
