import { column, defineDb, defineTable } from "astro:db";

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    country: column.text(),
  },
});

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    postId: column.text(),
    body: column.text(),
    authorId: column.number({ references: () => Author.columns.id }),
  },
});

export default defineDb({
  tables: { Comment, Author },
});
