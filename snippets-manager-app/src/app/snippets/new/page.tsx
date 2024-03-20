import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    //TODO: This needs to be a server action
    `use server`;

    //TODO: Check the user input and ensure it's valid
    const title = formData.get(`title`) as string;
    const code = formData.get(`code`) as string;

    //TODO: Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        // title: title,
        // code: code

        //As key/values are identitcal we can shorten them down as below,
        title,
        code,
      },
    });

    console.log(snippet);

    //TODO: Redirect the user back to the root route
    redirect(`/`); //NEXT function to forcibly redirect user to another route, it's its' home screen
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
