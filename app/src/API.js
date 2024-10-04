import SQLite from "react-native-sqlite-storage"

export const createTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS " +
            "User" +
            "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, DiaDays TEXT, DiaTime TEXT)"
        )
    }).then(()=>{
        console.log("Success create")
    })
}

export const setUser = (db, {name, diaDays, diaTime}) => {
    try {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT pr REPLACE INTO User (Name, DiaDays, DiaTime) VALUES ('"+ name + "'," + diaDays + "'," + diaTime + ")"
            )
        })
    } catch (error) {
        console.log(error)
    }
}