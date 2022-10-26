const { employee } = require('../model/model');
const { Operator } = require('./operator');
const axios = require('axios');
const fs = require('fs');
class Logic {

    addEmployeeLogic = async (employee, res) => {

        //random name
        let name = '';
        var name_length = 8;
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var char_length = characters.length;
        for (var i = 0; i < name_length; i++){
            name += characters.charAt(Math.floor(Math.random() * char_length));
        }
        employee.name = name

        //random Tell phone
        let tellphone_number = '0';
        var phoneNumber_length = 9;
        var charactor_phone = '0123456789';
        char_length = phoneNumber_length;
        for (var i = 0; i < phoneNumber_length; i++){
            tellphone_number += charactor_phone.charAt(Math.floor(Math.random() * phoneNumber_length));
        }
        employee.Tell = tellphone_number;

        //random address
        let num = Math.floor(Math.random() * 100);
        let address = num + ' ';
        var add_length = 15;
        char_length = characters.length;

        for (var i = 0; i < add_length; i++) {
            address += characters.charAt(Math.floor(Math.random() * char_length));
        }

        employee.Address = address

        //random salary
        let salary = Math.floor(Math.random() * 120000) + 15000;
        employee.salary = salary

        //random department name
        let department_name = Math.floor(Math.random() * 3) + 1;
        if (department_name == 1) {
            employee.dept_name = 'IT';
        }
        else if (department_name == 2) {
            employee.dept_name = 'Accounting';
        }
        else if (department_name == 3) {
            employee.dept_name = 'Design';
        }

        //set Head
        employee.head_id = 'Employee'
        // let data_length = 1;
        //     let response = await axios.post('http://localhost:3000/findHead', {dept_name: employee.dept_name});
        //     let res_length = parseInt(response.data.response.length);
        //         if (res_length <= 0) {
        //             return res.status(400).send({ response: "แผนกนี้มีหัวหน้าแล้ว" })
        //         }
        //         else {
        //             employee.head_id = 'H'
        //        }
       
        //add level
        if (employee.salary <= 40000) {
            employee.level = 'jounior level';
        }
        else if (employee.salary > 40000 && employee.salary < 70000) {
            employee.level = 'middle level'
        } else {
            employee.level = 'senior level'
        }

        new Operator().addEmployeeOperator(employee, res);
        
        console.log("name : ", employee.name,
            " phone : ", employee.Tell,
            " Address : ", employee.Address,
            " salary : ", employee.salary,
            " Head : ", employee.head_id,
            " level : ", employee.level);
    }

    findHeadLogic = (employee, res) => {
        new Operator().findHeadOperator(employee, res);
    }

    showInfoLogic = (res) => {
        new Operator().showInfoOperator(res);
    }

    deleteInfoLogic = (employee,res) => {
        new Operator().deleteInfoOperator(employee,res);
    }

    // getDataLogic = (res) => {
    //     new Operator().getDataOperator(res);
    // }

    reportLogic = (res) => {
        new Operator().getDataOperator(res);
    }

    editUserLogic = (user, res) => {
        new Operator().editInfoOperator(user, res);
    }

}
module.exports = {
    Logic
}