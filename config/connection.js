/*import mysql from "mysql2/promise";
import express from "express";
import "dotenv/config";

export default await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_USER,
});
*/
var cat = {name: "Athena"};

function swap(feline){
    feline.name = "Wild";
    feline = {name: "tabby"};
}
swap(cat);
console.log(cat.name);