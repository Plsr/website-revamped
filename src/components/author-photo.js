import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const AuthorPhoto = () => {
  return (
    <StaticImage
      alt="Portrait of the author"
      src="../images/portrait.png"
      imgClassName='u-photo'
    />
  )
}

export default AuthorPhoto
