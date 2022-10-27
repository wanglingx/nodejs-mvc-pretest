const express = require('express');
const router = express.Router()
const { Endpoint } = require('../controller/endpoint');

//router.get("/getData", new Entrance().sentAllDataEntrance);

router.post("/addEmployee", new Endpoint().addEmployeeEndpoint);
router.get("/findHead", new Endpoint().findHeadEnpoint);
router.get("/showInformation", new Endpoint().showInfoEndpoint);
router.get("/deleteInfo/:id", new Endpoint().deleteInfoEndpoint);
//router.get("/getData", new Endpoint().getDataEndpoint);
router.get("/report", new Endpoint().reportEndpoint);
router.post("/editUser", new Endpoint().editUserEndpoint);
router.get("/getEditUser/:edit_id", new Endpoint().getEditUserEndpoint);

router.get('/', (req, res) => {
    return res.render('../view/pages/home.ejs')
})

module.exports = router;