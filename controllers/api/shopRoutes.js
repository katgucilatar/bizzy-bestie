const router = require('express').Router();
const { Shop } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newShop = await Shop.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newShop);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
    // update a category by its `id` value
    try {
      const shopData = await Shop.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(shopData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const shopData = await Shop.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!shopData) {
      res.status(404).json({ message: 'No shop found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;