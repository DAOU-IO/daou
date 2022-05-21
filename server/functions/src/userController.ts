import { Response } from "express";
import { db } from "./config/firebase";
import { FirebaseError } from '@firebase/util';
import { User } from "./utils/type";

type Request = {
    body: User,
    params: {address: string}
}

const addUser = async (req: Request, res: Response) => {
    const { avatar, accounts, messages, spark_count } = req.body;

    try {
        const user = db.collection('users').doc();
        const userObject = {
            id: user.id,
            avatar,
            accounts,
            messages,
            spark_count
        };

        user.set(userObject);

        res.status(200).send({
            status: "success",
            message: "user added successfully",
            data: userObject,
        });
    } catch(error) {
        let errorMessage = "Failed to add add user."
        if (error instanceof FirebaseError) {
            res.status(500).json(error.message);
        }
        res.status(500).json(errorMessage);
    }
};

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers: User[] = [];
        const querySnapshot = await db.collection("users").get();
        querySnapshot.forEach((doc:any) => allUsers.push(doc.data()));
        return res.status(200).json(allUsers);
    } catch(error) {
        let errorMessage = "Failed to get the user."
        if (error instanceof FirebaseError) {
            res.status(500).json(error.message);
        }
        return res.status(500).json(errorMessage);
    }
};

const updateUser = async (req:Request, res:Response) => {
    const { body: {avatar, accounts, messages, spark_count}, params:{ address } } = req;

    try {
        const user = db.collection("entries").doc(address);
        const currentData = (await user.get()).data() || {};
        const userObject = {
            avatar: avatar || currentData.avatar,
            accounts: accounts || currentData.accounts,
            messages: messages || currentData.messages,
            spark_count: spark_count || currentData.spark_count,
        };

        await user.set(userObject).catch(error => {
            return res.status(400).json({
                status: "error",
                message: error.message,
            })
        });

        return res.status(200).json({
            status:"success",
            message: "user updated successfully",
            data: userObject
        })
    } catch (error) {
        let errorMessage = "Failed to update the user."
        if (error instanceof FirebaseError) {
            res.status(500).json(error.message);
        }
        return res.status(500).json(errorMessage);
    }
};

const deleteUser = async (req: Request, res: Response) => {
    const { address } = req.params
  
    try {
      const user = db.collection('entries').doc(address)
  
      await user.delete().catch(error => {
        return res.status(400).json({
          status: 'error',
          message: error.message
        })
      })
  
      return res.status(200).json({
        status: 'success',
        message: 'user deleted successfully',
      })
    } catch(error) { 
        let errorMessage = "Failed to update the user."
        if (error instanceof FirebaseError) {
            res.status(500).json(error.message);
        }
        return res.status(500).json(errorMessage);
    }
};

export { addUser, getAllUsers, updateUser, deleteUser };