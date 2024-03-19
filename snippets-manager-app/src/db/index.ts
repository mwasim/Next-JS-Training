import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

/*
demo example of create a snippet 
db.snippet.create({
  data: {
    title: `Title`,
    code: `const abc = ()=> {};`,
  },
});*/
