import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Concerts = () => (
  <Layout>
    <SEO title="Concerts" />
    <h1>Concerts I'm Going To</h1>
    <div>
      <iframe width="100%" height="100%" title="Concert Google Sheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT19rKae6pUJ0PhnQUEzd7wb277rVTcFKdkK3jfiNrXbMDoD5amX01irjKzvUoAbw27rpFTGQzkAVxf/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    </div>
  </Layout>
)

export default Concerts
