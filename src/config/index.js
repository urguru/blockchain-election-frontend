let config

if (process.env.REACT_APP_ENV === 'production') {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: process.env.CONTRACT_ADDRESS,
    }
} else {
    config = {
        apiURL: "http://localhost:3080/api",
        contractAddress: "0x33932D1536b6749C9d42e0F8c7F8682aA5782b79",
    }
}

export default config;