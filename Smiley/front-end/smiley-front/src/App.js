import React, { Component } from 'react';
import './App.css';
import UserPanel from "./components/UserPanel";
import { withWeb3 } from 'react-web3-provider';


class App extends Component
{
    state = {
        account: [],
        abi: [
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "balance_ong",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "users",
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "age",
                        "type": "uint8"
                    },
                    {
                        "name": "points",
                        "type": "uint32"
                    },
                    {
                        "name": "level",
                        "type": "uint32"
                    },
                    {
                        "name": "readyTime",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "ongs",
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "fund_address",
                        "type": "address"
                    },
                    {
                        "name": "url",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getUserByAddress",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    },
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_age",
                        "type": "uint8"
                    }
                ],
                "name": "createUser",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isOwner",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "user_donations",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "UserID",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "OngIDs",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner_",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "fund",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "url",
                        "type": "string"
                    }
                ],
                "name": "NewOng",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "age",
                        "type": "uint8"
                    }
                ],
                "name": "NewUser",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_fund",
                        "type": "address"
                    },
                    {
                        "name": "_url",
                        "type": "string"
                    }
                ],
                "name": "createONG",
                "outputs": [
                    {
                        "name": "id_created",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "getONGbyID",
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "fund",
                        "type": "address"
                    },
                    {
                        "name": "url",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getONGCount",
                "outputs": [
                    {
                        "name": "count",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "ong_address",
                        "type": "address"
                    }
                ],
                "name": "donate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    }
                ],
                "name": "getViews",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    }
                ],
                "name": "getBalanceOfONG",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ],
        contractAddress: '0xF78186d2b1F3392a5bE970428C8f0911C72843c8'
    };

    getCurrentAccount = () =>
    {
        let self = this;
        const {web3} = this.props;
        web3.eth.getAccounts().then(account =>
        {
            self.setState(
                {
                    account: account
                })
        })
    };

    connectContract = async () =>
    {
        const {web3} = this.props;
        let smileyContract = new web3.eth.Contract(this.state.abi, this.state.contractAddress);
        console.log(smileyContract);
        let count = await smileyContract.methods.getONGCount().call();
        let ONG = await smileyContract.methods.getONGbyID(0).call();
        console.log(count);
        console.log(ONG);
    };


    async componentDidMount()
    {
        this.getCurrentAccount();
        await this.connectContract();
    }

  render()
  {
        return(
            <React.Fragment>
                <UserPanel/>
            </React.Fragment>
        )


  }
}

export default withWeb3(App);
