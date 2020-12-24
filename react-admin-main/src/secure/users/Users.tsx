import React, { Component } from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';
import { User } from '../../classes/user';
import { Link } from 'react-router-dom';
import Paginator from '../components/Paginator';
import Deleter from '../components/Deleter';
import { connect } from 'react-redux';
import { URL } from 'url';

class Users extends Component {
  state = {
    users: [],
  };
  componentDidMount = async () => {
    const response = await axios.get('users');
    //here this is covered in lecture 13 titled Users, the axios is actually axios.get(url: 'users'); however that is creating a parse error somehow so i just left it like axios.get('users'); instead of the way he did it... I think this is also messing me up. find out why we are doing this!!! understand axios better!
    this.setState({ users: response.data.data });
  };

  render() {
    return (
      <Wrapper>
        <div className='table-responsive'>
          <table className='table table-striped table-sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user: User) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>
                      {user.first_name} {user.last_name}
                    </td>
                    <td>{user.email}</td>
                    <td></td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Wrapper>
    );
  }
}

export default Users;
