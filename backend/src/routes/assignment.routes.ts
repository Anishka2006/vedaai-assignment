const router =
  require("express").Router();

const {
  createAssignment,
  getAssignment,
} = require(
  "../controllers/assignment.controller"
);

router.post(
  "/",
  createAssignment
);

router.get(
  "/:id",
  getAssignment
);

module.exports = router;