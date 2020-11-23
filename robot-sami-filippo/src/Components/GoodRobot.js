import React, { Component} from 'react'



class GoodRobot extends Component {
  
render (){
return (
  <>
  <h1>Good Robot: I hear you saying 
  "{this.props.value}" is that correct?
  </h1>
  </>
)
}
}

export default GoodRobot;