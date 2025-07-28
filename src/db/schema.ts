import { relations } from "drizzle-orm";
import {
  decimal,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const ticketTypeEnum = pgEnum("ticket_type", ["free", "paid"]);
export const ticketValidityEnum = pgEnum("ticket_validity", [
  "single",
  "multiple",
]);

export const events = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 50 }).notNull(),
  venue: varchar({ length: 75 }).notNull(),
  type: text().notNull(),
  startsAt: timestamp().notNull(),
  endsAt: timestamp(),
  timezone: text().notNull(),
});

export const ticketsCategories = pgTable("tickets_categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 30 }).notNull(),
  description: varchar({ length: 50 }),
  ticketType: ticketTypeEnum().notNull().default("free"),
  price: decimal({ precision: 10, scale: 2 }).notNull().default("0"),
  eventId: integer()
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
});

export const tickets = pgTable("tickets", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: text().notNull().unique(),
  eventId: integer()
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  ticketCategoryId: integer()
    .notNull()
    .references(() => ticketsCategories.id, { onDelete: "cascade" }),
});

export const eventsRelations = relations(events, ({ many }) => ({
  ticketsCategories: many(ticketsCategories),
  tickets: many(tickets),
}));

export const ticketsCategoriesRelations = relations(
  ticketsCategories,
  ({ one }) => ({
    event: one(events, {
      fields: [ticketsCategories.eventId],
      references: [events.id],
    }),
  }),
);

export const ticketsRelations = relations(tickets, ({ one }) => ({
  event: one(events, {
    fields: [tickets.eventId],
    references: [events.id],
  }),
  ticketCategory: one(ticketsCategories, {
    fields: [tickets.ticketCategoryId],
    references: [ticketsCategories.id],
  }),
}));

export type Event = typeof events.$inferSelect;
export type TicketCategory = typeof ticketsCategories.$inferSelect;
export type Ticket = typeof tickets.$inferSelect;
