import React from 'react'
import CreatableSelect from 'react-select/creatable'
import _ from '../../utils/lodashUtils'
import './tagInputField.styles.scss'

const TagInputField = props => {
  const { onChange, isInputValid, onBlur, onInputChange, ...rest } = props

  const initialState = []
  const [value, setValue] = React.useState(props.value || initialState)
  const [inputText, setInputText] = React.useState('')
  const [options, setOptions] = React.useState(initialState)
  const components = {
    DropdownIndicator: null,
  }

  React.useEffect(() => {
    if (props.value) {
      setValue(props.value)
      setOptions(createOption(props.value))
    }
  }, [props.value])

  const handleKeyDown = event => {
    switch (event.key) {
      case 'Enter':
      case 'Tab':
      case ' ':
        pushValue(event)
        break
      case 'Delete':
      case 'Backspace':
        popValue(event)
        break
    }
  }

  const pushValue = event => {
    if (!inputText || (isInputValid && !isInputValid(inputText))) return
    setInputText('')
    _.isEmpty(value) ? setValue([inputText]) : setValue([...value, inputText])
    _.isEmpty(options)
      ? setOptions([createOption(inputText)])
      : setOptions([...options, createOption(inputText)])
    onChange && onChange([...value, inputText])
    event.preventDefault()
  }

  const popValue = event => {
    if (!_.isEmpty(value) && !inputText) {
      let newValues = value && [...value]
      newValues.pop()
      let newOptions = options && [...options]
      newOptions.pop()
      setValue(newValues)
      setOptions(newOptions)
      onChange && onChange(newValues)
      event.preventDefault()
    }
  }

  const handleInputChange = inputValue => {
    setInputText(inputValue)
    onInputChange && onInputChange(inputValue)
  }

  const handleOnBlur = () => {
    onBlur && onBlur(value, inputText)
  }

  const handleTagDeletion = options => {
    const values = options && options.map(option => option.value)
    setValue(values)
    setOptions(options)
    onChange && onChange(values || [])
  }

  const createOption = email => {
    if (Array.isArray(email)) {
      return email.map(createOption)
    } else {
      return {
        label: email,
        value: email,
      }
    }
  }

  return (
    <div className="tag-input-field" {...rest}>
      <CreatableSelect
        isMulti
        isClearable
        menuIsOpen={false}
        value={options}
        inputValue={inputText}
        placeholder={props.placeholder || 'Enter'}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onChange={handleTagDeletion}
        components={components}
        onBlur={handleOnBlur}
      />
    </div>
  )
}

export default TagInputField
