import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'


function HeroSection() {
  return (
      <>

      <div>
        <img src="/images/logos/logo.svg" alt="logo" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <Link to="/page-2/">Go to page 2</Link> <br />
    </div>
    </>
  )
   
}

export default HeroSection