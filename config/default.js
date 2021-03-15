const config = {

    // The pinningService config tells minty what remote pinning service to use for pinning the IPFS data for a token.
    // The default config uses Pinata (https://pinata.cloud), and expects a JWT access token in the PINATA_API_TOKEN
    // environment variable.
    // 
    pinningService: {
        name: 'pinata',
        endpoint: 'https://api.pinata.cloud/psa',
        key: '$$PINATA_API_TOKEN'
    },

    // When the Minty smart contract is deployed, the contract address and other details will be written to this file.
    // Commands that interact with the smart contract (minting, etc), will load the file to connect to the deployed contract.
    deploymentConfigFile: 'minty-deployment.json',

    // If you're running IPFS on a non-default port, update this URL. If you're using the IPFS defaults, you should be all set.
    ipfsApiUrl: 'http://localhost:5001',

    // If you're running the local IPFS gateway on a non-default port, or if you want to use a public gatway when displaying IPFS gateway urls, edit this.
    ipfsGatewayUrl: 'http://localhost:8080/ipfs',
}

module.exports = config