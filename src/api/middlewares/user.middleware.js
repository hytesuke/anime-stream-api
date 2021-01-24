export async function login(req, res) {
    try {
        return res.status(200).json({
            status: 200,
            success: true
        });
    } catch (error){
        return res.status(400).json({
            status: 400,
            success: false
        });
    }
}

export async function register(req, res){
    try {
        return res.status(200).json({
            status: 200,
            success: true
        });
    } catch (error){
        return res.status(400).json({
            status: 400,
            success: false
        });
    }
}