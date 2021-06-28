let config

if (process.env.REACT_APP_ENV === 'production') {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0x0fb8b77c3BbB15828168576fD9dAB76d2bBBebF4",
    }
} else {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0x0fb8b77c3BbB15828168576fD9dAB76d2bBBebF4",
    }
}

export default config;