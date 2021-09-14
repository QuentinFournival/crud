const Datatype = require("./../models/datatype");
const Purpose = require("./../models/purpose");

/**
 * Get all Datatypes
 */
exports.all = async (req, res, next) => {
    try {
        
        const datatypes = await Datatype.find();

        return res.status(200).json(datatypes);

    } catch (error) {
        return res.status(500).json({error: "internal-server-error"});
    }
}

/**
 * Get one Datatype
 */
exports.one = async (req, res, next) => {
    try {
        
        const datatype = await Datatype.findById(req.params.id);

        return res.status(200).json(datatype);

    } catch (error) {
        return res.status(500).json({error: "internal-server-error"});
    }
}

/**
 * Create a Datatype
 */
exports.create = async (req, res, next) => {
    try {
        let name = req.body.name
        let purposeId = req.body.purposeId

        let purpose = await Purpose.findById(purposeId);

        if(!Purpose)
            return res.status(404).json({error: "not-found-error", message: ""});

        let datatype = new Datatype();

        datatype.name = name;
        datatype.purpose = purposeId;
        await datatype.save();

        const datatypeId = datatype.id;


        purpose.datatypes.push(datatypeId);
        await purpose.save();

        res.redirect("/datatypes")        


    } catch (error) {
        console.log(error);

        return res.status(500).json({error: "internal-server-error"});
    }

}

/**
 * Update a Datatype
 */
exports.update = async (req, res, next) => {
    try {
        await Datatype.findByIdAndUpdate(req.params.id, {
          name: req.body.name,
     
        })
        res.redirect("/datatypes")
        
    } catch (error) {
        return res.status(500).json({error:"internal-server-error", message: "Could not update datatype"});
}
}

/**
 * Delete a Datatype
 */
exports.delete = async (req, res, next) => {
    try {
        
        

        await Datatype.findByIdAndDelete(req.params.id);
        res.redirect("/datatypes");

    } catch (error) {
        return res.status(500).json({error: "internal-server-error"});
    }
}