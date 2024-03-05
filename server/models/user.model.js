import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: true
        },
        lastName: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        accountType: {
            type: String,
            enum: ["Admin", "Student", "Instructor"],
            required: true
        },
        additionalDetails: {
            type: Schema.Types.ObjectId,
            ref: "Profile",
            required: true
        },
        courses: [
            {
                type: Schema.Types.ObjectId,
                ref: "Course"
            }
        ],
        image: {
            type: String,
            required: true
        },
        courseProgress: [
            {
                type: Schema.Types.ObjectId,
                ref: "CourseProgress"
            }
        ],
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", userSchema);