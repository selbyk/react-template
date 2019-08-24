import React from 'react';
import Layout from '../components/Layout';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Layout>
        <section className="container has-text-centered">
          <p>
            <span>
              {(this.props as any).statusCode ? (
                <span>
                  A server error occurred:
                  {' '}
                  <b>
                    {(this.props as any).statusCode}
.
                  </b>
                  {' '}
                </span>
              ) : (
                'We encountered an error loading this page. '
              )}
              Please try again later.
            </span>
          </p>
        </section>
      </Layout>
    );
  }
}
