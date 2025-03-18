//Admin
export const admin = (req,res) => {
    try {        
        res.status(200).json({message:"welcome Admin"})
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"You are not authorized"})
    }
}
//Manager
export const Manager = (req,res) => {
    try {
        
        res.status(200).json({message:"welcome Manager"})
    } catch (err) {
        res.status(500).json({message:"You are not authorized"})
    }
}
//User
export const Local = (req,res) => {
    try {
        
        res.status(200).json({message:"welcome All"})
    } catch (err) {
        res.status(500).json({message:"Need to login"})
    }
}