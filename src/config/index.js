let config

if (process.env.REACT_APP_ENV === 'production') {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0x299a59DF0De3adfCD41d5DD089AAFF57410fDc9d",
    }
} else {
    config = {
        apiURL: "http://localhost:3080/api",
        contractAddress: "0x299a59DF0De3adfCD41d5DD089AAFF57410fDc9d",
    }
}

export default config;