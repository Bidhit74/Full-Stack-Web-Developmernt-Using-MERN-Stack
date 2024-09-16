onmessage = function (data) {
    // console.log(data.data);
    const ans = data.data.reduce((accumulate, item) => item + accumulate, 0);
    postMessage(ans);
};
