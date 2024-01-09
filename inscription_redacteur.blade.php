<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Inscription rédacteur</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <div class="container">
        <h1>Inscription rédacteur</h1>
        <form action="/inscription-redacteur" method="POST">
            <div class="form-group">
                <label for="nom">Nom :</label>
                <input type="text" class="form-control" id="nom" name="nom" required>
            </div>
            <div class="form-group">
                <label for="prenom">Prénom :</label>
                <input type="text" class="form-control" id="prenom" name="prenom" required>
            </div>
            <div class="form-group">
                <label for="adresse">Adresse :</label>
                <input type="text" class="form-control" id="adresse" name="adresse" required>
            </div>
            <!-- Autres champs pour l'inscription du rédacteur -->
            <button type="submit" class="btn btn-primary">S'inscrire</button>
        </form>
    </div>
</body>

</html>
