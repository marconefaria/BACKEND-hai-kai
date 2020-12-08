const BookModel = require("../models/BookModel");

module.exports = {
    async create(request, response){
        try{
            const newBook = request.body;
            const result = await BookModel.create(newBook);
            return response.status(200).json({ note_id: result });
        } catch(error){
            console.warn("Book creation failed: ", error);
            return response.status(500).json({ 
                notification: "Internal server error while trying to create Book" 
            });
        }
    },

    async getById(request, response){
        try{
            const { book_id } = request.params;
            const result = await BookModel.getByIdWithFilters(
                book_id,
                request.query
            );
            return response.status(200).json(result);
        } catch(error){
            console.warn("Book creation failed: ", error);
            return response.status(500).json({ 
                notification: "Internal server error while trying to get Book" 
            });
        }
    },
    async update(request, response){
        try{
            const { book_id } = request.params;
            const newBook = request.body;

            await BookModel.updateById(book_id, newBook);
            return response.status(200).json({ notification: "Book update sucessfull" });
        } catch(error){
            console.warn("Book creation failed: ", error);
            return response.status(500).json({ 
                notification: "Internal server error while trying to update Book" 
            });
        }
    },
    async delete(request, response){
        try{
            const { book_id } = request.params;
            const result = await BookModel.deleteById(book_id);
            if(result === 0)
                return response.status(400).json({notification: "book_id not found"});

            return response.status(200).json({ notification: "Book deleted sucessfull" });
        } catch(error){
            console.warn("Book creation failed: ", error);
            return response.status(500).json({ 
                notification: "Internal server error while trying to delete Book" 
            });
        }
    }
}