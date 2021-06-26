let config

if (process.env.REACT_APP_ENV === 'production') {
    config = {
        apiURL: "https://blockchain-election-backend.azurewebsites.net/api",
        contractAddress: "0x017E083C6DaC9faff97523E3D94Be248a476c613",
    }
} else {
    config = {
        apiURL: "http://localhost:3080/api",
        contractAddress: "0x8dA55c57653Fb16B05d2487Fd9279c483a2c25C9",
    }
}

export default config;