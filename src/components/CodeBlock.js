import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import tw, { css } from "twin.macro"

export const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, "")
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, index) => (
            <div tw="flex" key={index} {...getLineProps({ line, key: index })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
