function connectToDB() {
    console.log('Connection successful');
}

function runQuery(query) {
    console.log(`Executed ${query}`);
}

// Exporting methods individually one by one
module.exports.connectToDB = connectToDB;
module.exports.runQuery = runQuery;

// CommonJS modules - exporting all the methods as a single object
// module.exports = {
//     connectToDB,
//     runQuery
// };