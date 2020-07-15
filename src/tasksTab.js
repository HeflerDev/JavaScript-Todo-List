import renderComponents from './renderComponents';
import displayController from './displayController';
/*
 * This module takes care of rendering each task.
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
        renderComponents.renderTag('div','tasks-tab', 'task-container', 'box');
        renderComponents.renderTag('div','task-container', 'sub-task-container', ['minibox','flex-grid']);
        // Title
        renderComponents.renderTag('h2','sub-task-container', 'task-title', ['minibox', 'col-10', 'text-left']).textContent = title;
        // Done Btn
        renderComponents.renderTag('button', 'sub-task-container', 'complete-task-btn', 'col-2').textContent = 'Done!';
        renderComponents.renderTag('div', 'sub-task-container', 'task-content', ['minibox', 'flex-grid', 'col-12']);
        // Task Description
        renderComponents.renderTag('span', 'task-content', 'task-description', ['minibox', 'col-12', 'col-m-9' ]).innerHTML = description;
        // Buttons
        renderComponents.renderTag('div', 'task-content', 'btn-container', ['col-12', 'col-m-3', 'minibox', 'column']);
        renderComponents.renderTag('button', 'btn-container', 'edit-task-btn', 'col-12').innerHTML = 'Edit';
        renderComponents.renderTag('button', 'btn-container', 'delete-task-btn', 'col-12').innerHTML = 'Delete';
        // Task Info
        renderComponents.renderTag('div', 'task-content', 'task-info-container');
        renderComponents.renderTag('span', 'task-info-container', 'xp-info').textContent = '30xp';
        renderComponents.renderTag('span', 'task-info-container', 'difficulty-info').textContent = difficulty;
        renderComponents.renderTag('span', 'task-info-container', 'points-info').textContent = '1000 Points';
    };

    const renderNewTaskForm = () => {
        // Form
        renderComponents.renderTag('form', 'content', 'new-task-form', ['box', 'flex-grid']);
        // Name Input
        renderComponents.renderTag('label', 'new-task-form').textContent = 'Name of the Task' ;
        renderComponents.renderTag('input', 'new-task-form', 'fname').type = 'text';
        // Description Input
        renderComponents.renderTag('label', 'new-task-form').textContent = 'Description';
        renderComponents.renderTag('textarea', 'new-task-form', 'fdescription');
        // Set difficulty options
        renderComponents.renderTag('label', 'new-task-form').textContent = 'Difficulty' ;
        renderComponents.renderTag('select', 'new-task-form', 'foptions');
        renderComponents.renderTag('option', 'foptions').textContent = 'Trivial' ;
        renderComponents.renderTag('option', 'foptions').textContent = 'Easy' ;
        // Submit btn
        renderComponents.renderTag('input', 'new-task-form', 'fsubmit').type = 'button' ;
    }
    return { renderTask, renderNewTaskForm, renderNewTaskBtn };
})();

export default tasksTab ;
