let config

if (process.env.REACT_APP_ENV === 'production') {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
    }
} else {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0x953513d3AD75027120493679eC6dD024bb98ee10",
    }
}
export default config;
