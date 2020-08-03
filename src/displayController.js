import Project from './projects' ;
import todoTab from './todoTab' ;

const displayController = (() => {

/*
 * Module that handle the main logic of the project
 * Listeners and handlers can be found here
 * This module call functions that render, but never render by itself
 */

    const convertToValidId = (id) => {
        return id.replace(/\s/g, "-");
    }

    const displayTaskForm = (btn) => {
        if (! document.getElementById('new-task-form')) {
            let form = todoTab.renderNewTaskForm();
            document.getElementById('fsubmit').addEventListener('click', (function () { handleTaskSubmit(btn) }));
        }
    };

    const displayProjectForm = () => {
        if (document.getElementById('project-form-container')) {
            todoTab.unrenderProjectsForm();
        }
        // The separate If's is to 'reload'
        if (! document.getElementById('project-form-container')) {
            todoTab.renderProjectsForm();
            document.getElementById('project-submit-btn').addEventListener('click', handleProjectSubmit);
        }
    };

    const handleProjectSubmit = () => {
        let name = document.getElementById('project-name');
        if (name.value != '') {
            const project = new Project(convertToValidId(name.value));
            project.saveDataToCache();
            todoTab.unrenderProjectsForm();
            todoTab.renderProject(convertToValidId(name.value));
        } else {
            alert('Invalid Data');
            todoTab.unrenderProjectsForm();
        }
    };

        const swapData = (parent, index) => {
            let data = JSON.parse(localStorage.getItem(parent));
            data.splice(index, 1);
            localStorage.removeItem(parent);
            localStorage.setItem(parent, JSON.stringify(data));
        };

    const deleteTask = (key) => {
        Object.keys(localStorage).forEach((item) => {
            let arr = JSON.parse(localStorage.getItem(item));
            arr.forEach((subItem, index) => {
                let obj = JSON.parse(subItem);
                if (obj.name === key) {
                    swapData(item, index);
                    document.getElementById(`task-container-${key}`).remove();
                }
            });
        });
    };

    const displayAllProjects = () => {
        Object.keys(localStorage).forEach((key) => {
            todoTab.renderAllProjects(key);
            let item = JSON.parse(localStorage.getItem(key));
            item.forEach((data) => {
                let obj = JSON.parse(data);
                todoTab.renderAllTasks(obj, key);
                enableTaskListeners(obj.name);
            });
        });
    };

    const getTaskInfo = (projectId, taskName) => {
        let obj = JSON.parse(localStorage.getItem(projectId));
        let filter = null;
        obj.forEach((item) => {
            if (JSON.parse(item).name == taskName) {
                filter = item;
            }
        });
        return JSON.parse(filter);
    };

    const checkForRepetition = (key) => {
        let check = false ;
        console.log('mark1');
        Object.keys(localStorage).forEach((item) => {
            JSON.parse(localStorage.getItem(item)).forEach((obj) => {
                if (JSON.parse(obj).name === key) {
                    console.log('repeat');
                    check = true;
                }
            });
        });
        return check;
    };

    const editTask = (key) => {
        // Grabs the Object with the corresponding data
        let obj = getTaskInfo(document.getElementById(`task-container-${key}`).parentElement.id, key);
        // Put the current values in the form
        todoTab.renderNewTaskForm();
        console.log(checkForRepetition(key));
        document.getElementById('fname').value = obj.name;
        document.getElementById('fdescription').value = obj.description;
        document.getElementById('foptions').value = obj.difficulty;
        document.getElementById('datepicker').value = obj.date;
    };

    const enableTaskListeners = (key) => {
        document.getElementById(`delete-task-btn-${key}`).addEventListener('click', (() => { deleteTask(key) }));
        document.getElementById(`edit-task-btn-${key}`).addEventListener('click', (() => { editTask(key) }));
    };


    const handleTaskSubmit = (btn) => {
        let data = {
            name: convertToValidId(document.getElementById('fname').value),
            description: document.getElementById('fdescription').value,
            difficulty: document.getElementById('foptions').value,
            date: document.getElementById('datepicker').value
        };
        if ((data.name != '') && (data.description != '') && (data.difficulty != '') && (data.date != '')) {
            if (! checkForRepetition(data.name)) {
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
            } else {
                alert('Name of the task must be unique');
                todoTab.unrenderNewTaskForm();
        } else {
            alert('Invalid Data');
            todoTab.unrenderNewTaskForm();
        }

    };


    (function (){
        if (localStorage.length === 0){
            todoTab.renderNewProjectButton();
            todoTab.renderNoProjectWarning();
        } else {
            todoTab.renderNewProjectButton();
            displayAllProjects();;
        }
    })();

    document.getElementById('new-project-btn').addEventListener('click', displayProjectForm);

    return { convertToValidId, displayTaskForm, enableTaskListeners }
})();


export default displayController ;
