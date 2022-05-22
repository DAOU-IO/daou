import { Response } from "express";
import { db } from "./config/firebase";
import { User } from "./utils/type";

type Request = {
    body: User,
    params: { userId: string }
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
    } catch(error: any) {
        res.status(500).json(error.message);
    }
};

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await db.collection("users").get();
        return res.status(200).json(allUsers.docs);
    } catch(error:any) {
        return res.status(500).json(error.message);
    }
};

const updateUser = async (req:Request, res:Response) => {
    const { body: {avatar, accounts, messages, spark_count}, params:{ userId } } = req;

    try {
        const user = db.collection("users").doc(userId);
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
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
};

const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params
  
    try {
      const user = db.collection('users').doc(userId);
  
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
    } catch(error:any) { 
        return res.status(500).json(error.message);
    }
};

export { addUser, getAllUsers, updateUser, deleteUser };