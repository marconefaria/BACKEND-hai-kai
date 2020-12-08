const UserModel = require("../models/UserModel");

module.exports = {
    async create(request, response){
        try{
            const user = request.body;
            const result = await UserModel.create(user);
            
            return response.status(200).json(result);
        } catch(err){
            console.log("User creation failed: "+ err);
            return response.status(500).json({
                notification: "Internal server error while trying to create User",
            });
        }
    },

    async getById(request, response){
        try{
            const { user_id } = request.params;
            const result = await UserModel.getById(user_id);

            return response.status(200).json(result);
        }catch(err){
            console.log("User get failed: "+ err);
            return response.status(500).json({
                notification: "Internal server error while trying to get User",
            });
        }
    },

    async update(request, response){
        try{
            const { user_id } = request.params;
            const user = request.body;
            const result = await UserModel.updateById(user_id, user);

            return response.status(200).json(result);
        }catch(err){
            console.log("User update failed: "+ err);
            return response.status(500).json({
                notification: "Internal server error while trying to update User",
            });
        }
    },

    async delete(request, response){
        try{
            const { user_id } = request.params;
            const result = await UserModel.deleteById(user_id);

            return response.status(200).json(result);
        }catch(err){
            console.log("User delete failed: "+ err);
            return response.status(500).json({
                notification: "Internal server error while trying to delete User",
            });
        }
    }
}