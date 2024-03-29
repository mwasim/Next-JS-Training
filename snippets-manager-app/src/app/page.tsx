/*
  By default all components in NEXT.js are SERVER COMPONENTS unless marked as `use client`
  And server components can use async/await syntax
*/
export default async function Home() {
  return <div>Home Page!</div>;
}
