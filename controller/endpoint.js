const { Logic } = require('./logic');
const model = require('../model/model');
class Endpoint {

    constructor() {
        this.employee = model.employee;
    }

    addEmployeeEndpoint = (req, res) => {
        this.employee.employee_id = req.body.employee_id
        new Logic().addEmployeeLogic(this.employee,res);
    }

    findHeadEnpoint = (req, res) => {
        new Logic().findHeadLogic(this.employee, res);
    }

    showInfoEndpoint = (req, res) => {
        new Logic().showInfoLogic(res);
    }

    deleteInfoEndpoint = (req, res) => {
        var id = req.params.id;
        new Logic().deleteInfoLogic(id,res);
    }

    // getDataEndpoint = (req, res) => {
    //     new Logic().getDataLogic(res);
    // }

    reportEndpoint = (req, res) => {
        new Logic().reportLogic(res);
    }

    editUserEndpoint = (req,res) => {
        new Logic().editUserLogic(this.employee,res);
    }
}
module.exports = {
    Endpoint
}