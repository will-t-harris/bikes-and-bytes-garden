import React, { useState } from "react"
import tw, { css } from "twin.macro"
import { CopyToClipboard } from "react-copy-to-clipboard"

export const CTA = () => {
  const [state, setState] = useState({
    value: "will@bikesandbytes.net",
    copied: false,
  })

  const onCopy = () => {
    setState({ ...state, copied: true })
  }

  return (
    <footer
      tw="flex flex-col py-20 mx-auto"
      css={[
        css`
          width: 900px;
        `,
      ]}
    >
      <h2 tw="font-bold text-2xl mb-4">Now What?</h2>
      <p tw="font-normal text-xl mb-4">
        If you enjoyed this post, I'd love to continue the conversation on{" "}
        <a
          tw="text-pink-600 font-semibold hover:text-pink-700"
          href="https://twitter.com/will__tweets"
        >
          Twitter
        </a>
        .
      </p>
      <p tw="font-normal text-xl">
        Social media not your thing? Shoot me an email:{" "}
        <CopyToClipboard onCopy={handleCopy} text={state.value}>
          <span tw="text-pink-600 font-semibold">will@bikesandbytes.net</span>
        </CopyToClipboard>
      </p>
    </footer>
  )
}
