CREATE TABLE IF NOT EXISTS user (
    name TEXT PRIMARY KEY,
    dialDay TEXT NOT NULL,
    dialTime TEXT NOT NULL
);

INSERT OR REPLACE INTO user(name, dialDay, dialTime) 
VALUES('Josue Cota', 'MWF', '16:00');

CREATE TABLE intLiquidIntake

SELECT name FROM user;