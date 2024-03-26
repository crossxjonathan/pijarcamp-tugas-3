const divideAndSort = (value) => {
    const result = parseInt(value
        .toString()
        .split(0)
        .map((item) => item.split('').sort().join(''))
        .join(""));
    console.log((result));
}

divideAndSort(5956560159466056)