import React from 'react'
import { rooms } from '../data/rooms.js'
import './Servicios.css'

export default function Servicios() {
  return (
    <section>
      <h2>Servicios / Habitaciones</h2>
      <div className="grid">
        {rooms.map(room => (
          <article className="card" key={room.id}>
            <img src={room.image} alt={room.name} className="card-img" />
            <h3>{room.name}</h3>
            <p className="card-desc">{room.description}</p>
            <div className="card-footer">
              <span className="badge">ARS {room.price.toLocaleString('es-AR')}</span>
              <button type="button" className="card-btn" onClick={() => alert(`Reservar: ${room.name}`)}>
                Reservar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
