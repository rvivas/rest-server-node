const jwt = require('jsonwebtoken');


//==================
// Verificar token
//==================

let verificaToken = (req, resp, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return resp.status(400).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }

        req.usuario = decoded.usuario;
        next();
    })

};

let verificaAdminRole = (req, resp, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
        return;
    } else {
        return resp.status(403).json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })
    }
};

module.exports = {
    verificaToken,
    verificaAdminRole
}