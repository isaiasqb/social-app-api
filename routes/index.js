const router = require('express').Router();
// there is no front end to this project
const apiRoutes = require('./api/api-routes')

router.use('/', apiRoutes);

router.use((req, res) => {
  res.status(404).send('There was an error!');
});

module.exports = router;