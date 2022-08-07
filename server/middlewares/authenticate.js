const jwt = require('jsonwebtoken');

let authenticate = async (request , response ,next) => {

    // get token from header
    const token = request.header('x-auth-token');
    if (!token){
        return response.status(401).json({msg : 'No-token,authorization denied'});
    }

    // verify token

     try {
         let decode = jwt.verify(token,process.env.JWT_SECRET_KEY );


         request.user = decode.userInfo;

         next();
     }
    catch (e) {
        response.status(401).json({msg : 'Token is not valid'})
    }

};
module.exports = authenticate