import React, { Component } from 'react';
import './App.css';
import UserPanel from "./components/UserPanel";
import { withWeb3 } from 'react-web3-provider';


class App extends Component
{
    state = {
        account: [],
        abi: [],
        contractAddress: ''
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

    connectContract = () =>
    {
        const {web3} = this.props;
        let smileyContract = new web3.eth.Contract(this.state.abi, this.state.contractAddress);

    };


    componentDidMount()
    {
        this.getCurrentAccount();
        this.connectContract();
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
