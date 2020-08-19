module.exports = function Project(name) {
  this.name = name;
  this.listOfTasks = [];

  this.isObject = function (val) {
    if (val === null) { return false; }
    return ((typeof val === 'function') || (typeof val === 'object'));
  };

  this.addTaskToProject = function (obj) {
    if (this.isObject(obj)) {
      this.listOfTasks.push(obj);
      return true;
    }
    return false;
  };

  this.saveDataToCache = function () {
    if (typeof this.name === 'string') {
      localStorage.setItem(name, JSON.stringify(this.listOfTasks));
    } else {
      alert('Error: Report Error');
    }
  };
};
