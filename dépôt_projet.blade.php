<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Déposer un projet</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <div class="container">
        <h1>Déposer un projet</h1>
        <form action="/deposer-projet" method="POST">
            <div class="form-group">
                <label for="title">Titre du projet :</label>
                <input type="text" class="form-control" id="title" name="title" required>
            </div>
            <div class="form-group">
                <label for="price">Prix :</label>
                <input type="number" class="form-control" id="price" name="price" required>
            </div>
            <div class="form-group">
                <label for="description">Description :</label>
                <textarea class="form-control" id="description" name="description" rows="5" required></textarea>
            </div>
            <div class="form-group">
                <label for="delivery_time">Délai de livraison (en jours) :</label>
                <input type="number" class="form-control" id="delivery_time" name="delivery_time" required>
            </div>
            <button type="submit" class="btn btn-primary">Déposer le projet</button>
        </form>
    </div>
</body>

</html>
