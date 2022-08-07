const  express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const {body,validationResult} = require('express-validator');
const Event = require('../models/Events');

/*
Events Router
Usage : upload an  events
URL :http://127.0.0.1:5000/api/events/upload
parameters : name ,img , date, type , price , info
methode : post
access : private

*/
router.post('/upload' , authenticate,[
    body('name').notEmpty().withMessage('name is required'),
    body('image').notEmpty().withMessage('image is required'),
    body('date').notEmpty().withMessage('date is required'),
    body('type').notEmpty().withMessage('type is required'),
    body('price').notEmpty().withMessage('price is required'),
    body('info').notEmpty().withMessage('info is required')
] ,async (request,response) => {
    let error =validationResult(request);
    if (!error.isEmpty()){
        return response.status(401).json({error : error.array() })
    }
    try{
       let {name ,image , date , type, price , info} = request.body;
       let user = request.user.id;

       let event = new Event({user, name , image , date, type,price, info});
       event = await event.save()

        response.status(200).json({msg : ' event is uploaded'})
    }
    catch (e) {
        console.error([{msg : e.message}]);
        response.status(500).json({error : e.array() })
    }
});

/*
Events Router
Usage : Get a free events
URL :http://127.0.0.1:5000/api/events/free
parameters : no-fields
methode : get
access : public

*/

router.get('/free' , async (request,response) => {

    try{
        let freeEvents = await  Event.find({type : 'FREE'})
        response.status(200).json(freeEvents);
    }
    catch (e) {
        console.error(e)
        response.status(500).json({error : e.array() })
    }
});

/*
Events Router
Usage : Get a pro events
URL :http://127.0.0.1:5000/api/events/pro
parameters : no-fields
methode : get
access : private

*/

router.get('/pro' ,authenticate ,async (request,response) => {

    try{

        let proEvents = await  Event.find({type : 'PRO'})
        response.status(200).json(proEvents);
    }
    catch (e) {
         console.error(e)
        response.status(500).json({error : e.array() })
    }
});

module.exports = router