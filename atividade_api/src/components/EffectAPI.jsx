import { useState, useEffect } from 'react';
import './EffectAPI.css';

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [API, setAPI] = useState(false);

  useEffect(() => {
    if (!API) return;

    const fetchUsuarios = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
        setAPI(false);
      }
    };

    fetchUsuarios();
  }, [API]);

  return (
    <div className="container">
      <h1>Lista de Usuários</h1>


      {loading && <p>Carregando...</p>}

      <div className="tabelas">
        <ul className="tabela nome">
          <h2>Nomes</h2>
          {usuarios.map(usuario => (
            <li key={usuario.id}>{usuario.name}</li>
          ))}
          <button onClick={() => setAPI(true)}>Buscar Usuários</button>
        </ul>

        <ul className="tabela username">
          <h2>Usernames</h2>
          {usuarios.map(usuario => (
            <li key={usuario.id}>{usuario.username}</li>
          ))}
          <button onClick={() => setAPI(true)}>Buscar Usuários</button>
        </ul>

        <ul className="tabela cidade">
          <h2>Cidades</h2>
          {usuarios.map(usuario => (
            <li key={usuario.id}>{usuario.address.city}</li>
          ))}
          <button onClick={() => setAPI(true)}>Buscar Usuários</button>
        </ul>
      </div>
    </div>
  );
}
