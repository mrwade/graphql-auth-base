import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.specificType('id', 'CHAR(60)').primary();
    table.string('email').notNullable().unique();
    table.specificType('passwordHash', 'CHAR(60)').notNullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('signUpRequests', (table) => {
    table.specificType('id', 'CHAR(60)').primary();
    table.string('email').notNullable().unique();
    table.specificType('tokenHash', 'CHAR(60)').notNullable();
    table.timestamp('redeemedAt').nullable();
    table.timestamp('expiresAt').notNullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('signUpRequests');
  await knex.schema.dropTable('users');
}
