export const questions = [
  {
    name: "Что такое замыкание в JavaScript?",
    chance: 0.75,
    answer: `Замыкание в JavaScript — это функция, которая запоминает свое лексическое окружение, даже после того, как она была выполнена. Лексическое окружение — это набор переменных, доступных в области видимости функции в момент ее создания. Замыкания позволяют функциям получать доступ к переменным из внешнего контекста, даже после завершения этого контекста.
Пример: function outerFunction() { let outerVariable = "I am outside!";
function innerFunction() {
    console.log(outerVariable); // замыкание
}
return innerFunction;
}
const myClosure = outerFunction(); myClosure(); // Выведет: "I am outside!"`,
    tags: ["Frontend Dev"],
  },
  {
    name: "Объясните разницу между HTTP и HTTPS",
    chance: 0.85,
    tags: ["Frontend Dev", "Backend Dev", "QA"],
  },
  {
    name: "Как работает garbage collector в Java?",
    chance: 0.6,
    tags: ["Backend Dev"],
  },
  {
    name: "Что такое ViewController в IOS Dev?",
    chance: 0.55,
    tags: ["IOS Dev"],
  },
  {
    name: "Какие инструменты используют для CI/CD?",
    chance: 0.8,
    tags: ["Backend Dev", "QA"],
  },
  {
    name: "Объясните принцип работы машинного обучения",
    chance: 0.65,
    tags: ["Data Sciense"],
  },
  {
    name: "Как работать с SQLite в Android Dev?",
    chance: 0.7,
    tags: ["Android Dev"],
  },
  {
    name: "Что такое async/await в JavaScript?",
    chance: 0.78,
    tags: ["Frontend Dev"],
  },
  {
    name: "Объясните принципы работы REST API",
    chance: 0.9,
    tags: ["Frontend Dev", "Backend Dev"],
  },
  {
    name: "Как написать UI тесты для мобильного приложения?",
    chance: 0.5,
    tags: ["QA", "IOS Dev", "Android Dev"],
  },
  {
    name: "Что такое SQL Injection и как его предотвратить?",
    chance: 0.82,
    tags: ["Backend Dev", "QA"],
  },
  {
    name: "Как создать адаптивный дизайн для веб-приложения?",
    chance: 0.77,
    tags: ["Frontend Dev"],
  },
  {
    name: "Что такое микросервисы и как их использовать?",
    chance: 0.68,
    tags: ["Backend Dev"],
  },
  {
    name: "Как сделать дебаггинг мобильного приложения на Android Dev?",
    chance: 0.72,
    tags: ["Android Dev"],
  },
  {
    name: "Что такое Core Data в IOS Dev?",
    chance: 0.64,
    tags: ["IOS Dev"],
  },
  {
    name: "Какие виды тестирования существуют?",
    chance: 0.88,
    tags: ["QA"],
  },
  {
    name: "Как оптимизировать SQL запросы?",
    chance: 0.73,
    tags: ["Backend Dev"],
  },
  {
    name: "Объясните разницу между Supervised и Unsupervised Learning",
    chance: 0.66,
    tags: ["Data Sciense"],
  },
  {
    name: "Что такое WebSocket и где его использовать?",
    chance: 0.76,
    tags: ["Frontend Dev", "Backend Dev"],
  },
  {
    name: "Как сделать анимацию в CSS?",
    chance: 0.74,
    tags: ["Frontend Dev"],
  },
  {
    name: "Что такое TDD и как его применять?",
    chance: 0.81,
    tags: ["Backend Dev", "QA"],
  },
  {
    name: "Как работать с push-уведомлениями в IOS Dev?",
    chance: 0.61,
    tags: ["IOS Dev"],
  },
  {
    name: "Объясните разницу между виртуальной и дополненной реальностью",
    chance: 0.58,
    tags: ["Android Dev", "IOS Dev"],
  },
  {
    name: "Как сделать ленивую загрузку изображений на веб-странице?",
    chance: 0.69,
    tags: ["Frontend Dev"],
  },
  {
    name: "Что такое Big Data и как с ней работать?",
    chance: 0.63,
    tags: ["Data Sciense"],
  },
  {
    name: "Как настроить автоматическое тестирование мобильного приложения?",
    chance: 0.67,
    tags: ["QA", "IOS Dev", "Android Dev"],
  },
  {
    name: "Что такое OAuth и как его использовать?",
    chance: 0.84,
    tags: ["Backend Dev"],
  },
  {
    name: "Объясните разницу между float и double в Java",
    chance: 0.71,
    tags: ["Backend Dev"],
  },
  {
    name: "Как организовать state management в React?",
    chance: 0.79,
    tags: ["Frontend Dev"],
  },
  {
    name: "Что такое контейнеризация и как Docker в этом помогает?",
    chance: 0.83,
    tags: ["Backend Dev", "QA"],
  },
  {
    name: "Как работать с ML-моделями в Python?",
    chance: 0.64,
    tags: ["Data Sciense"],
  },
  {
    name: "Что такое тестирование на основе рисков?",
    chance: 0.77,
    tags: ["QA"],
  },
  {
    name: "Объясните архитектуру MVC",
    chance: 0.87,
    tags: ["Frontend Dev", "Backend Dev", "IOS Dev"],
  },
  {
    name: "Как сделать интеграцию с Firebase в Android Dev?",
    chance: 0.73,
    tags: ["Android Dev"],
  },
  {
    name: "Что такое Dependency Injection и зачем оно нужно?",
    chance: 0.82,
    tags: ["Backend Dev", "Android Dev", "IOS Dev"],
  },
  {
    name: "Как настроить работу с геолокацией в IOS Dev?",
    chance: 0.66,
    tags: ["IOS Dev"],
  },
  {
    name: "Объясните разницу между кэшированием и буферизацией",
    chance: 0.75,
    tags: ["Frontend Dev", "Backend Dev"],
  },
  {
    name: "Как обрабатывать исключения в Java?",
    chance: 0.68,
    tags: ["Backend Dev"],
  },
  {
    name: "Что такое JSON и как его парсить?",
    chance: 0.85,
    tags: ["Frontend Dev", "Backend Dev", "Android Dev", "IOS Dev"],
  },
  {
    name: "Как работает Git и какие команды основные?",
    chance: 0.88,
    tags: ["Frontend Dev", "Backend Dev", "QA", "Android Dev", "IOS Dev"],
  },
  {
    name: "Как защитить веб-приложение от CSRF атак?",
    chance: 0.76,
    tags: ["Frontend Dev", "Backend Dev", "QA"],
  },
  {
    name: "Что такое A/B тестирование?",
    chance: 0.78,
    tags: ["QA", "Data Sciense"],
  },
  {
    name: "Как использовать Machine Learning в рекомендационных системах?",
    chance: 0.67,
    tags: ["Data Sciense"],
  },
  {
    name: "Как настроить автоматическое деплоймент приложения?",
    chance: 0.72,
    tags: ["Backend Dev", "QA"],
  },
  {
    name: "Что такое Redux и как его использовать?",
    chance: 0.79,
    tags: ["Frontend Dev"],
  },
  {
    name: "Как организовать рендеринг на сервере (SSR) в React?",
    chance: 0.74,
    tags: ["Frontend Dev"],
  },
  {
    name: "Как настроить мониторинг и логи в микросервисной архитектуре?",
    chance: 0.81,
    tags: ["Backend Dev"],
  },
  {
    name: "Что такое NLP и как его применяют?",
    chance: 0.65,
    tags: ["Data Sciense"],
  },
  {
    name: "Как использовать SwiftUI для разработки IOS Dev приложений?",
    chance: 0.63,
    tags: ["IOS Dev"],
  },
];
