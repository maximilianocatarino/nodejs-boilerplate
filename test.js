const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormFieldValidationOperator = {
    "LessThan": "lt",
        "LessThanOrEqual": "lte",
        "GreaterThan": "gt",
        "GreaterThanOrEqual": "gte",
        "Equals": "eq",
        "NotEquals": "ne",
        "Like": "lk"
};

const BrazilianStates = {"AC": "AC",
        "AL": "AL",
        "AP": "AP",
        "AM": "AM",
        "BA": "BA",
        "CE": "CE",
        "DF": "DF",
        "ES": "ES",
        "GO": "GO",
        "MA": "MA",
        "MT": "MT",
        "MS": "MS",
        "MG": "MG",
        "PA": "PA",
        "PB": "PB",
        "PR": "PR",
        "PE": "PE",
        "PI": "PI",
        "RJ": "RJ",
        "RN": "RN",
        "RS": "RS",
        "RO": "RO",
        "RR": "RR",
        "SC": "SC",
        "SP": "SP",
        "SE": "SE",
        "TO": "TO"
};


const baseSchema = {
    name: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: Number, required: false },
    complement: { type: String, required: false },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true, enum: Object.values(BrazilianStates) },
    zipCode: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
};
const timestamps = {timestamps: true};

const addressSchema = new Schema(baseSchema, timestamps);


const defaultSchema = {
    defaultLabel: { type: String },
    description: { type: String, required: false },
    type: { type: String, enum: ["address", "currency", "date", "file", "identity", "interval", "number", "phone", "text"] },
    deletedAt: { type: Date, required: false }
};

const addressListSchema = new Schema(Object.assign({addresses: addressSchema}, defaultSchema));

const templateSchema = new Schema(defaultSchema,{discriminatorKey: "kind", timestamps: true});

const validationSchema = new Schema({
    operator: { type: String, required: true, enum: Object.values(FormFieldValidationOperator) },
    value1: { type: String, required: true },
    value2: { type: String, required: false }
});

const variableSchema = new Schema({
    name: { type: String },
    value: { type: Number }
});

const dateSchema = new Schema({
    format: { type: String, default: "pt-BR", enum: ["DD/MM/YYYY", "YYYY/MM/DD", "MM/YYYY", "UNIX"] },
    showCalendar: { type: Boolean, default: true },
    validators: { type: [validationSchema], required: false },
    variables: { type: [variableSchema], required: false },
});

const fileSchema = new Schema({
    maxFileSize: {type: Number, default: 8388608},
    maxFileUploads: {type: Boolean, default: 1},
    validExtensions: {type: [String]},
});

const currencySchema = new Schema({
    locale: { type: String, default: "pt-BR" },
    precision: { type: Number, default: 2 },
    symbol: { type: String, default: "R$" },
    validators: { type: [validationSchema], required: false },
});

const identitySchema = new Schema({
    identityType: { type: String, enum: ["cpf", "cnpj", "rg", "cnh"]},
    cnhCategory: { type: String, enum: ["A", "B", "C", "D", "E", "AB", "AC", "AD", "AE"], required: false },
    cnhFirstRelease: { type: Date, required: false },
    rgIssuer: { type: String, required: false },
    rgIssueDate: { type: Date, required: false }
});

const dateIntervalSchema = new Schema({
    intervalType: { type: String, enum: ["number", "date"] },
    format: { type: String, default: "pt-BR", enum: ["DD/MM/YYYY", "YYYY/MM/DD", "MM/YYYY", "UNIX"] },
    showCalendar: { type: Boolean, default: true },
    validators: { type: [validationSchema], required: false },
    variables: { type: [variableSchema], required: false },
});

const numberSchema = new Schema({
    locale: { type: String, default: "pt-BR" },
    precision: { type: Number, default: 2 },
    validators: { type: [validationSchema], required: false },
});

const numberIntervalSchema = new Schema({
    intervalType: { type: String, enum: ["number", "date"] },
    locale: { type: String, default: "pt-BR" },
    precision: { type: Number, default: 2 },
    validators: { type: [validationSchema], required: false },
});

const phoneSchema = new Schema({
    phoneType: { type: String, enum: ["landline", "mobile", "both"] },
    internationalCode: { type: Boolean },
    areaCode: { type: Boolean },
    carrier: { type: Boolean },
});

const textSchema = new Schema({
    minSize: { type: Number, required: true, default: 10 },
    maxSize: { type: Number, required: true, default: 200 },
    showEditor: { type: Boolean, required: true, default: false }
});

const FormFieldTemplate = mongoose.model("FormFieldTemplate", templateSchema);
const FormFieldAddressTemplate =  FormFieldTemplate.discriminator(
    "address",
    addressSchema
);
const FormFieldAddressListTemplate =  FormFieldTemplate.discriminator(
    "address-list",
    addressListSchema
);
const FormFieldCurrencyTemplate =  FormFieldTemplate.discriminator(
    "currency",
    currencySchema
);
const FormFieldDateTemplate =  FormFieldTemplate.discriminator(
    "date",
    dateSchema
);
const FormFieldFileOptions =  FormFieldTemplate.discriminator(
    "file",
    fileSchema
);
const FormFieldIdentity =  FormFieldTemplate.discriminator(
    "identity",
    identitySchema
);
const FormFieldDateInterval =  FormFieldTemplate.discriminator(
    "date-interval",
    dateIntervalSchema
);

const FormFieldNumberTemplate =  FormFieldTemplate.discriminator(
    "number",
    numberSchema
);
const FormFieldNumberInterval =  FormFieldTemplate.discriminator(
    "number-interval",
    numberIntervalSchema
);
const FormFieldPhoneTemplate =  FormFieldTemplate.discriminator(
    "phone",
    phoneSchema
);
const FormFieldTextTemplate =  FormFieldTemplate.discriminator(
    "text",
    textSchema
);
