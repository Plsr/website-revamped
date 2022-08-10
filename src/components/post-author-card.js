import * as React from 'react'
import AuthorPhoto from './author-photo'

const PostAuthorCard = ({ visible = true }) => {
  return (
    <div className="p-author h-card" style={{ display: visible ? 'block' : 'none' }}>
      <AuthorPhoto />
      <span>Written by</span>
      <span className="p-name">Christian Poplawski</span>
    </div>
  )
}

export default PostAuthorCard
