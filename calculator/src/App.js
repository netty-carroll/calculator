import React, {Component} from 'react';
import './App.css';
import Keys from './components/keys'
import Result from './components/result'

class App extends Component {
  constructor(){
    super();
    this.state={
      result:""
    }
  }
  onClick = button=>{
    if(button==="="){
      this.calculate()
    }
    else if (button ==="clear"){
      this.reset()
    }
  else{
    this.setState({
      result:this.state.result + button
    })
  }
};
  calculate = ()=>{
    try{
      this.setState({
        result:(eval(this.state.result) ||"") + ""
      })
    } catch (e) {
      this.setState({
        result:"error"
      })
    }
  }


  reset=()=>{
    this.setState({
      result:""
    })
  }

  render() 
  {
    return(
      <div>
        <div className="calculator">
          <h1>calculator</h1>
          <Result result={this.state.result}/>
          <Keys onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
