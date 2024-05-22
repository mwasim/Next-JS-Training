"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
};

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  //1. This needs to be a server action
  //"use server";

  try {
    //2. Check the user input and ensure it's valid
    const title = formData.get(`title`);
    const code = formData.get(`code`);

    if (typeof title != "string" || title.length < 3) {
      return {
        message: "Title must be longer",
      };
    }

    if (typeof code != "string" || code.length < 10) {
      return {
        message: "Code must be longer",
      };
    }

    //3. Create a new record in the database
    await db.snippet.create({
      data: {
        // title: title,
        // code: code

        //As key/values are identitcal we can shorten them down as below,
        title,
        code,
      },
    });

    //throw new Error("Failed to save to database.");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Something went wrong...",
      };
    }
  }
  //console.log(snippet);

  //4. Redirect the user back to the root route
  //Don't put the redirect statement inside the try block as it'd throw and Error
  redirect(`/`); //NEXT function to forcibly redirect user to another route, it's its' home screen
}
