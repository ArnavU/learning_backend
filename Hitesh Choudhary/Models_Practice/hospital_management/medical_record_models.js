import mongoose from "mongoose";

const medicalRecordSchema = new Schema({}, {timestamps: true});

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);