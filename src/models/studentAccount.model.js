import { Schema, model } from "mongoose";

const StudentAccountSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    CCCD: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tokens: [
      {
        access_token: {
          type: String,
          required: true,
        },
        refresh_token: {
          type: String,
          required: true,
        },
      },
    ],
    student_info: {
      birth: {
        type: Date,
      },
      sex: {
        type: Boolean,
      },
      province: { type: String },
      nationality: { type: String },
      nation: { type: String },
      religion: { type: String },
      CCCD_image_front: { type: String },
      CCCD_image_backside: { type: String },
    },
    contact_info: {
      household: {
        phone: { type: String },
        province: { type: String },
        district: { type: String },
        commune: { type: String },
        house_number: { type: String },
      },
      contact: {
        phone: { type: String },
        province: { type: String },
        district: { type: String },
      },
    },
    priority_info: {
      type: {
        type: String,
        enum: ["difference", "grade_12", "graduated"],
      },
      priority_area: { type: String, enum: ["KV1", "KV2", "KV2-NT", "KV3"] },
      priority_object: { type: String, enum: ["UT1", "UT2"] },
      graduated_year: { type: String },
      grade_10: {
        province: { type: String },
        district: { type: String },
        school_name: { type: String },
      },
      grade_11: {
        province: { type: String },
        district: { type: String },
        school_name: { type: String },
      },
      grade_12: {
        province: { type: String },
        district: { type: String },
        school_name: { type: String },
      },
    },
  },
  {
    collection: "student account",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
const StudentAccountModal = model("StudentAccount", StudentAccountSchema);
export default StudentAccountModal;
