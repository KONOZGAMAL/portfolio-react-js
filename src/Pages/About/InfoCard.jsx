import React from 'react'
import './About.module.css'
export default function InfoCard({items}) {
  return (
     <div className="info_card">
          <h2 className="title">{items.title}</h2>
          <h2 className="details">
          {items.details}
          </h2>

        </div>
  )
}
