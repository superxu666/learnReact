import React, { Component } from 'react';
import { render } from 'react-dom';
import AppRouter from './router/router.jsx'

render(
    <AppRouter/>,
    document.getElementById('app')
);
