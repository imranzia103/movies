import express from "express";


// controllers

//misslewares


const router = express.Router();


router.route("/").post(createUser);


export default router;

