const express = require("express");
const router = express.Router();
// const { authJWT } = require("../middleware/authVerify");
const organization = require("../controller/organization");


router.post("/addOrganization", organization.addOrganization);
// router.put("/updateSystemUser/:systemUserId", systemUser.updateSystemUser);
// router.delete("/deleteSystemUser/:systemUserId", systemUser.deleteSystemUser);
// router.get("/getSystemUserById/:systemUserId", systemUser.getSystemUserById);
// router.get("/getAllCreateOrg/:systemUserId", authJWT, systemUser.getAllCreateOrg);
// router.post("/orgStatus/:orgId", authJWT, systemUser.orgStatus);




module.exports = router