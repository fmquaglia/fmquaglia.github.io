import * as React from "react"
import '../styles/site.scss'
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <main>
      <article>
        <title>Fabricio Quagliariello</title>
        <StaticImage src={"../images/fabricio.png"} alt={"Fabricio Quagliariello"}/>
        <h1>
          fabricio.cloud
        </h1>
        <p>
          Coming soon.
        </p>
      </article>
    </main>
  )
}

export default IndexPage
