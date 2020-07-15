import tasksTab from './tasksTab' ;

const displayController = (() => {

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
            // difficulty: document.getElementById('fdifficulty')
        };

        tasksTab.renderTask(data.name.value, data.description.value);
    };

    const generateUniqueId = () => {
        date = Date();
        return `Task-${date.getFullYear()}${date.getMonth()}${date.getMinutes}${date.getMilliseconds()}`;
    };

    const enableSubmit = () => document.getElementById('fsubmit').addEventListener('click', handleFormSubmit) ;
    window.onload = (function () { document.getElementById('new-task-btn').addEventListener('click', displayForm) });

    return { generateUniqueId }
})();

export default displayController ;
