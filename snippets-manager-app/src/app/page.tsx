import { db } from "@/db";
/*
  By default all components in NEXT.js are SERVER COMPONENTS unless marked as `use client`
  And server components can use async/await syntax
*/
export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });

  return <div>{renderedSnippets}</div>;
}
