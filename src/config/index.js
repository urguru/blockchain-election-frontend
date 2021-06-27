let config

if (process.env.REACT_APP_ENV === 'production') {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0x4183ad7951B29fd916272b330Ca4a5D33E7bba0a",
    }
} else {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0x4183ad7951B29fd916272b330Ca4a5D33E7bba0a",
    }
}

export default config;