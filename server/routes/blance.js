const express = require('express')
const blanceRouter = express.Router()
const blanceCon  = require('../controllers/blanceCon')


blanceRouter.get('/blance',blanceCon.totalBlance);
blanceRouter.get('/addblance',blanceCon.addBlance);
blanceRouter.post('/sellshare',blanceCon.sellShare);
blanceRouter.post('/puchaseshare',blanceCon.puchaseShare);

module.exports = blanceRouter;

