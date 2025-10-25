const newman = require('newman');

const options = {
    collection: require('./collection.json'),
    environment: require('./environment.json'),
    iterationData: require('./iteration_data.json'),
    globals: require('./postman_globals.json'),
    timeoutRequest: 20000,
    insecure: true,
    iterationCount: 1,
    folder: [],
    reporters: ['cli', 'htmlextra'],
    reporter: {
        htmlextra: {
            logs: true,
            titleSize: 4,
            omitHeaders: true,
            omitRequestBodies: true,
            omitResponseBodies: true,
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
