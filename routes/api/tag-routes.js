const router = require('express').Router();
const { restart } = require('nodemon'); /*Added*/
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  router.get('/', (req, res) => {
  // find all tags
  var allTags = Tag.findAll({
    include: {
      model: Product
    }
  })
  // be sure to include its associated Product data
     res.json(allTags);
});

  router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  var idTag = Tag.findOne(req.params.id, {
    include: {
      model: Product
    }
  })
  // be sure to include its associated Product data
      res.json(idTag);
});

  router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then((newTag) => {
    res.json(newTag);
  })
});

// update a tag's name by its `id` value
  router.put('/:id', (req, res) => {
    Tag.update({
    where : {
      tag_id: req.params.id
    }
  })
});

// delete on tag by its `id` value
  router.delete('/:id', (req, res) => {
    Tag.destroy({
    where: {
      tag_id: req.params.id
    }
  })
});
module.exports = router;