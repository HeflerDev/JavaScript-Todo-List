import RenderComponents from './renderComponents';
import tasksTab from './tasksTab';
import displayController from './displayController';
import projectsTab from './projectsTab';

 const main = (() => {
    projectsTab.renderProjectsTab();
    projectsTab.renderProjectsForm();
})();
