import joi from "joi";

const contaSchema = joi.object({
    descricao: joi.string().required(),
    valor: joi.string().required(),
    responsavel: joi.string().required(),
    status: joi.boolean()
});

export default contaSchema;