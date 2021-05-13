CREATE TABLE IF NOT EXISTS dogstable(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    breed VARCHAR(20),
    size TEXT,
    height FLOAT, 
    origin TEXT,
);

INSERT INTO songtable(breed, size, height, origin) VALUES ('Pug', 'small', 30, 'Asia');
INSERT INTO songtable(breed, size, height, origin) VALUES ('Husky', 'big', 60, 'Europe');
INSERT INTO songtable(breed, size, height, origin) VALUES ('Chihuahua', 'small', 20, 'Mexico');
INSERT INTO songtable(breed, size, height, origin) VALUES ('Rottweiler', 'big', 70, 'Germany');
INSERT INTO songtable(breed, size, height, origin) VALUES ('Akita', 'big', 65, 'USA');