const Purpose = require("../models/purpose");
const Service = require("../models/service");

exports.createPurpose = async (req, res, next) => {

    try {
        // Récupérer les valeurs du body
        let name = req.body.name
        let serviceId = req.body.serviceId

        // Vérifier que le serviceId pointe vers un service existant
        let service = await Service.findById(serviceId);

        if(!service)
            return res.status(404).json({error: "not-found-error", message: ""});

        // Créer le purpose
        let purpose = new Purpose();

        // Assigner les valeurs au purpose
        purpose.name = name;
        purpose.service = serviceId
        await purpose.save();

        const purposeId = purpose.id;

        // Ajouter le purpose au service

        service.purposes.push(purposeId);
        await service.save();

        // return res.status(200).json({message: "successfully created purpose.", purpose});
        res.redirect("/")        


    } catch (error) {
        console.log(error);

        return res.status(500).json({error: "internal-server-error"});
    }


}



exports.updatePurpose = async (req, res, next) => {
    try {
        await Purpose.findByIdAndUpdate(req.params.id, {
          name: req.body.name,
     
        })
        res.redirect("/purposes")
        
    } catch (error) {
        return res.status(500).json({error:"internal-server-error", message: "Could not update purpose"});
    }
  }

  exports.deletePurpose =  async (req, res, next) => {
    try {
      await Purpose.findByIdAndDelete(req.params.id);
      res.redirect("/purposes")
    } catch (error) {
      return res.status(500).json({error: "internal-server-error", message: "Could not delete purpose"});
    }
};