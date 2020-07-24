import Project from './projects' ;
import todoTab from './todoTab' ;

const displayController = (() => {

/*
 * Module that handle the main logic of the project
 * Listeners and handlers can be found here
 * This module call functions that render, but never render by itself
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
        console.log(name.value);
        todoTab.renderProject(name.value);
    };

    function deleteTask(key) {
        document.getElementById(`task-container-${key}`).remove();
    };

    const displayAllProjects = () => {
        Object.keys(localStorage).forEach((key) => {
            todoTab.renderAllProjects(key);
            let item = JSON.parse(localStorage.getItem(key));
            item.forEach((data) => {
                let obj = JSON.parse(data);
                todoTab.renderAllTasks(obj, key);
            });
        });
    };

    const enableTaskListeners = (key) => {
        document.getElementById(`delete-task-btn-${key}`).addEventListener('click', (() => { deleteTask(storageKey) }));
        document.getElementById(`edit-task-btn-${key}`);
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
        localStorage.removeItem(storageKey);
        value.push(JSON.stringify(data));
        localStorage.setItem(storageKey, JSON.stringify(value));
        // Takes Care of the Visual*/
        todoTab.unrenderNewTaskForm();
        todoTab.renderTask(data.name, data.description, data.difficulty, data.date, btn.parentElement.id);
        // Enable Button Listeners
        enableTaskListeners(data.name);
    };


    (function (){
        if (localStorage.length === 0){
            todoTab.renderNewProjectButton();
            todoTab.renderNoProjectWarning();
        } else {
            todoTab.renderNewProjectButton();
            displayAllProjects();
        }
    })();

    document.getElementById('new-project-btn').addEventListener('click', displayProjectForm);

    return { displayTaskForm, enableTaskListeners }
})();


export default displayController ;
