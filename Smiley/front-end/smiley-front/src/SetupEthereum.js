import Web3 from 'web3';

const web3 = new Web3(new web3.providers.HttpProvider("http://localhost:7545"));

let Abi = [{"constant":false,"inputs":[{"name":"_fName","type":"string"},{"name":"_age","type":"uint256"}],"name":"setInstructor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"
},
    {"constant":true,"inputs":[],"name":"getInstructor","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],
        "payable":false,"stateMutability":"view","type":"function"}];

let ContractAddress = "0x777100d877a625a1c1326682af4b9e4caf34c6ca";

let userAccount = async function getAccount()
{
    let accounts = await web3.eth.getAccounts();
    return accounts[0];
};

let contract = new web3.eth.Contract(Abi, ContractAddress);
export {contract};
