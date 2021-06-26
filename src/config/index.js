let config

if (process.env.REACT_APP_ENV === 'production') {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0x017E083C6DaC9faff97523E3D94Be248a476c613",
    }
} else {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0x017E083C6DaC9faff97523E3D94Be248a476c613",
    }
}

export default config;