import mysql2 from 'mysql2/promise';

export const connection = mysql2.createPool({
  host: 'bnypomdjooi40fbyi0iz-mysql.services.clever-cloud.com',
  user: 'ufblh1sdfkvar8km',
  password: 'HfHWkNTpLzgi5D5bCqGK',
  database: 'bnypomdjooi40fbyi0iz',
  port: 3306
});