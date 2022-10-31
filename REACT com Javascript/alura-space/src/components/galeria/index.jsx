import React from 'react'
import Tags from '../tags'
import styles from './Galeria.module.scss';
import fotos from './fotos.json';

export default function Galeria() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags/>
        <ul className={styles.galeria__lista}>
          {fotos.map((foto) => (
            <img key={foto.id} src={foto.imagem} alt={foto.titulo} />
          ))}
        </ul>
    </section>
  )
}
