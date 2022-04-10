import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

(async () => {
  try {
    // open the database
    const db = await open({
      filename: 'chinook.db',
      driver: sqlite3.Database
    })
    const result = await db.all('SELECT * FROM albums');
    console.log('result :>> ', result);
  } catch (error) {
    console.error(error)
  }
})()