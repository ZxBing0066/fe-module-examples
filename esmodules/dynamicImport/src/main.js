import('./dep1.js');
import('./dep2.js');

console.log('ready to load deps');

(async () => {
    console.log('wait deps ready');
    const [dep1, dep2] = await Promise.all([import('./dep1.js'), import('./dep2.js')]);
    console.log(dep1, dep2);
    dep1.default.log();
    dep2.default.log();
})();
