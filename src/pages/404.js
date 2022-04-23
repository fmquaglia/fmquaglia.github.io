import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <article>
        <title>Not found</title>
        <StaticImage src={"../images/fabricio.png"} alt={"Fabricio Quagliariello"}/>
        <h1>Page not found</h1>
        <p>
          <code>
            /dev/null
          </code>
        </p>
        <p>
          <Link to="/">Go home</Link>
        </p>
      </article>
    </main>
  )
}

export default NotFoundPage
