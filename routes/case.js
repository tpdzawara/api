const router = require('express').Router();
const Case = require('../model/Case');

router.get('/cases', async(req, res) => {
   
    try {
        const cases = await Case.find(req.params.cases);
        if(cases.length === 0) {
            res.status(404).json({
                message: 'No case found'
            });
        }
            res.status(200).json(cases);
        } catch (error) {
            res.status(500).json({msg:error});
        }
});


router.post ( '/add', async (req, res) => {
    const newCase = new Case({
        Recovered: req.body.Recovered,
        Deaths: req.body.Deaths,
        Active: req.body.Active,
        Confirmed: req.body.Confirmed
    });
        
try {
    const saveCase = await newCase.save();
    res.status(200).json(
                { msg: 'case saved'. saveCase }
            )
} catch (error) {
    res.status(500).json(
                { msg: error }
            )
}
})

module.exports = router;