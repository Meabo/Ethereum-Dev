import React, {Component} from 'react';
import { withWeb3 } from 'react-web3-provider';

class UserPanel extends Component
{
    state = {
        user : '',
        name: '',
        age: '',
    };

     CreateUser = () =>
    {
        const {web3} = this.props;

    };


    handleChange = ({target}) =>
    {
        this.setState({
            [target.name]: target.value
        });
    };


    render()
    {
        return(
            <div>
                <label>Name</label>
                <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                <label>Age</label>
                <input name="age" type="number" value={this.state.age} onChange={this.handleChange}/>
                <button onClick={this.CreateUser}>Create User</button>

            </div>
        );
    }
}

UserPanel.propTypes = {};

export default withWeb3(UserPanel);
