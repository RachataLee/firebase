import React, { Component } from 'react';
import db from './firestore'
import _ from 'lodash'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        let self = this;
        db.collection('counter').doc(this.props.match.params.id).get().then( snapshot => {
        self.setState(snapshot.data());
        })
    }
  render() {
      console.log(this.state.value)
    return (
      <div>
       {this.props.match.params.id}
       <br/>    
        {this.state.name}
        <br/>
        {this.state.value}
      </div>
    );
  }
}

export default Counter;
