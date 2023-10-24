const Records = require("../models/CropsModels");
const asyncHandler = require("express-async-handler");

// get all records
const getAllRecords = asyncHandler(async (req, res) => {
  try {
    const records = await Records.find({});
    res.status(200).json(records);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// get a single record
const getRecord = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const singleRecord = await Records.findById(id);
    res.status(200).json(singleRecord);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// create a record
const createRecord = asyncHandler(async (req, res) => {
  try {
    const newRecords = await Records.create(req.body);
    res.status(200).json(newRecords);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update a record
const updateRecord = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const updatingRecords = await Records.findByIdAndUpdate(id, req.body);
    // we cannot find any updatingRecords in database
    if (!updatingRecords) {
      res.status(404);
      throw new Error(`cannot find any product with ID ${id}`);
    }
    const updatedRecords = await Records.findById(id);
    res.status(200).json(updatedRecords);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// delete a product from database
const deleteRecord = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deletingRecords = await Records.findByIdAndDelete(id);
    if (!deletingRecords) {
      res.status(404);
      throw new Error(`cannot find any deletingRecords with ID ${id}`);
    }
    res.status(200).json(deletingRecords);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getAllRecords,
  getRecord,
  createRecord,
  updateRecord,
  deleteRecord,
};
