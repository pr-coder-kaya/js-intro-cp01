const getUrl = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isAppUp = true;
        if(isAppUp) resolve('Loading app url...');
        else reject('Could not load app url...');
    }, 2000);
});

console.log(getUrl);