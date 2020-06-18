let v = 1;
export { v };

setInterval(() => {
    console.log(`v updated`, ++v);
}, 1000);
