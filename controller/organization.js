const mongoose = require('mongoose');
const Organization = require('../models/organizationModel');
const SystemUser = require('../models/systemUserModel');
const { getDatabaseConnection } = require('../config/mongo');
// const { initModels } = require('../models/indexModel');


exports.addOrganization = async (req, res) => {
    try {
        const {
            organizationName,
            domainName,
            brn,
            gst,
            industryId,
            industry,
            foundedDate,
            taxId,
            organizationType,
            logo,
            status,
            organizationIcon,
            organizationAddress,
            contactDetails,
            email,
            phoneNumber,
            registrationDate,
            employeesCount,
            isVerified,
            systemUserId
        } = req.body;

        // Validate required fields
        if (!organizationName || !systemUserId) {
            return res.status(400).json({
                status: 'error',
                message: 'Organization name and system user ID are required'
            });
        }

        // Generate a new ObjectId for the organization
        const organizationId = new mongoose.Types.ObjectId();

        // Connect to the new organization's database
        const OrganizationDB = await getDatabaseConnection(organizationId);
        if (!OrganizationDB) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to connect to organization database'
            });
        }

        const OrganizationModel = OrganizationDB.model('Organization', Organization);

        const newOrganization = new OrganizationModel({
            _id: organizationId,
            organizationName,
            domainName,
            brn,
            gst,
            systemUserId,
            industryId,
            industry,
            foundedDate,
            taxId,
            organizationType,
            logo,
            status,
            organizationIcon,
            organizationAddress,
            contactDetails,
            email,
            phoneNumber,
            registrationDate: registrationDate || Date.now(),
            employeesCount,
            isVerified
        });

        // Save the organization to the database
        const savedOrganization = await newOrganization.save();

        // Update the system user
        const userData = await SystemUser.findByIdAndUpdate(
            systemUserId,
            {
                $push: {
                    createOrg: {
                        organizationId: savedOrganization._id,
                        databaseName: savedOrganization._id.toString(),
                        organizationName: organizationName,
                    }
                }
            },
            { new: true }
        );

        if (!userData) {
            return res.status(404).json({
                status: 'error',
                message: 'System user not found'
            });
        }

        // Respond with success status
        return res.status(201).json({
            status: 'success',
            message: 'Organization added successfully',
            data: savedOrganization
        });

    } catch (error) {
        console.error('Error adding organization:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            error: error.message
        });
    }
};