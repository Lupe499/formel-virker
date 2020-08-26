function quorinator() {
    fetch("https://quotes.rest/qod")
    .then(res => res.json())
    .then(function (data) {
        let quote = document.querySelector(".quote");
        quote.innerText = data.contents.quotes[0].quote;
    });
}
export default quorinator;