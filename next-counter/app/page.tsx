"use client";

import Link from "next/link";
import Counter from "./components/Counter";

const Home = () => {
  return (
    <div className="container">
      <h1>Next.js Counter</h1>
      <div className="counter-wrapper">
        <Counter />
        <p className="description">
          This is a static Next.js app with a client-side counter.
        </p>
        <p>
          Visit the <Link href="/about">About</Link> page.
        </p>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }

        .counter-wrapper {
          margin: 2rem 0;
          padding: 2rem;
          border-radius: 8px;
          background: #f5f5f5;
        }

        h1 {
          color: #0070f3;
          margin-bottom: 2rem;
        }

        .description {
          margin: 2rem 0;
          color: #666;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Home;
