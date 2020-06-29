
const fetchMarketInfo = () => {
    fetch(`http://localhost:3000/api/`)
        .then(res => res.json())
        .then((result) => {
            return result;
        }).catch((error) => {
            return error;
    })
}

export default fetchMarketInfo;