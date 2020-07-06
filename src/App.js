import React from 'react'
import './App.css';
import axios from 'axios';
class App extends React.Component {
    state={ 
        advice: ''  
     };

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice= () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;
            this.setState({ advice })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render(){

        const { advice } = this.state;
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body ">
                    <h4 className="card-text">{'"'}{ advice  } {'"'}</h4>
                </div>
                <div className="card-footer bg-transparent  text-center ">
                    <button className="btn btn-success btn-sm" onClick= { this.fetchAdvice }>Get Advice</button>
                </div>
                </div>
                
            </div>
        )
    }
  
}

export default App;