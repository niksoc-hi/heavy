import * as React from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import 'react-mde/lib/styles/css/react-mde-all.css'
import './postEditor.styles.scss'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
})

export default function PostEditor(props) {
  const [value, setValue] = React.useState('')
  const [selectedTab, setSelectedTab] = React.useState('write')
  return (
    <div className="editor-field-container">
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown => {
          console.log(converter.makeHtml(markdown))
          return Promise.resolve(converter.makeHtml(markdown))
        }}
        {...props}
      />
    </div>
  )
}
