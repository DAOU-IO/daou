import * as functions from "firebase-functions";
import express from "express";
import { addUser, getAllUsers, updateUser, deleteUser  } from "./userController";
import { addDao, getAllDaos, updateDao, deleteDao } from "./daoController";

const app = express();
app.get("/", (req, res) => res.status(200).send("Hey there!"));
app.post("/users", addUser);
app.get("/users", getAllUsers);
app.patch("/users/:userId", updateUser);
app.delete("/users/:userId", deleteUser);

app.post("/daos", addDao);
app.get("/daos", getAllDaos);
app.patch("/daos/:daoId", updateDao);
app.delete("/daos/:daoId", deleteDao);

exports.app = functions.https.onRequest(app);