import React, { Component} from 'react'



class BadRobot extends Component {


  blaFunction = (value) => {
    let arr = value.split("")
    let newArray = []

    for (let index = 0; index < arr.length; index++) {
  //     if(index === 0){
  //       newArray.push("b")
  //     }else if(index === 1){
  //      newArray.push("l") 
  //     }else if(index === 2){
  //       newArray.push("a")

  //   }else if(arr[index - 1] === "a"){
  //     newArray.push("b")
  //   }else if(arr[index - 1] === "l"){
  //     newArray.push("a")
  //   }else if(arr[index - 1] === "b"){
  //     newArray.push("l")
  // }

  if(index % 3 === 0){
    newArray.push("B")
  }else if(index % 3 === 1){
    newArray.push("L")
  }else if(index % 3 === 2){
    newArray.push("A")
  }
}
  return newArray
}
  
//7 8 13 14 19 20 22 23

render (){
return (
  <>
  <h1>Bad Robot:</h1> 
<p 
  onChange = { () => this.blaFunction(this.props.value) }>
  {this.blaFunction(this.props.value)}
  </p>
  
  </>
)
}
}

export default BadRobot;