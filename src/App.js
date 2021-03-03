import React from 'react';
import { connect } from 'react-redux';
import {userGet} from './redux/actions/login.actions'
// import { activateGeod, closeGeod } from './redux';

// App.js
export class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      username : ''
    }
    
    //this.updateInput = this.updateInput.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  updateInput(event){
    this.setState({username : event.target.value})
    }

    handleSubmit=()=>{
      console.log(this.props);
      this.props.userGet(this.state.username)
      }
     
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <h1>{this.props.geod.title || 'Hello World!'}</h1> */}
        <input type='text' name='name' value = {this.state.username} onChange={(event)=>{this.updateInput(event)}} />
        
          <button
            onClick={()=>this.handleSubmit()}
          >
            Click Me!
          </button>
          <div>{this.props.geod.username}</div>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  userGet

};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;