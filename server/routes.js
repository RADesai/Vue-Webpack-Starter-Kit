const path = require('path');
// const controller = require('./api/controller.js');

module.exports = function(app, express){
  const router = express.Router();

  //api endpoints and routes

  // router.route('/characters')
  //   .post(controller.createCharacter)
  //   .get(controller.getCharacters);
  //
  // // Specific Character :id
  // router.route('/characters/:id')
  //   .put(controller.updateCharacter)
  //   .get(controller.getCharacter);
  // //   .delete(controller.deleteCharacter);

  app.use('/api', router);

  app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../index.html'));
  });
}
