import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () =>
  (
    <Layout className={'Home'}>
      <Seo title={'Homepage'}/>
      <article>
        <title>Fabricio Quagliariello</title>
        <h1>
          Coming soon.
        </h1>
      </article>
    </Layout>
  )

export default IndexPage;
