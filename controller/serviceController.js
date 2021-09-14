const Service =  require("../models/service");
const router = require("../route/services");


exports.createServicesOld = ( async (req, res, next) => {
    req.service = new Service()
    next()
  }, saveServiceAndRedirect('new'));


  exports.updateServices = async (req, res, next) => {
    try {
        await Service.findByIdAndUpdate(req.params.id, {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        })
        res.redirect("/")
        
    } catch (error) {
        return res.status(500).json({error:"internal-server-error", message: "Could not update service"});
    }
  }

  exports.deleteServices = ( async (req, res, next) => {
    try {
      await Service.findByIdAndDelete(req.params.id);
      res.redirect("/")
      // return res.status(200).json({message: "Service supprimé"});
    } catch (error) {
      return res.status(500).json({error: "internal-server-error", message: "Could not delete service"});
    }
});
  

function saveServiceAndRedirect(path) {
    return async (req, res) => {
      let service = new Service();
      service.name = req.body.name
      service.email = req.body.email
      service.password = req.body.password
      try {
        await service.save()
        res.redirect(req.baseUrl)
      } catch (e) {
        console.log(e);
        res.render(`services/${path}`, { service: service })
      }
    }
  }

exports.createServices = async (req, res, next) => {
  try {
    
      let service = new Service();
      service.name = req.body.name
      service.email = req.body.email
      service.password = req.body.password
      try {
        await service.save()
        return res.redirect(process.env.URL)
      } catch (e) {
        console.log(e);
        return res.render(`/`, { service: service })
      }

  } catch (error) {
    next(error)
  }
}