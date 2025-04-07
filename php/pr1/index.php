<?php
// Завдання 1
$tovar1 = 150;
$tovar2 = 200;
$tovar3 = 180;

$total = $tovar1 + $tovar2 + $tovar3;
echo "Загальна вартість покупки: $total грн <br><br>";

// Завдання 2
$favoriteMovies = ["Інтерстеллар", "Готель Гранд-Будапешт", "Зоряні Війни", "Пірати Карибського Моря ", "Борат"];
echo "Мої улюблені фільми:<br><br>";
foreach ($favoriteMovies as $movie) {
    echo "- $movie<br>";
}

// Завдання 3
$user = [
    'login' => 'dima',
    'password' => 'dima228',
    'email' => 'dima22813374201488@gmail.com'
];

echo "<br>Дані користувача:<br><br>";
echo "Логін: " . $user['login'] . "<br>";
echo "Пароль: " . $user['password'] . "<br>";
echo "Email: " . $user['email'] . "<br><br>";

// Завдання 4
if (500 < $total) {
    $discount = $total * 0.1;
    $finalTotal = $total - $discount;
    echo "<br>Вам надано знижку 10%: -$discount грн<br>";
    echo "Підсумкова сума зі знижкою: $finalTotal грн<br>";
} else {
    echo "<br>Сума покупки менше 500 грн, знижка не надається<br>";
}

// Завдання 5
$inputLogin = 'dima';
$inputPassword = 'dima228';

if ($inputLogin === $user['login'] && $inputPassword === $user['password']) {
    echo "<br>Вхід успішний! Ласкаво просимо на AZOV.com, " . $user['login'] . "!<br>";
} else {
    echo "<br>Помилка! Невірний логін або пароль.<br>";
}
?>