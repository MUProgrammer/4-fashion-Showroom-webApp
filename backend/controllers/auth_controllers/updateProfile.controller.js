import User from "../../models/user_models/user.models";


const updateProfile = async (req, res) => {
    try {
        // fetch the user from database
        const user = await User.findById(req.user._id);

    } catch (error) {
        
    }
}
export default updateProfile