import userModel from "../models/userModel.js";
import connection from "../models/index.js";
import { Op } from "sequelize";

export default class userController{
    async addUser(req,res) {
        const {username, location} = req.body;
        const data = await userModel.create(req.body);
        console.log(data);
        res.status(200).json(data);
    }

    async getUser(req , res) {
        const { id } = req.params;
        if (id) {
            const data = await userModel.findByPk(id);
            if(data){
                res.json(data);
            }
            else 
            {
                res.json([]);
            }
        }
        else
            result.status(200).json({success: false, message: "Username not provided"});
    }

    async updateUser(req, res) {
        const { id } = req.params;
        if(id){
            const {username, location} = req.body;
            const data = await userModel.update({username,location},
                { 
                    where: {
                        id,
                    },
                }
                );
           console.log(data);
           if(data[0]) res.json({success: true, message: "User updated"});
           else res.json({success: false, message: "User cannnot be updated"});
        }
        else{
            res.status(200).json({success: false, message: "User ID not provided"});
        }
    }
        async deleteUser(req, res){
            const { id } = req.params;
            if(id){
                const data = await userModel.destroy(
                    {
                        where: {
                            id,
                        }
                });
             console.log(data);
             if(data) res.json({success:true, message: "User deleted"});
             else res.json({success:false, message: "User cannot be deleted"});
            }
            else {
                res.status(200).json({success: false, message: "User id not provided"});
            }
        }

        async searchUserByLocation(req, res) {
            const { location } = req.query;
            const data = await userModel.findAll({
              where: {
                location: {
                  [Op.like]: `%${location}%`,
                },
              },
            });
        
            console.log(data);
            res.json(data);
          }

}

