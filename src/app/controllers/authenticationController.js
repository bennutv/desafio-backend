class AuthenticationController {

    onLogin(req, res) {
        res.status(200).json({message: 'success'})
    }

    onLogout(req, res) {
        res.status(200).json({message: 'success'})
    }
}

module.exports = new AuthenticationController();