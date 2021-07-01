let config

if (process.env.REACT_APP_ENV === 'production') {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0xc49998Eb3C5Df61E9b321F5eAeB7De4DC7e024ca",
    }
} else {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0xc49998Eb3C5Df61E9b321F5eAeB7De4DC7e024ca",
    }
}

export default config;