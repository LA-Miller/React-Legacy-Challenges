import React, { Component } from "react";

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogUrl: '',
            dog: {},
        }
    }

    fetchDogImage() {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            this.setState({
                dog: data,
                dogUrl: data.message
            })
        })
        .catch(error => console.log(error));
    }

  render() {
    return (
    <div className="mainDiv">
        <img src={this.state.dogUrl} alt="dog" />
        <button onClick={() => this.fetchDogImage()}>Click to see a dog!</button>
    </div>
    )
  }
}
