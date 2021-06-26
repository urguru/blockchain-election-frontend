let config

if (process.env.REACT_APP_ENV === 'production') {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0x81D594065C0D5567d77523cd6D4E0B846B291Ec7",
    }
} else {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0x81D594065C0D5567d77523cd6D4E0B846B291Ec7",
    }
}

export default config;