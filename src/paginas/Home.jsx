import React from 'react'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">J Notícias</h2>
      </div>
      <ListaCategorias />
      <ListaPost url={'/posts'} />
    </main>
    
  )
}

export default Home
