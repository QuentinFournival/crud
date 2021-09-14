const Service =  require("../models/service");
const Purpose = require("../models/purpose");
const Datatype = require('../models/datatype');


exports.indexRedirect = (async (req, res, next) =>{
    res.redirect('/')
});

exports.home = async (req, res, next) => {

    // if(req.query.id) {
    //     const service = await Service.findById(req.query.id);

    //     if(service) {
    //         return res.json({service})
    //     } else {
    //         return res.status(404).json({message: "Service not found"})
    //     }
    // }

    const services = await Service.find()
    res.render('services/index', { services: services })
};
exports.renderAddServices = async (req, res, next) =>{
    res.render("services/new", {service: new Service()});
};

exports.renderEditServices = async (req, res, next) =>{
    const service = await Service.findById(req.params.id)
    res.render("services/edit", {service: service});
};

exports.renderPurpose = async (req, res, next) => {
    const purposes = await Purpose.find()

    res.render("purpose/list", { purposes: purposes })
};

exports.renderCreatePurpose = async (req, res, next) => {
    const service = await Service.findById(req.params.serviceId);

    res.render("purpose/createPurpose", {service})
};


exports.renderEditPurpose = async (req, res, next) =>{
    const purpose = await Purpose.findById(req.params.id)

    res.render("purpose/editPurpose", {purpose: purpose})
};

exports.renderOneServicePurpose = async (req, res, next) => {

    let id = req.params.serviceId;

    let services=await Service.findById(id);

    res.render("purpose/servicePurpose", {services: services})
};
exports.renderDatatype = async (req, res, next) => {
    const datatypes = await Datatype.find()

    res.render("datatypes/index", { datatypes: datatypes })
};
exports.renderAddDatatype = async (req, res, next) => {
    const purpose = await Purpose.findById(req.params.purposeId);

    res.render("datatypes/create", {purpose})
};
exports.renderEditDatatype = async (req, res, next) => {
    const datatype = await Datatype.findByIdAndUpdate(req.params.id);

    res.render("datatypes/update", {datatype: datatype})
};