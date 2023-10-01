import { createPool } from 'mysql2/promise';

const NewDBConn = createPool({
    "host":"131.153.147.106",
    "user":"celebr14_oluwapaso",
    "password":"$tmm#C!ZeFtd",
    "database":"celebr14_hauling_desk",
    "waitForConnections": true,
    "connectionLimit": 10,
    "maxIdle": 10, // max idle connections, the default value is the same as `connectionLimit`
    "idleTimeout": 60000, // idle connections timeout, in milliseconds, the default value 60000
    "queueLimit": 0,
})

export default NewDBConn
