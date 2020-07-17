import renderComponents from './renderComponents'
import Project from './projects'

const projectsTab = (() => {

    const renderProjectsTab = () => {
        let title = renderComponents.renderTag('h2', 'content', null, ['box', 'col-12']) ;
        title.textContent = 'Projects'
        renderComponents.renderTag('div', 'content', 'project-container', ['box']);
        // renderComponents.renderTag('div')
    };

    const renderProjectsForm = () => {
        renderComponents.renderTag('form', 'content', 'projects-form-container', ['col-12']);
        let label = renderComponents.renderTag('label', 'projects-form-container', null, ['col-12','col-m-4', 'col-l-2']);
        label.textContent = 'Project Name';
        renderComponents.renderTag('input', 'projects-form-container', 'project-name', ['col-12', 'col-m-8', 'col-l-10']);
    };

    const renderNewProjectButton = () => {
        renderComponents.renderTag('div', 'content', 'project-btn-container', ['box', 'end', 'col-12']);
        renderComponents.renderTag('button', 'project-container', 'new-project-btn', ['minibox', 'col-12']);
    };

    return { renderProjectsTab, renderNewProjectButton, renderProjectsForm }

})();

export default projectsTab ;
