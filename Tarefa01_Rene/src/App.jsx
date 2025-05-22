import { useState } from 'react';
import Galery from './components/Galery';
import Details from './components/Details';
import ThemeToggle from './components/ThemeToggle';
import './light.css';

import GingPhoto from './assets/Images/ging.jpg'
import GonPhoto from './assets/Images/gon.jpg'
import HisokaPhoto from './assets/Images/hisoka.jpg'
import KilluaPhoto from './assets/Images/killua.jpg'
import KurapikaPhoto from './assets/Images/kurapika.jpg'
import LeorioPhoto from './assets/Images/leorio.jpg'

function App() {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };
    const cards = [
        {
            image: GonPhoto,
            name: 'Gon Freecss',
            nen: 'Reforço',
            idade: 12,
            altura: '154 cm'
        },
        {
            image: KilluaPhoto,
            name: 'Killua Zoldyck',
            nen: 'Transformação',
            idade: 12,
            altura: '158 cm'
        },
        {
            image: KurapikaPhoto,
            name: 'Kurapika',
            nen: 'Especialização',
            idade: 17,
            altura: '171 cm'
        },
        {
            image: LeorioPhoto,
            name: 'Leorio Paradinight',
            nen: 'Emissão',
            idade: 19,
            altura: '193 cm'
        },
        {
            image: HisokaPhoto,
            name: 'Hisoka Morow',
            nen: 'Transmutação',
            idade: 28,
            altura: '187 cm'
        },
        {
            image: GingPhoto,
            name: 'Ging Freecss',
            nen: 'Emissão',
            idade: 32,
            altura: 'Unknown'
        }
    ];


  return (
    <div className={theme}>
      <ThemeToggle theme={theme} onToggle={toggleTheme} /> {/* botão */}
      <div style={{ display: 'flex', height: '100vh', width: '120rem', alignItems: 'center' }}>
        <Galery cards={cards} onCardClick={setSelectedCharacter} />
        <div style={{ marginLeft: '32px'}}>
          {selectedCharacter ? (
            <Details character={selectedCharacter} />
          ) : (
            <p>Selecione um personagem para ver os detalhes</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
