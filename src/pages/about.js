import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () =>
  (
    <Layout>
      <Seo title={'About'}/>
      <article>
        <title>Fabricio Quagliariello</title>
        <h1>
          About
        </h1>
        <p>
          My name is Fabricio Quagliariello, but you can call me Quaglia,
          or simply Q.
        </p>
        <p>
          Over the last 20 years I have worked as a consultant and mentor in
          various industries, from advertising and design, to software
          architecture and development; always approaching these projects with
          an interdisciplinary mindset.
        </p>
        <p>
          One of my main strengths is the ability to learn new concepts quickly
          and develop related skills fast.
        </p>
        <h2>Mission</h2>
        <p>
          To improve the business processes of my clients through the
          intelligent use of their resources and talents.
        </p>
        <h2>Vision</h2>
        <p>
          Simplicity in Technology, Success in Business.
        </p>
        <h2>Values</h2>
        <ul>
          <li>
            <strong>Creativity:</strong> The ability to use old resources in a
            new way.
          </li>
          <li>
            <strong>Honesty:</strong> As the foundation for every interaction.
          </li>
          <li>
            <strong>Assertiveness:</strong> As a way to communicate efficiently.
          </li>
          <li>
            <strong>Simplicity:</strong> To develop a deep understanding of the
            work to achieve goals.
          </li>
          <li>
            <strong>Focus:</strong> To attain strategic goals quickly using
            that deep understanding pragmatically.
          </li>
          <li>
            <strong>Continuous Learning:</strong> As a tool for constant
            improvement.
          </li>
        </ul>
      </article>
    </Layout>
  )

export default AboutPage;
