-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    favorite_toy TEXT NOT NULL
)

INSERT INTO
    cats (name, favorite_toy)
VALUES
    ('Hara', 'Wand'),
    ('Moxie', 'Mouse')