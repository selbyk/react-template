// const IndexPage = () => <h1>Testing Next.js App written in TypeScript with Jest</h1>;

// export default IndexPage;
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title">
          {'Hello World from '}
          <a href="https://nextjs.org/">Next.js</a>
          {' and '}
          <a href="https://bulma.io/">Bulma</a>
          {'!'}
        </h1>
      </div>
    </section>
  </Layout>
);
