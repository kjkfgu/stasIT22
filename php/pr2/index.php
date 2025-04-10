<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Пошук категорії</title>
</head>
<body>

<?php
$categories = [
    [
        'name' => 'техніка',
        'children' => [
            [
                'name' => 'компютери',
                'children' => [
                    ['name' => 'ноутбук'],
                    ['name' => 'стаціонарний пк']
                ]
            ],
            [
                'name' => 'телефон',
                'children' => [
                    ['name' => 'смартфон'],
                    ['name' => 'кнопковий телефон']
                ]
            ]
        ]
    ],
    [
        'name' => 'шмот',
        'children' => [
            ['name' => 'чоловічий'],
            ['name' => 'жіночий']
        ]
    ]
];

function logNode($node) {
    echo "Перевіряємо: " . $node['name'] . "<br>";
}

function findCategory($tree, $name, $callback) {
    foreach ($tree as $node) {
        $callback($node);
        if ($node['name'] === $name) {
            return $node;
        }
        if (isset($node['children'])) {
            $found = findCategory($node['children'], $name, $callback);
            if ($found) {
                return $found;
            }
        }
    }
    return null;
}

$searchName = 'Ноутбуки';

echo "<h3>Пошук категорії: $searchName</h3>";
$result = findCategory($categories, $searchName, 'logNode');

if ($result) {
    echo "<strong>Знайдено:</strong> " . $result['name'];
} else {
    echo "Категорію не знайдено.";
}
?>

</body>
</html>