import React, { useEffect, useState } from "react";

const Main = () => {
  const [searchResults, setSearchResults] = useState([]);

  const fetchAlbum = async () => {
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=radwimps`
      );

      try {
        if (resp.ok) {
          const data = await resp.json();
          setSearchResults(data.data || []);
        } else {
          alert("Qualcosa è andato storto nella richiesta");
        }
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []); // Assicurati di includere tutte le dipendenze necessarie nel secondo argomento di useEffect

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="searchResults">
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {searchResults.map((result) => (
                <div key={result.id} className="col mb-4">
                  <img
                    src={result.album.cover_medium}
                    alt={result.album.title}
                    className="img-fluid rounded"
                  />
                  <p>{result.album.title}</p>
                  <p>{result.artist.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
