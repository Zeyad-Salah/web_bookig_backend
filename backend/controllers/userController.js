import User from "../models/User.js"



// create new tour
export const createUser = async (req,res) => {
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()

        res
            .status(200)
            .json({success:true, message: 'Successfully created', 
            data:savedUser})

    } catch (err) {
        res
            .status(500)
            .json({success:false, message: 'failed to create'})

    }
};

// update user
export const updateUser = async(req,res) => {

    const id = req.params.id
    try {

        const updatedUser = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res.status(200).json({
            success:true, 
            message: 'Successfully updated', 
            data:updatedUser});
        
    } catch (err) {
        res.status(500).json({
            success:false, 
            message: 'failed to update',
        });
        
    }
};

// delete user
export const deleteUser = async(req,res) => {

    const id = req.params.id
    try {

        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success: true, 
            message: 'Successfully deleted',
        });
        
    } catch (err) {
        res.status(500).json({
            success: false, 
            message: 'failed to delete',
        });
        
    }
}

// getSingle user
export const getSingleUser = async(req,res) => {
    const id = req.params.id
    try {

        const user = await Tour.findById(id);

        res.status(200).json({
            success: true, 
            message: 'Found Successfully',
            data: user
        });
        
    } catch (err) {
        res.status(404).json({
            success: false, 
            message: 'not found',
        });
        
    }
};

// getAll tour
export const getAllUser = async(req,res) => {

    try {
        const users = await Tour.find({})

        res.status(200).json({
            success: true, 
            message: 'Found Successfully',
            data: users
        });
        
    } catch (err) {
        res.status(404).json({
            success: false, 
            message: 'not found',
        });
    }
};
