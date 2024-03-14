import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    neme:{
        type: String,
        required: true
    },
    diagnosedWith:{
        type: String,
        required: true
    },
    address :{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum:["Male", "Female","Other"],
    },
    admittedIn :{
        type :mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        required: true
    }
}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);
