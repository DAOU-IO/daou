import * as functions from "firebase-functions";
import express from "express";
import { addUser, getAllUsers, updateUser, deleteUser  } from "./userController";

const app = express();
app.get("/", (req, res) => res.status(200).send("Hey there!"));
app.post("/users", addUser);
app.get("/users", getAllUsers);
app.patch("/users/:userId", updateUser);
app.delete("/users/:userId", deleteUser);

exports.app = functions.https.onRequest(app);