import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUsersForSidebar = async () => {
    try{
        const loggedInUserId = req.user.__id;
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}.select("-password"));

        res.status(200).json(filteredUsers);

    }
    catch(error){
        console.log("Error in getting users for sidebar", error.message);
        res.status(500).json({message: "Error in getting users for sidebar"});
    }
}

export const getMessages = async () => {
    try {
        const {id:userToChatId} =  req.params
        const senderId = req.user._id

        const messages = await Message.find({
            $or: [
                { sender: senderId, receiver: userToChatId },
                { sender: userToChatId, receiver: senderId },
            ]
        })
        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getting messages",error.message);
        res.status(500).json({ message: "Error in getting messages" });
    }
}

export const sendMessage = async (req, res) => {
    try {
        const {text,image} = req.body;
        const {id:userToChatId} =  req.params
        const senderId = req.user._id

        let imageUrl;
        if(image){
            const uploadRespose = await cloudinary.uploader.upload(image);
            imageUrl = uploadRespose.secure_url;
        }

        const newmessage = new Message({
            senderId,
            receiverId,
            text,
            imgae:imageUrl,
        })

        await newmessage.save();

        //tod : real time functionality

        res.status(200).json(newmessage)
    } catch (error) {
        console.log("Error in sendMessage Controller:",error.message);
        res.status(500).json({error:"Inernal server error"})
    }
}