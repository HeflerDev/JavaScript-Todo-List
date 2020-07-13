import renderComponents from './renderComponents';
/*
 * This module takes care of rendering each task.
 * REMINDER: renderComponents.renderTag() takes as parameter:
 * (tag, parentId, tag Id, tag class(if more than one, takes an array))
 */
const tasksTab = (() => {

    const renderTask = () => {
        // Render a single task
        // Create Tags
        renderComponents.renderTag('div','content', 'task-container', 'box');
        renderComponents.renderTag('div','task-container', 'sub-task-container', ['minibox','flex-grid']);
        renderComponents.renderTag('h2','sub-task-container', null, ['task-title', 'minibox', 'col-10', 'text-left']);
        renderComponents.renderTag('button', 'sub-task-container', 'complete-task-btn', 'col-2');
        renderComponents.renderTag('div', 'sub-task-container', 'task-content', ['minibox', 'flex-grid', 'col-12']);
        renderComponents.renderTag('span', 'task-content', 'task-description', ['minibox', 'col-12', 'col-m-9' ]);
        renderComponents.renderTag('div', 'task-content', 'btn-container', ['col-12', 'col-m-3', 'minibox', 'column']);
        renderComponents.renderTag('button', 'btn-container', 'edit-task-btn', 'col-12');
        renderComponents.renderTag('button', 'btn-container', 'delete-task-btn', 'col-12');
        renderComponents.renderTag('div', 'task-content', 'task-info-container');
        renderComponents.renderTag('span', 'task-info-container', 'xp-info');
        renderComponents.renderTag('span', 'task-info-container', 'difficulty-info');
        renderComponents.renderTag('span', 'task-info-container', 'points-info');
        // Fill with content
    };
    return { renderTask };
})();

export default tasksTab ;
