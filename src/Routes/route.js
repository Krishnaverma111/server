const express= require('express')
const route = express.Router()
const {get,post,put,deleted}=require("../contrller/controller")

route.get('/get',get)
route.post('/post',post)
route.put('/put',put)
route.delete('/deleted',deleted)

module.exports= route;


