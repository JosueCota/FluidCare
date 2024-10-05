import * as SQLite from "expo-sqlite"

// `execAsync()` is useful for bulk queries when you want to execute altogether.
// Please note that `execAsync()` does not escape parameters and may lead to SQL injection.
export async function createDB (db){
  try {
    await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS user (
    id INTEGER AUTOINC PRIMARY KEY NOT NULL, 
    name TEXT NOT NULL, 
    dialDays TEXT NOT NULL, 
    dialTime TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS intervals (
    intervalID INTEGER AUTOINC PRIMARY KEY NOT NULL,
    userID INTEGER NOT NULL,
    amount FLOAT NOT NULL,
    startDate DATE NOT NULL,
    endDate DATE, 
    wetWeight FLOAT,
    dryWeiht FLOAT,
    FOREIGN KEY (userID) REFERENCES user(id)
    ); `
  )
  console.log("Yayy")
} catch(error) {
  console.log(error);
}}

// `runAsync()` is useful when you want to execute some write operations.
export async function makeUser(db, name, dialDays, dialTime) {
  const user = await db.getFirstAsync(`SELECT * FROM user WHERE id = 1`)
  try {
    if (user) {
      await db.runAsync('UPDATE user (name, dialDays, dialTime) VALUES (?, ?, ?)', name, dialDays, dialTime)
    } else {
      await db.runAsync('INSERT INTO user (name, dialDays, dialTime) VALUES (?, ?, ?)', name, dialDays, dialTime)
    }
  } catch (error) {
    console.log(error)
  }
}


// await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', 999, 'aaa'); // Binding unnamed parameters from variadic arguments
// await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', [999, 'aaa']); // Binding unnamed parameters from array
// await db.runAsync('DELETE FROM test WHERE value = $value', { $value: 'aaa' }); // Binding named parameters from object

// // `getFirstAsync()` is useful when you want to get a single row from the database.
// const firstRow = await db.getFirstAsync('SELECT * FROM test');
// console.log(firstRow.id, firstRow.value, firstRow.intValue);

// // `getAllAsync()` is useful when you want to get all results as an array of objects.
// const allRows = await db.getAllAsync('SELECT * FROM test');
// for (const row of allRows) {
//   console.log(row.id, row.value, row.intValue);
// }