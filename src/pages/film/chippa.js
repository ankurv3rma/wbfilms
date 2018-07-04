import React from 'react'
import Link from 'gatsby-link'

import Header from '../../components/header';
import Footer from '../../components/footer';
import Section from '../../components/section';
import Gallery from '../../components/gallery';

import films from '../../data/data';

import linkArrow from '../../images/link-arrow.png';

class FilmPage extends React.PureComponent {

  render() {
    const film = films.chippa;
    return (
      <div>
      <Header />
      <div className="home">
        <div id="cover-section">
          <img className="media" src={film.coverImage} alt="cover"/>
          <div className="cover-text">
            <h2>{film.title}</h2>
          </div>
        </div>
        <Section title="DIRECTOR">
          <div className="director-section">
            <div className="director-text">
              <h5>
                <strong>{film.director.displayName} </strong>
                {film.director.text.split('\n').map((item, key) => {
                  return <span key={key}>{item}<br/></span>
                })}
              </h5>
            </div>
            <div className="director-image">
              <img src={film.director.image} alt={film.director.name} />
            </div>
          </div>
        </Section>
        <Section title="SYNOPSIS">
          <div className="synopsis-section">
            <div className="synopsis-text">
              <h5>{film.synopsis.text}</h5>
              <a className="synopsis-link" href={film.facebook} target="_blank">
                <img src={linkArrow} alt="link" />
                <p>FACEBOOK</p>
              </a>
              <a className="synopsis-link" href={film.website} target="_blank">
                <img src={linkArrow} alt="link" />
                <p>WEBSITE</p>
              </a>
            </div>
            <div className="synopsis-image">
              <img src={film.synopsis.image} alt="Synopsis" />
            </div>
          </div>
        </Section>
        <Section title="CAST">
          <div className="cast-container">
            <div className="cast-list">
              { film.cast.map((item, key) => (
                <div key={key} className="cast">
                  <img src={item.image} alt={item.name} />
                  <h6>{item.name}</h6>
                </div>
              ))}
              <div className="cast"></div>
            </div>
          </div>
        </Section>
        <div className="photo-container">
          <div className="poster">
            <h3>Film Poster</h3>
            <img src={film.poster} alt="poster" />
          </div>
          <div className="photo-gallery">
            <Gallery images={film.gallery} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}


export default FilmPage