import Project from './projects';
import todoTab from './todoTab';

const displayController = (() => {
/*
 * Module that handle the main logic of the project
 * Listeners and handlers can be found here
 * This module call functions that render, but never render by itself
 */

  const convertToValidId = (id) => id.replace(/\s/g, '-');

  const getTaskInfo = (projectId, taskName) => {
    const obj = JSON.parse(localStorage.getItem(projectId));
    let filter = null;
    obj.forEach((item) => {
      if (JSON.parse(item).name === taskName) {
        filter = item;
      }
    });
    return JSON.parse(filter);
  };

  const swapData = (parent, index) => {
    const data = JSON.parse(localStorage.getItem(parent));
    data.splice(index, 1);
    localStorage.removeItem(parent);
    localStorage.setItem(parent, JSON.stringify(data));
  };

  const deleteTask = (key) => {
    Object.keys(localStorage).forEach((item) => {
      const arr = JSON.parse(localStorage.getItem(item));
      arr.forEach((subItem, index) => {
        const obj = JSON.parse(subItem);
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
    const year = parseInt(found[2], 10);
    const month = parseInt(found[1], 10) - 1;
    const day = parseInt(found[0], 10);

    const task = new Date(year, month, day);
    const now = new Date();

    if (now < task) {
      return false;
    }
    return true;
  }

  function placeFormData(obj) {
    document.getElementById('fname').value = obj.name.replace(/-+/g, ' ');
    document.getElementById('fdescription').value = obj.description;
    document.getElementById('foptions').value = obj.difficulty;
    document.getElementById('datepicker').value = obj.date;
  }

  function gatherTaskFormData() {
    return {
      name: convertToValidId(document.getElementById('fname').value),
      description: document.getElementById('fdescription').value,
      difficulty: document.getElementById('foptions').value,
      date: document.getElementById('datepicker').value,
      completed: false,
    };
  }

  function validateFormData(data) {
    if ((data.name !== '')
        && (data.description !== '')
        && (data.difficulty !== '')
        && (data.date !== '')) {
      return true;
    }
    return false;
  }

  const checkForRepetition = (key) => {
    let check = false;
    Object.keys(localStorage).forEach((item) => {
      JSON.parse(localStorage.getItem(item)).forEach((obj) => {
        if (JSON.parse(obj).name === key) {
          check = true;
        }
      });
    });
    return check;
  };

  /* eslint-disable no-use-before-define */

  const displayAllProjects = () => {
    Object.keys(localStorage).forEach((key) => {
      if (document.getElementById(key)) {
        document.getElementById(key).remove();
      }
      todoTab.renderAllProjects(key);
      const btn = document.getElementById(`new-task-btn-${key}`);
      btn.addEventListener('click', (() => { displayTaskForm(btn); }));
      const item = JSON.parse(localStorage.getItem(key));
      item.forEach((data) => {
        const obj = JSON.parse(data);
        if (obj.completed === false) {
          todoTab.renderAllTasks(obj, key);
          if (checkDueDate(obj.date)) {
            document.getElementById(`task-container-${obj.name}`).classList.add('late-task');
          }
          enableTaskListeners(obj.name);
        }
      });
      item.forEach((data) => {
        const obj = JSON.parse(data);
        if (obj.completed === true) {
          todoTab.renderAllTasks(obj, key);
          todoTab.swapBtns(obj.name, obj.completed);
          document.getElementById(`edit-task-btn-${obj.name}`).disabled = true;
          enableUndoTaskListeners(obj.name);
        }
      });
    });
  };

  const handleTaskSubmit = (btn) => {
    const data = gatherTaskFormData();
    if (validateFormData(data)) {
      if (!checkForRepetition(data.name)) {
        // Update the data on the localStorage
        const storageKey = btn.parentElement.id;
        const value = JSON.parse(localStorage.getItem(storageKey));
        localStorage.removeItem(storageKey);
        value.push(JSON.stringify(data));
        localStorage.setItem(storageKey, JSON.stringify(value));
        // Takes Care of the Visual
        todoTab.unrenderNewTaskForm();
        displayAllProjects();
        // Enable Button Listeners
        enableTaskListeners(data.name);
      } else {
        todoTab.unrenderNewTaskForm();
        /* eslint-disable */
          alert('Repeated Task: Name must be Unique');
        /* eslint-enable */
      }
    } else {
      /* eslint-disable */
        alert('All fields must be filled');
        /* eslint-enable */
    }
  };

  const enableTaskListeners = (key) => {
    document.getElementById(`delete-task-btn-${key}`).addEventListener('click', (() => { deleteTask(key); }));

    document.getElementById(`edit-task-btn-${key}`).addEventListener('click', (() => {
      // Grabs the Object with the corresponding data
      const obj = getTaskInfo(document.getElementById(`task-container-${key}`).parentElement.id, key);
      // Put the current values in the form
      todoTab.renderNewTaskForm();
      placeFormData(obj);
      document.getElementById('fsubmit').addEventListener('click', (() => {
        const data = gatherTaskFormData();
        if (!validateFormData(data)) {
          todoTab.unrenderNewTaskForm();
        } else if (checkForRepetition(data.name)) {
          if ((data.description !== obj.description)
            || (data.difficulty !== obj.difficulty)
            || (data.date !== obj.date)) {
            handleTaskSubmit(document.getElementById(`task-container-${key}`));
            deleteTask(key);
          }
          todoTab.unrenderNewTaskForm();
        } else {
          handleTaskSubmit(document.getElementById(`task-container-${key}`));
          deleteTask(key);
        }
      }));
    }));

    document.getElementById(`complete-task-btn${key}`).addEventListener('click', (() => {
      const storageKey = document.getElementById(`task-container-${key}`).parentElement.id;
      const obj = getTaskInfo(storageKey, key);
      obj.completed = true;
      deleteTask(key);
      const value = JSON.parse(localStorage.getItem(storageKey));
      localStorage.removeItem(storageKey);
      value.push(JSON.stringify(obj));
      localStorage.setItem(storageKey, JSON.stringify(value));
      displayAllProjects();
    }));
  };

  const displayTaskForm = (btn) => {
    if (!document.getElementById('new-task-form')) {
      todoTab.renderNewTaskForm();
      document.getElementById('fsubmit').addEventListener('click', (() => { handleTaskSubmit(btn); }));
    }
  };

  function undoTask(key) {
    const storageKey = document.getElementById(`task-container-${key}`).parentElement.id;
    const obj = getTaskInfo(storageKey, key);
    obj.completed = false;
    deleteTask(key);
    const value = JSON.parse(localStorage.getItem(storageKey));
    localStorage.removeItem(storageKey);
    value.push(JSON.stringify(obj));
    localStorage.setItem(storageKey, JSON.stringify(value));
    displayAllProjects();
  }

  const enableUndoTaskListeners = (key) => {
    document.getElementById(`undo-task-btn-${key}`).addEventListener('click', () => { undoTask(key); });
  };

  const handleProjectSubmit = () => {
    const name = document.getElementById('project-name');
    if (name.value !== '') {
      const project = new Project(convertToValidId(name.value));
      project.saveDataToCache();
      todoTab.unrenderProjectsForm();
      displayAllProjects();
    } else {
      todoTab.unrenderProjectsForm();
    }
  };

  /* eslint-enable no-use-before-define */

  const displayProjectForm = () => {
    if (document.getElementById('project-form-container')) {
      todoTab.unrenderProjectsForm();
    }
    // The separate If's is to 'reload'
    if (!document.getElementById('project-form-container')) {
      todoTab.renderProjectsForm();
      document.getElementById('project-submit-btn').addEventListener('click', handleProjectSubmit);
    }
  };

  if (localStorage.length === 0) {
    todoTab.renderNewProjectButton();
    todoTab.renderNoProjectWarning();
  } else {
    todoTab.renderNewProjectButton();
    displayAllProjects();
  }

  document.getElementById('new-project-btn').addEventListener('click', displayProjectForm);

  return { convertToValidId, displayTaskForm, enableTaskListeners, displayAllProjects };
})();

export default displayController;
