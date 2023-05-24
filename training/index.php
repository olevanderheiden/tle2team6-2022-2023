<?php
require_once ('../components/head.php');
InitHead('Admin Training');
?>
<body>
<h2>Admin Page</h2>
<h3>On this page the admin can train and download the model</h3>

<!--ToDo: add option to choose between camera or images-->

<video id="video" width="640" height="480" autoplay></video>

<h6><span id="loading">Loading base model...</span> | <span id="video-status">Loading video...</span></h6>
<form id="">
    <label for="product">Welk Product?</label><br />
    <select id="product">
        <option value="new" selected>Nieuw product</option>
        <option value="existing">Bestaand product</option>
    </select><br />
    <label for="training-data">Kies trainingsbestanden</label><br />
    <input id="training-data" accept="image/*" type="file" multiple/><br />

    <div id="hidden-if-existing">
        <label for="brand">Merk</label><br />
        <input id="brand" type="text"/><br />
        <label for="name">Naam</label><br />
        <input id="name" type="text"/><br />
        <label for="description">Omschrijving</label><br />
        <textarea id="description"></textarea><br />
        <label for="image">Voorbeeldafbeelding</label><br />
        <input id="image" type="text"/><br />
        <img id="preview-image" src="" alt="voorbeeldafbeelding vanuit het vorige tekstveld"><br />
        <label for="average-shelf-life-type">Type Houdbaarheidsdatum</label><br />
        <select id="average-shelf-life-type">
            <option value="THT" selected>Tenminste Houdbaar tot</option>
            <option value="TGT">Te Gebruiken Tot</option>
        </select><br />
        <label for="average-shelf-life">Aantal dagen houdbaar na aankoop</label><br />
        <input id="average-shelf-life" type="number"/> <span id="date-notation">dagen tot THT-datum</span><br />
        <label for="size-type">Type Grootte</label><br />
        <select id="size-type">
            <option value="ML" selected>Volume in Milliliters</option>
            <option value="Gram">Gewicht in gram</option>
        </select><br />
        <label for="size">Grootte</label><br />
        <input id="size" type="number"/> <span id="size-notation">ML</span><span id="readable-size"> (= 0L)</span><br />

        <label for="product-category">Productcategorie</label><br />
        <select id="product-category">
            <option value="dairy">Zuivel</option>
            <option value="meat_poultry">Vlees en gevogelte</option>
            <option value="seafood">Vis en zeevruchten</option>
            <option value="eggs">Eieren</option>
            <option value="vegetables">Groenten</option>
            <option value="fruit">Fruit</option>
            <option value="beverages">Dranken</option>
            <option value="sauces_dressings">Sauzen en dressings</option>
            <option value="leftovers_canned">Restjes en ingeblikt</option>
            <option value="other">Overig</option>
        </select><br />
        <br />
        <button id="add-info-button">Product Toevoegen aan lijst</button><br />
    </div>

    <div id="hidden-if-new">
        <label for="item-select">Kies hieronder het bestaande product</label><br />
        <select id="item-select"></select><br />
        <br />
        <button id="add-image-button">Afbeelding Toevoegen aan Model</button><br />
    </div>
</form>

<br />
<p><button id="train">Train</button><span id="loss"></span></p>
<br />
<p><button id="save-button">Save</button></p>
<br />
<p>
    <button id="predict">Start guessing!</button><br />
    My guess is: <span id="result">...</span>
    , with a confidence of <span id="confidence">...</span>.
    <br />
    My guess is (CLEAN): <span id="result_clean">...</span>
</p>
<script src="../includes/js/scratch.js"></script>
</body>
</html>