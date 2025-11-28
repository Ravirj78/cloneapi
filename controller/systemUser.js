const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const path = require('path');
const SystemUser = require('../models/systemUserModel');

exports.addSystemUser = async (req, res) => {
    try {
        const { systemUserName, systemUserPassword, systemUserEmail, categoryId } = req.body;

        const emailExists = await SystemUser.findOne({ systemUserEmail });

        if (emailExists) {
            return res.status(409).json({ message: 'Email is already present in the database' });
        }

        const SystemUserData = new SystemUser({
            systemUserName,
            systemUserPassword: bcrypt.hashSync(systemUserPassword, 10),
            systemUserEmail,
            categoryId
        });

        const savedSystemUserData = await SystemUserData.save();


        // Respond with success status
        return res.status(201).send({
            status: 'success',
            message: 'saved successfully',
            data: savedSystemUserData
        });

    } catch (error) {
        console.error('Error saving SystemUser:', error);
        return res.status(500).send({
            status: 'error',
            message: 'Internal Server Error',
            error: error.message,
        });
    }
}