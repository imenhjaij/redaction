// Logique pour gérer les rédacteurs

exports.afficherInscriptionRedacteur = (req, res) => {
    res.render('inscription_redacteur'); // Afficher le formulaire d'inscription du rédacteur
};

exports.inscrireRedacteur = (req, res) => {
    // Logique pour inscrire un rédacteur dans la base de données
    res.redirect('/liste-projets-redacteur');
};
