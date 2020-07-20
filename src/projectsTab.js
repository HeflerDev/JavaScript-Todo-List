import renderComponents from './renderComponents'
import Project from './projects'
import displayController from './displayController';

const projectsTab = (() => {

    function renderNewButton () {
        renderComponents.renderTag('div', 'content', 'project-btn-container', ['box', 'end', 'col-12']);
        renderComponents.renderTag('button', 'project-btn-container', 'new-project-btn', ['minibox', 'center', 'col-12']);
        let newBtn = renderComponents.renderTag('span', 'new-project-btn', null);
        newBtn.textContent = 'New Project'
    };


    function renderProjects() {
            Object.keys(localStorage).forEach(function (key, index) {
                renderComponents.renderTag('div', 'content', `project-container${index}`, ['flex-grid', 'col-12']);
                let project = renderComponents.renderTag('h2', `project-container${index}`, `project-${index}`, ['minibox', 'col-12', 'col-l-10']);
                project.textContent = key;
                let newBtn = renderComponents.renderTag('button', `project-container${index}`, `new-project-btn${index}`, ['col-12', 'col-l-2']);
                newBtn.textContent = 'New Task';
                newBtn.addEventListener('click', displayController.displayTaskForm();
            });
    };

    (function (){
        if (localStorage.length === 0){
            renderNewButton();
            let warning = renderComponents.renderTag('h1', 'content', null, ['box', 'col-12'] );
            warning.textContent = 'No Project to display' ;
        } else {
            renderNewButton();
            renderProjects();
        }
    })();

    /*
    const renderProjectsTab = () => {
        let title = renderComponents.renderTag('h2', 'content', null, ['box', 'col-12']) ;
        title.textContent = 'Projects';
        renderComponents.renderTag('div', 'content', 'project-container', ['box']);
        Object.keys(localStorage).forEach(function (key) {
          console.log(localStorage.getItem(key));
        });

        // renderComponents.renderTag('div');
    };
    */

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


    return { renderProjectsForm, unrenderProjectsForm }

})();

export default projectsTab ;

