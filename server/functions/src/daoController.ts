import { Response } from "express";
import { db } from "./config/firebase";
import { Dao } from "./utils/type";

type Request = {
    body: Dao,
    params: { daoId: string }
}

const adddao = async (req: Request, res: Response) => {
    const { name, about, discord_link, twitter, site } = req.body;

    try {
        const dao = db.collection('daos').doc();
        const daoObject = {
            id: dao.id,
            name,
            about,
            discord_link,
            twitter,
            site
        };

        dao.set(daoObject);

        res.status(200).send({
            status: "success",
            message: "dao added successfully",
            data: daoObject,
        });
    } catch(error: any) {
        res.status(500).json(error.message);
    }
};

const getAllDaos = async (req: Request, res: Response) => {
    try {
        const alldaos = await db.collection("daos").get();
        return res.status(200).json(alldaos.docs);
    } catch(error:any) {
        return res.status(500).json(error.message);
    }
};

const updateDao = async (req:Request, res:Response) => {
    const { body: { name, about, discord_link, twitter, site}, params:{ daoId } } = req;

    try {
        const dao = db.collection("daos").doc(daoId);
        const currentData = (await dao.get()).data() || {};
        const daoObject = {
            name: name || currentData.name,
            about: about || currentData.about,
            discord_link: discord_link || currentData.discord_link,
            twitter: twitter || currentData.twitter,
            site: site || currentData.site,
        };

        await dao.set(daoObject).catch(error => {
            return res.status(400).json({
                status: "error",
                message: error.message,
            })
        });

        return res.status(200).json({
            status:"success",
            message: "dao updated successfully",
            data: daoObject
        })
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
};

const deleteDao = async (req: Request, res: Response) => {
    const { daoId } = req.params
  
    try {
      const dao = db.collection('daos').doc(daoId);
  
      await dao.delete().catch(error => {
        return res.status(400).json({
          status: 'error',
          message: error.message
        })
      })
  
      return res.status(200).json({
        status: 'success',
        message: 'dao deleted successfully',
      })
    } catch(error:any) { 
        return res.status(500).json(error.message);
    }
};

export { adddao, getAllDaos, updateDao, deleteDao };