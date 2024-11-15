// Масив коктейлів з інгредієнтами та посиланнями на рецепти
const cocktails = [
    {
        name: "Мохіто",
        ingredients: ["м'ята", "ром", "лайм", "цукор", "газована вода"],
        url: "mojito.html"
    },
    {
        name: "Мартіні",
        ingredients: ["джин", "вермут"],
        url: "martini.html"
    },
    {
        name: "Піна Колада",
        ingredients: ["ром", "кокосовий крем", "ананасовий сік"],
        url: "pina_colada.html"
    },
    {
        name: "Маргарита",
        ingredients: ["текіла", "лаймовий сік", "апельсиновий лікер"],
        url: "margarita.html"
    },
    {
        name: "Апероль Шприц",
        ingredients: ["апероль", "просекко", "содова вода"],
        url: "aperol_spritz.html"
    },
    {
        name: "Джин Тонік",
        ingredients: ["джин", "тонік", "лайм"],
        url: "gin_tonic.html"
    },

];

// Функція для пошуку коктейлів за інгредієнтом
function searchCocktails() {
    // Отримуємо значення інгредієнта
    const searchTerm = document.getElementById('ingredient').value.toLowerCase();
    const resultDiv = document.getElementById('search-result');

    // Очищаємо попередні результати пошуку
    resultDiv.innerHTML = '';

    // Якщо поле пошуку порожнє, вивести повідомлення
    if (!searchTerm) {
        resultDiv.innerHTML = '<p>Будь ласка, введіть інгредієнт для пошуку.</p>';
        return;
    }

    // Фільтруємо коктейлі за інгредієнтом
    const filteredCocktails = cocktails.filter(cocktail =>
        cocktail.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
    );

    // Якщо є результати
    if (filteredCocktails.length > 0) {
        filteredCocktails.forEach(cocktail => {
            const cocktailElement = document.createElement('div');
            cocktailElement.classList.add('cocktail-result');

            cocktailElement.innerHTML = `
                <h3><a href="${cocktail.url}">${cocktail.name}</a></h3>
                <p>Інгредієнти: ${cocktail.ingredients.join(", ")}</p>
            `;
            resultDiv.appendChild(cocktailElement);
        });
    } else {
        resultDiv.innerHTML = '<p>Не знайдено коктейлів з таким інгредієнтом.</p>';
    }
}

// Опціонально: додати функцію затримки пошуку після введення
let typingTimer;                // Таймер для затримки
const doneTypingInterval = 500; // Затримка в мілісекундах

document.getElementById('ingredient').addEventListener('input', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(searchCocktails, doneTypingInterval);
});
