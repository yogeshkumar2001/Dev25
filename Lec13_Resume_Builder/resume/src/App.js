import firebaseApp from "./firebase/firebaseConfig";

import React, { Component } from 'react';
class App extends Component {
  state = {}

  componentDidMount() {
    // API call
    // get all documents through firebase
    // firebaseApp.firestore().collection("resumes").get().then( allDocs =>{
    //   allDocs.forEach( doc =>{
    //     console.log(doc.id);
    //     console.log(doc.data());
    //   })
    // })
    //

    //get a docuemnt through firebase
    firebaseApp.db.collection("resumes").doc("LO6yEpadNSbv9E6xCBWg").get().then(obj => {
      console.log(obj.data())
    })
  }
  addData = () => {

    // firebaseApp.db.collection("resumes").doc("LO6yEpadNSbv9E6xCBWg").update({
    //   skin : "2"
    // }).then(()=>{
    //   console.log("skin set successfully!!!")
    // })
    firebaseApp.db.collection("resumes").doc("LO6yEpadNSbv9E6xCBWg").update({
        contactDetails : {
          name : "Yuvi",
          phone : "9876512345",
          email: "yogesh@test.com"
        }
      }).then(()=>{
        console.log("skin set successfully!!!")
      })
  }
  render() {
    return (<button onClick={this.addData}>Add data</button>);
  }
}

export default App;
