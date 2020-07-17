import tasksTab from './tasksTab' ;
import Project from './projects' ;

const displayController = (() => {

/*
 * Module that handle the main logic of the project
 * Listeners and handlers can be found here
 */

    const displayForm = () => {
        if (! document.getElementById('new-task-form')) {
                let form = tasksTab.renderNewTaskForm();
                enableSubmit() ;
            }
        };

    const handleFormSubmit = () => {
        let data = {
            name : document.getElementById('fname'),
            description: document.getElementById('fdescription'),
            difficulty: document.getElementById('foptions'),
            date: document.getElementById('datepicker')
        };
        tasksTab.renderTask(data.name.value, data.description.value, data.difficulty.value, data.date.value);
    };

    const generateUniqueId = () => {
        let date = new Date();
        return `Task-${date.getFullYear()}${date.getMonth()}${date.getMinutes()}${date.getMilliseconds()}`;
    };

    const enableSubmit = () => document.getElementById('fsubmit').addEventListener('click', handleFormSubmit) ;
    window.onload = (function () { document.getElementById('new-task-btn').addEventListener('click', displayForm) });

    return { generateUniqueId }
})();

export default displayController ;
