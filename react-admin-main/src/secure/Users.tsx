import React, { Component } from 'react';
import Wrapper from './Wrapper';
import axios from 'axios';
import { User } from '../classes/user';
import { Link } from 'react-router-dom';
import Paginator from './components/Paginator';
import Deleter from './components/Deleter';
import { connect } from 'react-redux';

const Users = () => (
  <Wrapper>
    <p>Users works!</p>;
  </Wrapper>
);

export default Users;
