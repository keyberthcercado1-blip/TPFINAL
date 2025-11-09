
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'TU_CLAVE_SECRETA_SUPER_SEGURA'; 

const HARDCODED_HASH = '$2b$10$tMh4cR.pY3m8jS2tD7y.p.xN3gP8h0z.L5W6R7Y4J9R'; 

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Usuario Fijo y Hardcodeado para la prueba
    const HARDCODED_USER = {
        email: 'daniela.biz@desarrollAr.com',
        password_hash: HARDCODED_HASH,
        id: 1,
        role_id: 1 
    };

    

    try {
       
        if (email !== HARDCODED_USER.email) {
            return res.status(401).json({ message: 'Credenciales inválidas.' });
        }

     
        const isMatch = (password === '1234'); 

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas.' });
        }


        const role = HARDCODED_USER.role_id === 1 ? 'talento' : 'ideador'; 
        const token = jwt.sign({ userId: HARDCODED_USER.id, role: role }, JWT_SECRET, { expiresIn: '1h' });

       
        res.status(200).json({ 
            message: 'Inicio de sesión exitoso.',
            token: token,
            role: role,
            user_name: 'Daniela Bizuara'
        });

    } catch (error) {
        console.error('Error durante el login:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

module.exports = { loginUser };