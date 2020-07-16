import renderComponents from './renderComponents';
import displayController from './displayController';
/*
[feature/main 9efca44] Logic/Basic Create New Task and Id System
 11 files changed, 99 insertions(+), 59 deletions(-)
 rewrite dist/main.js (100%)
 * REMINDER: renderComponents.renderTag() takes as parameter:
 * (tag, parentId, tag Id, tag class(if more than one, takes an array))
 */
const tasksTab = (() => {

    const renderNewTaskBtn = () => {
        renderComponents.renderTag('div', 'tasks-tab', 'new-task-container', ['minibox', 'col-12', 'end']);
        renderComponents.renderTag('button', 'new-task-container', 'new-task-btn', 'col-2').innerHTML = 'Add Task';
    };

    const renderTask = (title, description, difficulty = 'Trivial') => {

        let uniqueId = displayController.generateUniqueId() ;
        // Render a single task
        // Create Tags
        renderComponents.renderTag('div','tasks-tab', `task-container${uniqueId}`, 'box');
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
    };

    const renderNewTaskForm = () => {
        // Form
        renderComponents.renderTag('form', 'content', 'new-task-form', ['box', 'row', 'flex-grid']);
        // Name Input
        renderComponents.renderTag('label', 'new-task-form','taskname', ['minibox','column','col-8', 'col-l-4']).textContent = 'Name of the Task' ;
        renderComponents.renderTag('input', 'new-task-form', 'fname',['minibox','column', 'col-12', 'col-l-8']).type = 'text';
        // Description Input
        renderComponents.renderTag('label', 'new-task-form').textContent = 'Description';
        renderComponents.renderTag('textarea', 'new-task-form', 'fdescription');
        // Set difficulty options
        renderComponents.renderTag('label', 'new-task-form').textContent = 'Difficulty' ;
        renderComponents.renderTag('select', 'new-task-form', 'foptions');
        renderComponents.renderTag('option', 'foptions').textContent = 'Trivial' ;
        renderComponents.renderTag('option', 'foptions').textContent = 'Easy' ;
        renderComponents.renderTag('option', 'foptions').textContent = 'Medium' ;
        renderComponents.renderTag('option', 'foptions').textContent = 'Hard' ;
        // Date Btn
        renderComponents.renderTag('input', 'new-task-form', 'datepicker')
        const input = document.getElementById('datepicker');
        const datepicker = new TheDatepicker.Datepicker(input);
        datepicker.render();
        // Submit btn
        renderComponents.renderTag('input', 'new-task-form', 'fsubmit').type = 'button' ;
    }
    return { renderTask, renderNewTaskForm, renderNewTaskBtn };
})();

export default tasksTab ;
