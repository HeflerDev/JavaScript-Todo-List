import Project from './projects' ;
import todoTab from './todoTab' ;

const displayController = (() => {

/*
 * Module that handle the main logic of the project
 * Listeners and handlers can be found here
 */

    const displayTaskForm = (btn) => {
        if (! document.getElementById('new-task-form')) {
            let form = todoTab.renderNewTaskForm();
            document.getElementById('fsubmit').addEventListener('click', (function () { handleTaskSubmit(btn) }));
        }
    };

    const displayProjectForm = () => {
        if (document.getElementById('projects-form-container')) {
            todoTab.unrenderProjectsForm();
        }
        // The separate If's is to 'reload'
        if (! document.getElementById('projects-form-container')) {
            todoTab.renderProjectsForm();
            document.getElementById('project-submit-btn').addEventListener('click', handleProjectSubmit);
        }
    };

    const handleProjectSubmit = () => {
        let name = document.getElementById('project-name');
        const project = new Project(name.value);
        project.saveDataToCache();
        todoTab.unrenderProjectsForm();
        todoTab.renderProject(name);
    };

    const handleTaskSubmit = (btn) => {
        let data = {
            name: document.getElementById('fname').value,
            description: document.getElementById('fdescription').value,
            difficulty: document.getElementById('foptions').value,
            date: document.getElementById('datepicker').value
        };
        // Update the data on the localStorage
        let storageKey = btn.parentElement.id ;
        let value = JSON.parse(localStorage.getItem(storageKey));
        window.localStorage.removeItem(storageKey);
        value.push(data);
        console.log(value);
        // window.localStorage.setItem(storageKey, value);


        todoTab.unrenderNewTaskForm();
        todoTab.renderTask(data.name, data.description, data.difficulty, data.date, btn.parentElement.id);
    };

    const generateUniqueId = () => {
        let date = new Date();
        return `Task-${date.getFullYear()}${date.getMonth()}${date.getMinutes()}${date.getMilliseconds()}`;
    };

    document.getElementById('new-project-btn').addEventListener('click', displayProjectForm);

    return { generateUniqueId, displayTaskForm }
})();

export default displayController ;
