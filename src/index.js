/* eslint-disable */

import renderComponents from './renderComponents';
import displayController from './displayController';
import todoTab from './todoTab';

const main = (() => {
  if (localStorage.length === 0) {
        localStorage.setItem('Sample Project', JSON.stringify([JSON.stringify({name:'Sample Task',
            description: 'This is a Sample Task',
            difficulty: 'Trivial',
            date: '01.01.2021',
            completed: false
        })]));
        displayController.displayAllProjects();
    }
})();
