exports.signoutUser = (req, res) => {
    res.clearCookie('auth_token');
    res.json({success:true});
}