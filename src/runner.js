const newman = require('newman');

const options = {
    collection: require('./collection.json'),
    environment: require('./environment.json'),
    iterationData: require('./iteration_data.json'),
    globals: require('./postman_globals.json'),
    insecure: true,
    iterationCount: 1,
    folder: ["Авторизація", "MoneyBox | Поповнення Збиралочки"],
    reporters: ['cli', 'htmlextra'],
    reporter: {
        htmlextra: {
            logs: true,
            titleSize: 4,
            omitHeaders: true,
            export: './report.html',
            browserTitle: 'Newman Report',
            title: 'API Testing Summary Report',
        }
    }
};

newman.run(options, function (err) {
    if (err) {
        console.error('Помилка при запуску колекції:', err);
        process.exit(1);
    }
});