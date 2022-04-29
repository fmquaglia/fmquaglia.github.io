import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/okaidia'

const CodeBlock = (props) => {
  const className = props.children.props.className || ''
  const langMatch = className.match(/language-(?<lang>.*)/) || {groups: {lang: ''}};
  const {groups: {lang}} = langMatch

  return (
    <Highlight {...defaultProps}
               code={props.children.props.children.trim()}
               language={lang}
               theme={theme}>
      {
        (
          {className, style, tokens, getLineProps, getTokenProps}) => (
          <pre className={className} style={{...style, padding: '20px'}}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
        )
      }
    </Highlight>
  )
};
export default CodeBlock
