// Logique pour gérer les projets côté client

exports.afficherDepotProjet = (req, res) => {
    res.render('depot_projet'); // Afficher le formulaire de dépôt de projet
};

exports.deposerProjet = (req, res) => {
    // Logique pour déposer un projet dans la base de données
    res.redirect('/liste-projets-client');
};

exports.afficherListeProjetsClient = (req, res) => {
    // Logique pour récupérer tous les projets du côté client depuis la base de données
    res.render('liste_projets_client', { projets: projets }); // Render la vue avec la liste des projets
};

exports.afficherListeProjetsRedacteur = (req, res) => {
    // Logique pour récupérer les projets disponibles pour les rédacteurs
    res.render('liste_projets_redacteur'); // Render la vue avec la liste des projets disponibles
};
