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

  const onChange = value => {
    setValue(value)
    props.onChange && props.onChange(converter.makeHtml(value))
  }

  return (
    <div className="editor-field-container">
      <ReactMde
        value={value}
        onChange={onChange}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown => {
          return Promise.resolve(converter.makeHtml(markdown))
        }}
        textAreaProps={props.textAreaProps}
      />
    </div>
  )
}
