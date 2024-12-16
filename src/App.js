import React from "react";
import './App.css';

function Paznokcie({ imgSrc, nazwa, odcien, cena, kolekcja }) {

    return (
        <div className="paznokcie-section">
            <div className="left">
                <img src={imgSrc} alt={nazwa} className="paznokcie-image"/>
            </div>
          <div className="wszystko">
            <div className="top">
                <h2>{nazwa}</h2>
            </div>
            <div className="right">
                <p>odcień: {odcien}</p>
                <p className="cena">Cena {cena}</p>
                <p className="kolekcja">{kolekcja}</p>
            </div>
            <div className="bottom">
                <button className="dodaj-btn">Dodaj do koszyka</button>
            </div>
          </div>
        </div>
    );
}

function App() {
    return (
        <div className="ogolny">
            <div className="App">
                <h1>grafiki i inspiracja ze strony: NEONAIL.PL</h1>
            Wybierz odcień
                <div className="kolory">
            <button>
                <img src="fioletowy.jpg"/>
            </button>
            <button>
                <img src="czerwony.jpg"/>
            </button>
            <button>
                <img src="zloty.jpg"/>
            </button>
            <button>
                <img src="wszystkie.jpg"/>
            </button>
                </div>

            <Paznokcie
                imgSrc="f1.jpg"
                nazwa="No Risk No story"
                odcien="fioletowy"
                cena="27,29 zł"
                kolekcja="Kolekcja jesienna"
            />
            <Paznokcie
                imgSrc="f2.jpg"
                nazwa="Midnight Love Story"
                odcien="fioletowy"
                cena="27,99 zł"
                kolekcja="XMAS Trend"
            />
                <Paznokcie
                    imgSrc="c1.jpg"
                    nazwa="Alizee"
                    odcien="czerwony"
                    cena="27,29 zł"
                    kolekcja="Oszczędzasz 31%"
                />
                <Paznokcie
                    imgSrc="c2.jpg"
                    nazwa="Mysterious Tale"
                    odcien="czerwony"
                    cena="32,99 zł"
                    kolekcja="GET THE LOOK"
                />
                <Paznokcie
                    imgSrc="z1.jpg"
                    nazwa="Top Glow Gold"
                    odcien="złoty"
                    cena="29,99 zł"
                    kolekcja="XMAS Trend"
                />
                <Paznokcie
                    imgSrc="z2.jpg"
                    nazwa="Sparkling Kiss"
                    odcien="złoty"
                    cena="27,99 zł"
                    kolekcja="XMAS Trend"
                />
        </div>
      </div>
  );
}

export default App;
