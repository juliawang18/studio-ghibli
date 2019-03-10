import React, { Component } from 'react';
import title from './Assests/title.jpg';
import castle from './Assests/castle.jpg';
import fireflies from './Assests/fireflies.jpg';
import totoro from './Assests/totoro.jpg';
import kikis from './Assests/kikis.jpg';
import yesterday from './Assests/yesterday.jpg';
import rosso from './Assests/rosso.jpg';
import pompoko from './Assests/pompoko.jpg';
import whisper from './Assests/whisper.jpg';
import monoke from './Assests/monoke.jpg';
import yamadas from './Assests/yamadas.jpg';
import spiritedaway from './Assests/spiritedaway.jpg';
import catreturns from './Assests/catreturns.jpg';
import howls from './Assests/howls.jpg';
import earthsea from './Assests/earthsea.jpg';
import ponyo from './Assests/ponyo.jpg';
import arrietty from './Assests/arrietty.jpg';
import poppy from './Assests/poppy.jpg';
import thewindrises from './Assests/thewindrises.jpg';
import kaguya from './Assests/kaguya.jpg';
import whenmarnie from './Assests/whenmarnie.jpg';
import './App.css';
import Film from './Film';

const imgArray = [castle, fireflies, totoro, kikis, yesterday, rosso, pompoko, whisper, monoke, 
  yamadas, spiritedaway, catreturns, howls, earthsea, ponyo, arrietty, poppy, thewindrises, kaguya, whenmarnie];

let titles = [];
let dates = [];
let descriptions = [];
let films = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didLoad: false
    };
  }

  async loadInfo() {
    const response = await fetch(`https://ghibliapi.herokuapp.com/films`);
    const json = await response.json();
    let i;
    for (i = 0; i < 20; i++) {
      titles[i]= (json[i].title);
      dates[i]=(json[i].release_date);
      descriptions[i]=(json[i].description);
    }
    this.setState({
      didLoad: true
    })
  }

  componentDidMount() {
    this.loadInfo();
  }

  addFilm() {
    let i;
    for (i = 0; i < 20; i++){
       films[i] = [titles[i], dates[i], descriptions[i]];
    }
  }

  render() {
    return (
      <div className="ghibli-container">
        <style>
        @import url('https://fonts.googleapis.com/css?family=Overpass');
        </style>
        <div className = "film title">
          <img className="g-title" alt="" src={title}/>
        </div>
        <div className = "film list">
          {this.addFilm()}
          <ul>
            {films.map((film, index) => (
              <Film
                pic = {imgArray[index]}
                title = {films[index][0]}
                date = {films[index][1]}
                description = {films[index][2]}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
