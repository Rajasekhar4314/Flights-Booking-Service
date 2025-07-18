

const { StatusCodes } = require("http-status-codes")
const { Logger} = require("../config/index")
const { AppError } = require("../utils/errors/app-error")

class CrudRepository{

    constructor(model){
        this.model = model
    }

    async create(data){
        const response = await this.model.create(data)
        return response
    }

    async destroy(data){
        const response = await this.model.destroy({
            where : {
                id : data
            }
        })
        if(!response){
            throw new AppError("No record is present", StatusCodes.NOT_FOUND)
        }
        return response
    }

    async get(data){
        const response = await this.model.findByPk(data)
        if(!response){
            throw new AppError("No record is present", StatusCodes.NOT_FOUND)
        }
        return response
    }

     async getAll(){
        const response = await this.model.findAll()
        return response
    }

    async update(data){  // data -> { key : value, ...}
        const response = await this.model.update(data, {
            where: {
                id : data.id
            }
        })
        if(!response[0]){
            throw new AppError("No record is present", StatusCodes.NOT_FOUND)
        }
        return response
    }
}

module.exports = CrudRepository