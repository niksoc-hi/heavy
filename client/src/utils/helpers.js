var HtmlToReactParser = require('html-to-react').Parser

class Helpers {
  static countCharactersInString = string => {
    return string.split('').length
  }

  static setCookie = (name, value, days) => {
    let expires
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = `; expires= ${date.toGMTString()}`
    } else {
      expires = ''
    }
    document.cookie = `${name} = ${value} ${expires} ; path=/`
  }

  static HTMLParser = htmlInput => {
    var htmlToReactParser = new HtmlToReactParser()
    var reactElement = htmlToReactParser.parse(htmlInput)
    return reactElement
  }
}

export default Helpers
