import Joi from "joi";

const userRegisterValidator = Joi.object({
    username: Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).required(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).required()

});

export {
    userRegisterValidator
}