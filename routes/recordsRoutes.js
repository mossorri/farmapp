const express = require("express");
const {
  getAllRecords,
  getRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/farmRecordscontroller");

const router = express.Router();

router.get("/", getAllRecords);

router.get("/:id", getRecord);

router.post("/", createRecord);

router.put("/:id", updateRecord);

router.delete("/:id", deleteRecord);

module.exports = router;
