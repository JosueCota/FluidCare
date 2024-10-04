CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    dialDay TEXT NOT NULL,
    dialTime TEXT NOT NULL
);

INSERT OR REPLACE INTO user(name, dialDay, dialTime) 
VALUES('Josue Cota', 'MWF', '16:00');

CREATE TABLE intLiquidIntake

SELECT name FROM user;

-- Using to Prototype Queries and Database Calls