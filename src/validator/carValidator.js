import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви, цифри, від 1 до 20 символів'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'Мінімум 0',
        'number.max': 'Максимум 1000000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min': 'Мінімум 1990',
        'number.max': `Max ${new Date().getFullYear()}`
    })
})


export {
    carValidator
}