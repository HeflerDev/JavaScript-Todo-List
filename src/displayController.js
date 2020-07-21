import tasksTab from './tasksTab' ;
import Project from './projects' ;
import projectsTab from './projectsTab';

const displayController = (() => {

/*
 * Module that handle the main logic of the project
 * Listeners and handlers can be found here
 */

    const displayTaskForm = (btn) => {
        if (! document.getElementById('new-task-form')) {
            let form = tasksTab.renderNewTaskForm();
            document.getElementById('fsubmit').addEventListener('click', (function () { handleTaskSubmit(btn) }));
        }
    };

    const displayProjectForm = () => {
        if (! document.getElementById('projects-form-container')) {
            projectsTab.renderProjectsForm();
            document.getElementById('project-submit-btn').addEventListener('click', handleProjectSubmit);
        }
    };

    const handleProjectSubmit = () => {
        let name = document.getElementById('project-name');
        const project = new Project(name.value);
        project.saveDataToCache();
        projectsTab.unrenderProjectsForm();
    };

    const handleTaskSubmit = (btn) => {
        let data = {
            name: document.getElementById('fname'),
            description: document.getElementById('fdescription'),
            difficulty: document.getElementById('foptions'),
            date: document.getElementById('datepicker')
        };
        tasksTab.renderTask(data.name.value, data.description.value, data.difficulty.value, data.date.value, btn);
    };

    const generateUniqueId = () => {
        let date = new Date();
        return `Task-${date.getFullYear()}${date.getMonth()}${date.getMinutes()}${date.getMilliseconds()}`;
    };

    window.onload = (function () { document.getElementById('new-project-btn').addEventListener('click', displayProjectForm) });

    return { generateUniqueId, displayTaskForm }
})();

export default displayController ;
