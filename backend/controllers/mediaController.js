const APIFeatures = require('../utils/apiFeatures');

exports.getAllMedia = (res, req, next) => {
    try {
        const medias = new APIFeatures(req.query, req.queryString).sort().filter().page().skip()
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'ya did done wrong ',
            data: {
                medias
            }
        })
    }