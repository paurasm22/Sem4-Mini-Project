const {Pool}  =require('pg')
const  pool  = new Pool({
  user:'postgres',
  password:'12345',
  host:'localhost',
  port:5432,
  database: "Sem4miniproject"
})

module.exports=pool