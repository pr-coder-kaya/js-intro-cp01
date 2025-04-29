let env = 'abc'; // this is getting testing environment as a string

let baseUrl;

switch (env) {
    case 'local':
        baseUrl = 'localhost:3000';
        break;
    case 'dev':
    case 'it':
        baseUrl = 'https://www.dev.tg.com';
        break;
    case 'tst':
    case 'qa':
        baseUrl = 'https://www.tst.tg.com';
        break;
    case 'stg':
    case 'staging':
        baseUrl = 'https://www.stg.tg.com';
        break;
    case 'prod':
        baseUrl = 'https://www.tg.com';
        break;
    default:
        throw new Error(`Provided ${env} did not match any cases!!!`);
}

console.log(baseUrl);

// switch supports strings, numbers, enums
// JS switch also supports boolean cases

let number = 1; // 1, 100

switch (true) {
    case number <= 25:
        console.log('FIRST');
        break;
    case number <= 50:
        console.log('SECOND');
        break;
    case number <= 75: // true
        console.log('THIRD');
        break;
    default:
        console.log('FOURTH');
}

if (number <= 25) console.log('FIRST');
else if (number <= 50) console.log('SECOND');
else if (number <= 75) console.log('THIRD');
else console.log('FOURTH');

