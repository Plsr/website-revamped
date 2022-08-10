import * as React from 'react'
import AuthorPhoto from './author-photo'

const AuthorCard = ({ withNote = true}) => {
  return (
    <div className="h-card" style={{ display: 'none' }}>
      <a className="p-name u-url" rel="me" href="https://chris-new-website.netlify.app/">Christian Poplawski</a>
      <AuthorPhoto />
      {withNote &&
        <p className="p-note">I am a FullStack Developer and Designer who knows his way around ReactJS, Ruby on Rails, JavaScript, HTML, CSS and UI Design. </p>
      }
    </div>
  )
}

export default AuthorCard
