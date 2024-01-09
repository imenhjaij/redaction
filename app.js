const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const mysql = require('mysql2');

const db = require('./db'); // Importer la connexion à la base de données

const projetController = require('./controllers/projetController');
const redacteurController = require('./controllers/redacteurController');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Votre nom d'utilisateur MySQL par défaut dans XAMPP
  password: '', // Votre mot de passe MySQL par défaut dans XAMPP (s'il n'y en a pas, laissez la chaîne vide)
  database: 'projet_reseau', // Le nom de votre base de données
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connexion à la base de données réussie');
});

module.exports = connection;


app.use(bodyParser.json());

// Modèle de données pour les projets (simplifié)
let projets = [];

exports.afficherListeProjets = (req, res) => {
  db.query('SELECT * FROM projets', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération des projets :', err);
      return;
    }
    res.render('liste_projets', { projets: result }); // Renvoyer les résultats à votre vue
  });
};

// Autres opérations CRUD similaires en utilisant des requêtes SQL

// Récupérer tous les projets
app.get('/projets', (req, res) => {
    res.json(projets);
});

// Ajouter un nouveau projet
app.post('/projets', (req, res) => {
    const nouveauProjet = req.body;
    projets.push(nouveauProjet);
    res.status(201).json(nouveauProjet);
});
// Routes pour les clients
app.get('/depot-projet', projetController.afficherDepotProjet);
app.post('/deposer-projet', projetController.deposerProjet);
app.get('/liste-projets-client', projetController.afficherListeProjetsClient);

// Routes pour les rédacteurs
app.get('/inscription-redacteur', redacteurController.afficherInscriptionRedacteur);
app.post('/inscription-redacteur', redacteurController.inscrireRedacteur);
app.get('/liste-projets-redacteur', projetController.afficherListeProjetsRedacteur);

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
