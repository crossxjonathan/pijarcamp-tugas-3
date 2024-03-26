// const hobby = ["berenang", "membaca buku", "bermain bola"];

// const hobbyWithCharCount = hobby.map((result, index) => 
// `${index + 1} : ${result} : ${result.length} huruf`)

// console.log(hobbyWithCharCount)

// =============================================================

// const systemBalance = 1_000_000;

// const userInvoice = [
//     {
//         name: "jonathan",
//         cash: 20_000
//     },
//     {
//         name: "adit",
//         cash: 90_000
//     },
//     {
//         name: "anwar",
//         cash: 100_000
//     },
//     {
//         name: "ilham",
//         cash: 50_000
//     },
//     {
//         name: "ilham",
//         cash: 10_000
//     }
// ]

// const totalBalance = userInvoice.map(r => r.cash)
// .reduce((prev, current) => prev + current, systemBalance);

// const sortedCashOfInvoice = userInvoice.map(r => r.cash).sort((a, b)=> a - b);

// console.log(totalBalance);
// console.log(sortedCashOfInvoice);

// =============================================================

// const randomQuoteUrl = "https://jsonplaceholder.typicode.com/posts"


// const fetcher = async () => {
//     const api = await fetch(randomQuoteUrl);
//     const response = await api.json();
//     return response
// }

// fetcher(randomQuoteUrl).then(r => console.log(r))

// ===============================================================

// async function getRandomQuote() {
//     const randomQuote = await fetch(randomQuoteUrl);
//     const response = await randomQuote.json();
//     return response;
// }

// getRandomQuote().then(r => console.log(r));