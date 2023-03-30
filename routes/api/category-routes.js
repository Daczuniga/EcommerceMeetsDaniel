const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  var allCategories = Category.findAll({
    include : {Product}
  })
  // be sure to include its associated Products
  res.json(allCategories);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  var idCategory = Category.findOne(req.params.id, {
    include : {Product}
  })
   // be sure to include its associated Products
  res.json(idCategory);
});

// create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then((newCategory) => {
    res.json(newCategory);
  })
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update({
    where : {category_id: req.params.id}
  })
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      category_id: req.params.id
    }
  })
});
module.exports = router;
