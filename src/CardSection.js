import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-danger ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
           <Card cardTitle="I" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="You will"/>
           <Card cardTitle="Am" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="And"/>
           <Card cardTitle="Devil of my life" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="You Can"/>
        </div>
      </div>
    </section>
  )
}
export default CardSection