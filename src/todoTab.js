import renderComponents from './renderComponents'
import Project from './projects'
import displayController from './displayController'

const  todoTab =  (() => {

    function renderNewButton () {
        renderComponents.renderTag('div', 'content', 'project-btn-container', ['box', 'end', 'col-12']);
        renderComponents.renderTag('button', 'project-btn-container', 'new-project-btn', ['minibox', 'center', 'col-12']);
        let newBtn = renderComponents.renderTag('span', 'new-project-btn', null);
        newBtn.textContent = 'New Project'
    };


    const renderAllProjects = () => {
            Object.keys(localStorage).forEach(function (key) {
                renderComponents.renderTag('div', 'content', `${key}`, ['flex-grid', 'col-12']);
                let project = renderComponents.renderTag('h2', `${key}`, `project-${key}`, ['minibox', 'col-12', 'col-l-10']);
                project.textContent = key;
                let newBtn = renderComponents.renderTag('button', `${key}`, `new-task-btn-${key}`, ['col-12', 'col-l-2']);
                newBtn.textContent = 'New Task';
                //console.log(`This is ${}`)
                newBtn.addEventListener('click', (function () { displayController.displayTaskForm(newBtn) }));
            });
    }

    const renderProject = (name) => {
       renderComponents.renderTag('div', 'content', `${name}`, ['flex-grid', 'col-12']);
       let project = renderComponents.renderTag('h2', `${name}`, `project-${name}`, ['minibox', 'col-12', 'col-l-10']);
       project.textContent = name.value;
       let newBtn = renderComponents.renderTag('button', `${name}`, `new-task-btn-${name}`, ['col-12', 'col-l-2']);
       newBtn.textContent = 'New Task';
       newBtn.addEventListener('click', (function () { displayController.displayTaskForm(newBtn) }));
    };

    (function (){
        if (localStorage.length === 0){
            renderNewButton();
            let warning = renderComponents.renderTag('h1', 'content', null, ['box', 'col-12'] );
            warning.textContent = 'No Project to display' ;
        } else {
            renderNewButton();
            renderAllProjects();
        }
    })();

    const renderProjectsForm = () => {
        renderComponents.renderTag('form', 'content', 'projects-form-container', ['flex-grid', 'around','box', 'row', 'col-l-5', 'col-12']);
        let label = renderComponents.renderTag('label', 'projects-form-container', null, ['col-12','col-m-4', 'col-l-4']);
        label.textContent = 'Project Name';
        renderComponents.renderTag('input', 'projects-form-container', 'project-name', ['col-12', 'col-m-8', 'col-l-8']);
        let submitBtn = renderComponents.renderTag('input', 'projects-form-container', 'project-submit-btn', ['col-12']);
        submitBtn.type = 'button';
        submitBtn.value = 'Create Project';
    };

    const unrenderProjectsForm = () => {
        document.getElementById('projects-form-container').remove();
    };

    const renderNewTaskBtn = () => {
        renderComponents.renderTag('div', 'tasks-tab', 'new-task-container', ['minibox', 'col-12', 'end']);
        renderComponents.renderTag('button', 'new-task-container', 'new-task-btn', 'col-2').innerHTML = 'Add Task';
    };

    const renderTask = (title, description, difficulty, date, parent) => {
        let uniqueId = displayController.generateUniqueId() ;
        // Render a single task
        // Create Tags

        renderComponents.renderTag('div', parent, `task-container${uniqueId}`, 'box');
        renderComponents.renderTag('div',`task-container${uniqueId}`, `sub-task-container${uniqueId}`, ['minibox','flex-grid']);
        // Title
        renderComponents.renderTag('h2',`sub-task-container${uniqueId}`, `task-title${uniqueId}`, ['minibox', 'col-10', 'text-left']).textContent = title;
        // Done Btn
        renderComponents.renderTag('button', `sub-task-container${uniqueId}`, `complete-task-btn${uniqueId}`, 'col-2').textContent = 'Done!';
        renderComponents.renderTag('div', `sub-task-container${uniqueId}`, `task-content${uniqueId}`, ['minibox', 'flex-grid', 'col-12']);
        // Task Description
        renderComponents.renderTag('span', `task-content${uniqueId}`, `task-description${uniqueId}`, ['minibox', 'col-12', 'col-m-9' ]).innerHTML = description;
        // Buttons
        renderComponents.renderTag('div', `task-content${uniqueId}`, `btn-container${uniqueId}`, ['col-12', 'col-m-3', 'minibox', 'column']);
        renderComponents.renderTag('button', `btn-container${uniqueId}`, `edit-task-btn${uniqueId}`, 'col-12').innerHTML = 'Edit';
        renderComponents.renderTag('button', `btn-container${uniqueId}`, `delete-task-btn${uniqueId}`, 'col-12').innerHTML = 'Delete';
        // Task Info
        renderComponents.renderTag('div', `task-content${uniqueId}`, `task-info-container${uniqueId}`);
        renderComponents.renderTag('span', `task-info-container${uniqueId}`, `xp-info${uniqueId}`).textContent = '30xp';
        renderComponents.renderTag('span', `task-info-container${uniqueId}`, `difficulty-info${uniqueId}`).textContent = difficulty;
        renderComponents.renderTag('span', `task-info-container${uniqueId}`, `points-info${uniqueId}`).textContent = '1000 Points';
        renderComponents.renderTag('span', `task-info-container${uniqueId}`, `date-info${uniqueId}`).textContent = date ;

    };

    const renderNewTaskForm = () => {
        // Form
        renderComponents.renderTag('form', 'content', 'new-task-form', ['box', 'row','start', 'flex-grid']);
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
        document.getElementById('new-task-form').remove();
    }


    return { renderProjectsForm, unrenderProjectsForm, renderAllProjects, renderProject, renderTask, renderNewTaskForm, unrenderNewTaskForm, renderNewTaskBtn }

})();

export default todoTab ;

