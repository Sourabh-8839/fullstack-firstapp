const express = require('express');
const router = express.Router();

const formController = require('../controller/formcontrolle');

router.get('/getDetails',formController.getDetails);

router.post('/postDetails',formController.postDetails);

router.post('/editDetails',formController.editDetails);

router.post('/deleteDetails/:userId',formController.deleteDetails);



module.exports = router;