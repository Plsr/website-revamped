import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const HCard = () => {
  return (
    <div class="h-card" style={{ display: 'none' }}>
      <a class="p-name u-url" rel="me" href="https://chris-new-website.netlify.app/">Christian Poplawski</a>
      <StaticImage
        alt="portrait of the author"
        src="../images/portrait.png"
        imgClassName='u-photo'
      />
      <p class="p-note">I am a FullStack Developer and Designer who knows his way around ReactJS, Ruby on Rails, JavaScript, HTML, CSS and UI Design. </p>
    </div>
  )
}

export default HCard
