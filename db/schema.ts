import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const entries = sqliteTable("circe_entries", {
  owner: text("owner").notNull(),
  id: text("id").notNull(),
  revision: integer("revision").notNull(),
  payload: text("payload").notNull()
}, table => [primaryKey({ columns: [table.owner, table.id] })]);
