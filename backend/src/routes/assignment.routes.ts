

const express = require("express");

const { createAssignment: createAssignmentHandler } = require("../controllers/assignment.controller");

const router = express.Router();

router.post("/create", createAssignmentHandler);

module.exports = router;