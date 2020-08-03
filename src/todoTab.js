import renderComponents from './renderComponents'
import Project from './projects'
import displayController from './displayController'

const  todoTab =  (() => {

    /*
     * Do the TodoTab rendering.
     * All functions here are called by the controller
     * Also use the renderComponents helper to DRY and clean code
     */

    const renderNewProjectButton = () => {
        renderComponents.renderTag('div', 'content', 'project-btn-container', ['box', 'end', 'col-12']);
        renderComponents.renderTag('button', 'project-btn-container', 'new-project-btn', ['minibox', 'center', 'col-12']);
        let newBtn = renderComponents.renderTag('span', 'new-project-btn', null);
        newBtn.textContent = 'New Project'
    };

    const renderNoProjectWarning = () => {
        let warning = renderComponents.renderTag('h1', 'content', null, ['box', 'col-12'] );
        warning.textContent = 'No Project to display' ;
    };

    const renderAllProjects = (key) => {
                renderComponents.renderTag('div', 'content', `${key}`, ['flex-grid', 'col-12']);
                let project = renderComponents.renderTag('h2', `${key}`, `project-${key}`, ['minibox', 'col-12', 'col-l-10']);
                project.textContent = key.replace(/-+/g, " ");
                let newBtn = renderComponents.renderTag('button', `${key}`, `new-task-btn-${key}`, ['col-12', 'col-l-2']);
                newBtn.textContent = 'New Task';
                //console.log(`This is ${}`)
                newBtn.addEventListener('click', (function () { displayController.displayTaskForm(newBtn) }));
    }

    const renderAllTasks = (obj, key) => {
        renderTask(obj.name, obj.description, obj.difficulty, obj.date, key);
    };

    const renderProject = (name) => {
       renderComponents.renderTag('div', 'content', name, ['flex-grid', 'col-12']);
       let project = renderComponents.renderTag('h2', name, `project-${name}`, ['minibox', 'col-12', 'col-l-10']);
       project.textContent = name.replace(/-+/g, " ");
       let newBtn = renderComponents.renderTag('button', name, `new-task-btn-${name}`, ['col-12', 'col-l-2']);
        newBtn.textContent = 'New Task';
       newBtn.addEventListener('click', (function () { displayController.displayTaskForm(newBtn) }));
    };

    const renderProjectsForm = () => {
        renderComponents.renderTag('div', 'content', 'project-form-container', null);
        renderComponents.renderTag('form', 'project-form-container', 'project-form', ['flex-grid', 'around','box', 'row', 'col-l-5', 'col-12']);
        let label = renderComponents.renderTag('label', 'project-form', null, ['col-12','col-m-4', 'col-l-4']);
        label.textContent = 'Project Name';
        renderComponents.renderTag('input', 'project-form', 'project-name', ['col-12', 'col-m-8', 'col-l-8']);
        let submitBtn = renderComponents.renderTag('input', 'project-form', 'project-submit-btn', ['col-12']);
        submitBtn.type = 'button';
        submitBtn.value = 'Create Project';
    };

    const unrenderProjectsForm = () => {
        document.getElementById('project-form-container').remove();
    };

    const renderNewTaskBtn = () => {
        renderComponents.renderTag('div', 'tasks-tab', 'new-task-container', ['minibox', 'col-12', 'end']);
        renderComponents.renderTag('button', 'new-task-container', 'new-task-btn', 'col-2').innerHTML = 'Add Task';
    };

    const renderTask = (name, description, difficulty, date, parent) => {
        // Create Tags
        renderComponents.renderTag('div', parent, `task-container-${name}`, 'box');
        renderComponents.renderTag('div',`task-container-${name}`, `sub-task-container${name}`, ['minibox','flex-grid']);
        // Title
        renderComponents.renderTag('h2',`sub-task-container${name}`, `task-title${name}`, ['minibox', 'col-10', 'text-left']).textContent = name.replace(/-+/g, " ");
        // Done Btn
        renderComponents.renderTag('button', `sub-task-container${name}`, `complete-task-btn${name}`, 'col-2').textContent = 'Done!';
        renderComponents.renderTag('div', `sub-task-container${name}`, `task-content${name}`, ['minibox', 'flex-grid', 'col-12']);
        // Task Description
        renderComponents.renderTag('span', `task-content${name}`, `task-description${name}`, ['minibox', 'col-12', 'col-m-9' ]).innerHTML = description;
        // Buttons
        renderComponents.renderTag('div', `task-content${name}`, `btn-container${name}`, ['col-12', 'col-m-3', 'minibox', 'column']);
        renderComponents.renderTag('button', `btn-container${name}`, `edit-task-btn-${name}`, 'col-12').innerHTML = 'Edit';
        renderComponents.renderTag('button', `btn-container${name}`, `delete-task-btn-${name}`, 'col-12').innerHTML = 'Delete';
        // Task Info
        renderComponents.renderTag('div', `task-content${name}`, `task-info-container${name}`);
        renderComponents.renderTag('span', `task-info-container${name}`, `xp-info${name}`).textContent = '30xp';
        renderComponents.renderTag('span', `task-info-container${name}`, `difficulty-info${name}`).textContent = difficulty;
        renderComponents.renderTag('span', `task-info-container${name}`, `points-info${name}`).textContent = '1000 Points';
        renderComponents.renderTag('span', `task-info-container${name}`, `date-info${name}`).textContent = date ;
    };

    const renderNewTaskForm = () => {
        renderComponents.renderTag('div', 'content', 'new-task-form-container');
        // Form
        renderComponents.renderTag('form', 'new-task-form-container', 'new-task-form', ['box', 'row','start', 'flex-grid']);
        // Name Input
        renderComponents.renderTag('label', 'new-task-form','taskname', ['minibox','col-12', 'col-l-2']).textContent = 'Name of the Task' ;
        renderComponents.renderTag('input', 'new-task-form', 'fname',['minibox', 'col-12', 'col-l-10']).type = 'text';
        // Description Input
        renderComponents.renderTag('label', 'new-task-form','desclabel',['col-12','col-l-2', 'minibox']).textContent = 'Description';
        renderComponents.renderTag('textarea', 'new-task-form', 'fdescription', ['col-12','col-l-10']);
        // Set difficulty options
        renderComponents.renderTag('label', 'new-task-form','diflabel', ['col-12', 'col-l-2', 'minibox', 'column']).textContent = 'Difficulty' ;
        renderComponents.renderTag('select', 'new-task-form', 'foptions', ['col-12', 'col-l-2', 'minibox', 'column']);
        renderComponents.renderTag('option', 'foptions').textContent = 'Trivial' ;
        renderComponents.renderTag('option', 'foptions').textContent = 'Easy' ;
        renderComponents.renderTag('option', 'foptions').textContent = 'Medium' ;
        renderComponents.renderTag('option', 'foptions').textContent = 'Hard' ;
        // Date Btn
        renderComponents.renderTag('label', 'new-task-form', null, ['col-12', 'col-l-2', 'minibox', 'column']).textContent = 'Due Date:';
        renderComponents.renderTag('input', 'new-task-form', 'datepicker', ['col-12', 'col-l-2']);
        const input = document.getElementById('datepicker');
        const datepicker = new TheDatepicker.Datepicker(input);
        datepicker.render();
        // Submit btn
        let submitBtn = renderComponents.renderTag('input', 'new-task-form', 'fsubmit', ['col-11', 'col-l-4']);
        submitBtn.type = 'button';
        submitBtn.value = 'Create Task';
    }

    function unrenderNewTaskForm() {
        document.getElementById('new-task-form-container').remove();
    }


    return { renderAllTasks, renderNoProjectWarning, renderProjectsForm, unrenderProjectsForm, renderAllProjects, renderProject, renderTask, renderNewTaskForm, unrenderNewTaskForm, renderNewTaskBtn, renderNewProjectButton }

})();

export default todoTab ;

