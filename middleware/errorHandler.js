const { constants}= require('../constants')
const errorHandler = (err, req, res, next) => {
        const statusCode = res.statusCode ? res.statusCode: 500
        switch (statusCode) {
                case constants.VALIDATION_ERROR:
                        res.json({ title: "Validation Failed", message: err.message, stackTrack: err.stack}) 
                        break;
                case constants.NOT_FOUND:
                        res.json({ title: "Not FOund", message: err.message, stackTrack: err.stack})    
                        break;
        
                case constants.UNAUTHORIZED:
                        res.json({ title: "Unauthorized", message: err.message, stackTrack: err.stack})    
                        break;
        
                case constants.FORBIDDEN:
                        res.json({ title: "Forbidden", message: err.message, stackTrack: err.stack})    
                        break;
                case constants.SERVERERROR:
                        res.json({ title: "SeverError", message: err.message, stackTrack: err.stack})    
                        break;
        
                default:
                    console.log('no error, all good')
                        break;
        }
       
        
}


module.exports = errorHandler