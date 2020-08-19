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

    function checkDueDate(dateString) {
        const regex = /\d+/g;
        const found = dateString.match(regex);
        console.log(found)
        let year = parseInt(found[2]);
        let month = parseInt(found[1]) - 1;
        let day = parseInt(found[0]);

        var task = new Date(year, month, day);
        var now = new Date();

        if (now < task) {
            return false;
        } else {
            return true;
        }

    };

    const displayAllProjects = () => {
        Object.keys(localStorage).forEach((key) => {
            if (document.getElementById(key)) {
                document.getElementById(key).remove();
            }
            todoTab.renderAllProjects(key);
            let item = JSON.parse(localStorage.getItem(key));
            item.forEach((data) => {
                let obj = JSON.parse(data);
                if (obj.completed === false) {
                    todoTab.renderAllTasks(obj, key);
                    if ( checkDueDate(obj.date) ) {
                        document.getElementById(`task-container-${obj.name}`).classList.add('late-task');
                    }
                    enableTaskListeners(obj.name);
                }
            });
            item.forEach((data) => {
                let obj = JSON.parse(data);
                if (obj.completed === true) {
                    todoTab.renderAllTasks(obj, key);
                    todoTab.swapBtns(obj.name, obj.completed);
                    document.getElementById(`edit-task-btn-${obj.name}`).disabled = true;
                    enableUndoTaskListeners(obj.name);
                }
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

    function placeFormData (obj) {
        document.getElementById('fname').value = obj.name.replace(/-+/g, " ");;
        document.getElementById('fdescription').value = obj.description;
        document.getElementById('foptions').value = obj.difficulty;
        document.getElementById('datepicker').value = obj.date;
    }

    function gatherTaskFormData () {
        return {
            name: convertToValidId(document.getElementById('fname').value),
            description: document.getElementById('fdescription').value,
            difficulty: document.getElementById('foptions').value,
            date: document.getElementById('datepicker').value,
            completed: false
        };
    };

    function validateFormData (data) {
        if ((data.name != '') && (data.description != '') && (data.difficulty != '') && (data.date != '')) {
            return true;
        } else {
            alert('Invalid Data, all fields must be filled');
            return false;
        }
    };

    const checkForRepetition = (key) => {
        let check = false ;
        Object.keys(localStorage).forEach((item) => {
            JSON.parse(localStorage.getItem(item)).forEach((obj) => {
                if (JSON.parse(obj).name === key) {
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
        placeFormData(obj);
        document.getElementById('fsubmit').addEventListener('click', (() => {
        let data = gatherTaskFormData();
            if (!validateFormData(data)) {
                alert("Task can't be equal");
                todoTab.unrenderNewTaskForm();
            } else if (checkForRepetition(data.name)) {
                if ((data.description != obj.description) || (data.difficulty != obj.difficulty) || (data.date != obj.date)) {
                    handleTaskSubmit(document.getElementById(`task-container-${key}`));
                    deleteTask(key);
                }
                todoTab.unrenderNewTaskForm();
            } else {
                handleTaskSubmit(document.getElementById(`task-container-${key}`));
                console.log(localStorage);
                deleteTask(key);
                console.log(localStorage);
            }
        }))
    };

    function completeTask(key) {
        let storageKey = document.getElementById(`task-container-${key}`).parentElement.id;
        let obj = getTaskInfo(storageKey, key);
        obj.completed = true;
        deleteTask(key);
        let value = JSON.parse(localStorage.getItem(storageKey));
        localStorage.removeItem(storageKey);
        value.push(JSON.stringify(obj));
        localStorage.setItem(storageKey, JSON.stringify(value));
        displayAllProjects();
    }

    function undoTask(key) {
        let storageKey = document.getElementById(`task-container-${key}`).parentElement.id;
        let obj = getTaskInfo(storageKey, key);
        obj.completed = false;
        deleteTask(key);
        let value = JSON.parse(localStorage.getItem(storageKey));
        localStorage.removeItem(storageKey);
        value.push(JSON.stringify(obj));
        localStorage.setItem(storageKey, JSON.stringify(value));
        displayAllProjects();
    };

    const enableUndoTaskListeners = (key) => {
        document.getElementById(`undo-task-btn-${key}`).addEventListener('click', () => {undoTask(key)});
    }

    const enableTaskListeners = (key) => {
        document.getElementById(`delete-task-btn-${key}`).addEventListener('click', (() => { deleteTask(key) }));
        document.getElementById(`edit-task-btn-${key}`).addEventListener('click', (() => { editTask(key) }));
        document.getElementById(`complete-task-btn${key}`).addEventListener('click', (() => { completeTask(key) }));
    };

    const handleTaskSubmit = (btn) => {
        let data = gatherTaskFormData();
        if (validateFormData(data)) {
            if (! checkForRepetition(data.name)) {
                // Update the data on the localStorage
                let storageKey = btn.parentElement.id ;
                let value = JSON.parse(localStorage.getItem(storageKey));
                localStorage.removeItem(storageKey);
                value.push(JSON.stringify(data));
                localStorage.setItem(storageKey, JSON.stringify(value));
                // Takes Care of the Visual
                todoTab.unrenderNewTaskForm();
                displayAllProjects();
                // Enable Button Listeners
                enableTaskListeners(data.name);
            } else {
                alert('Name of the task must be unique');
                todoTab.unrenderNewTaskForm();
            }
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
