import express from "express";
import connection from "../models/index.js";
import mysql from "mysql2/promise";
import userModel from "../models/userModel.js";
import UserController from "../controllers/userController.js";

const router = express.Router();
const userController = new UserController();
router.post("/add" , userController.addUser);

router.get("/:id" , userController.getUser);

router.get("/" , async (req , res) => {
        const [rows, fields] = connection.query(`SELECT * FROM users` ,
        );
        res.status(200).json({rows});
        
});

router.put("/update/:id" , userController.updateUser )

router.delete("/delete/:id", userController.deleteUser );

router.get("/search/by", userController.searchUserByLocation);

export default router;