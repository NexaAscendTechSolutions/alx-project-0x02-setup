// pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project 2</title>
        <meta name="description" content="ALX Project 2 - Next.js Starter" />
      </Head>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          fontFamily: "sans-serif",
        }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          👋 Welcome to ALX Project 2
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#555" }}>
          Your Next.js app is up and running!
        </p>
      </main>
    </>
  );
}
