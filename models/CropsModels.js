const mongoose = require("mongoose");

const recordSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    typeOfCrop: {
      type: String,
      required: true,
    },
    landSize: {
      type: String,
      required: true,
      default: 0,
    },
    pesticideNames: {
      type: String,
      required: true,
    },
    pesticideAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    fertilizers: {
      type: String,
      required: true,
    },
    fertzAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    labourWorkers: {
      type: Number,
    },
    numberOfDays: {
      type: Number,
      deafault: 0,
    },
    numberOfLabourers: {
      type: Number,
      default: 0,
    },
    amountInvested: {
      type: Number,
      required: true,
      default: 0,
    },
    profitesMade: {
      type: Number,
      required: true,
      default: 0,
    },
    yearOfFarming: {
      type: Date,
      required: true,
      default: "0000-00-00",
    },
    imageCrop: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const FarmerRecords = mongoose.model("FarmerRecords", recordSchema);

module.exports = FarmerRecords;


