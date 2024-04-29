// const express = require('express');
// const bcrypt = require('bcryptjs');
// const cors = require('cors');
// const pool = require('../database/db');
//
// const app = express();
//
// // Middleware
// app.use(cors());
// app.use(express.json());
//
// // Login endpoint
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//
//     try {
//         const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
//
//         if (user.rows.length === 0) {
//             return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
//         }
//
//         const validPassword = await bcrypt.compare(password, user.rows[0].password);
//
//         if (!validPassword) {
//             return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
//         }
//
//         // Todo: générer un token JWT pour la gestion de l'auth
//
//         res.json({ message: 'Connexion réussie', user: user.rows[0] });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: 'Une erreur est survenue' });
//     }
// });
//
// // Signup endpoint
// app.post('/signup', async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//
//         // Hash du mot de passe
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
//
//         const newUser = await pool.query(
//             'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
//             [name, email, hashedPassword]
//         );
//
//         res.json({ message: 'Utilisateur créé', user: newUser.rows[0] });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: 'Une erreur est survenue' });
//     }
// });
//
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
