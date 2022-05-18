// Modele sauce
const Sauce = require('../models/sauce');

exports.createSauce =  (req, res, next) => {
    delete req.body._id;
    const sauceData = new Sauce({
      ...req.body
    });
    sauceData.save()
      .then(() => res.status(201).json({ message: 'Sauce enregistré !'}))
      .catch(error => res.status(400).json({ error }));
    }

exports.modifySauce = (req, res, next) => {
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Sauce modifié !'}))
      .catch(error => res.status(400).json({ error }));
    }

exports.deleteSauce = (req, res, next) => {
   Sauce.deleteOne({ _id: req.params.id })
     .then(() => res.status(200).json({ message: 'Sauce supprimé !'}))
     .catch(error => res.status(400).json({ error }));
    }

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
    }

exports.getAllSauce = (req, res, next) => {
    Sauce.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
  }
  