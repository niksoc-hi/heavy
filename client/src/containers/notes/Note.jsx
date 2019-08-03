import React from 'react'
import { Card } from 'antd'
import './Note.scss'

function Note({ title, content }) {
  return (
    <Card className="note__card">
      <h3>{title}</h3>
      <span>{content}</span>
    </Card>
  )
}

export default Note
