!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){this.name=e,this.listOfTasks=[],this.isObject=function(e){return null!==e&&("function"==typeof e||"object"==typeof e)},this.addTaskToProject=function(e){return!!this.isObject(e)&&(this.listOfTasks.push(e),!0)},this.saveDataToCache=function(){"string"==typeof this.name?localStorage.setItem(e,JSON.stringify(this.listOfTasks)):alert("Error: Report Error")},this.getDataFromCache=function(e){JSON.parse(localStorage.getItem(e))}}},function(e,t,n){"use strict";n.r(t);var o={renderTag:(e,t="content",n=null,o=null)=>{let r=document.createElement(e);return document.getElementById(t).appendChild(r),n&&(r.id=n),Array.isArray(o)?o.forEach(e=>r.classList.add(e)):o&&r.classList.add(o),r}},r=n(0),a=n.n(r);var l=(()=>{const e=(e,t,n,r,a)=>{o.renderTag("div",a,"task-container-"+e,"box"),o.renderTag("div","task-container-"+e,"sub-task-container"+e,["sub-task-container","minibox","flex-grid"]),o.renderTag("h2","sub-task-container"+e,"task-title"+e,["minibox","col-10","text-left"]).textContent=e.replace(/-+/g," "),o.renderTag("button","sub-task-container"+e,"complete-task-btn"+e,"col-2").textContent="Done!",o.renderTag("div","sub-task-container"+e,"task-content"+e,["minibox","flex-grid","col-12"]),o.renderTag("span","task-content"+e,"task-description"+e,["minibox","col-12","col-m-9"]).innerHTML=t,o.renderTag("div","task-content"+e,"btn-container"+e,["col-12","col-m-3","minibox","column"]),o.renderTag("button","btn-container"+e,"edit-task-btn-"+e,"col-12").innerHTML="Edit",o.renderTag("button","btn-container"+e,"delete-task-btn-"+e,"col-12").innerHTML="Delete",o.renderTag("div","task-content"+e,"task-info-container"+e),o.renderTag("span","task-info-container"+e,"xp-info"+e).textContent="30xp",o.renderTag("span","task-info-container"+e,"difficulty-info"+e).textContent=n,o.renderTag("span","task-info-container"+e,"points-info"+e).textContent="1000 Points",o.renderTag("span","task-info-container"+e,"date-info"+e).textContent=r};return{renderAllTasks:(t,n)=>{e(t.name,t.description,t.difficulty,t.date,n)},swapBtns:(e,t)=>{if(t){let t=document.getElementById("complete-task-btn"+e);t.id="undo-task-btn-"+e,t.innerHTML="Undo Task"}else{let t=document.getElementById("undo-task-btn-"+e);t.id="complete-task-btn"+e,t.innerHTML="Done!"}},renderNoProjectWarning:()=>{o.renderTag("h1","content",null,["box","col-12"]).textContent="No Project to display"},renderProjectsForm:()=>{o.renderTag("div","content","project-form-container",null),o.renderTag("form","project-form-container","project-form",["flex-grid","around","box","row","col-l-5","col-12"]),o.renderTag("label","project-form",null,["col-12","col-m-4","col-l-4"]).textContent="Project Name",o.renderTag("input","project-form","project-name",["col-12","col-m-8","col-l-8"]);let e=o.renderTag("input","project-form","project-submit-btn",["col-12"]);e.type="button",e.value="Create Project"},unrenderProjectsForm:()=>{document.getElementById("project-form-container").remove()},renderAllProjects:e=>{o.renderTag("div","content",""+e,["flex-grid","col-12","project-box"]),o.renderTag("h2",""+e,"project-"+e,["minibox","col-12","col-l-10","project-name-box"]).textContent=e.replace(/-+/g," ");let t=o.renderTag("button",""+e,"new-task-btn-"+e,["col-12","col-l-2"]);t.textContent="New Task",t.addEventListener("click",(function(){c.displayTaskForm(t)}))},renderProject:e=>{o.renderTag("div","content",e,["flex-grid","col-12"]);o.renderTag("h2",e,"project-"+e,["minibox","col-12","col-l-10"]);let t=o.renderTag("button",e,"new-task-btn-"+e,["col-12","col-l-2"]);t.textContent="New Task",t.addEventListener("click",(function(){c.displayTaskForm(t)}))},renderTask:e,renderNewTaskForm:()=>{o.renderTag("div","content","new-task-form-container"),o.renderTag("form","new-task-form-container","new-task-form",["box","row","start","flex-grid"]),o.renderTag("label","new-task-form","taskname",["minibox","col-12","col-l-2"]).textContent="Name of the Task",o.renderTag("input","new-task-form","fname",["minibox","col-12","col-l-10"]).type="text",o.renderTag("label","new-task-form","desclabel",["col-12","col-l-2","minibox"]).textContent="Description",o.renderTag("textarea","new-task-form","fdescription",["col-12","col-l-10"]),o.renderTag("label","new-task-form","diflabel",["col-12","col-l-2","minibox","column"]).textContent="Difficulty",o.renderTag("select","new-task-form","foptions",["col-12","col-l-2","minibox","column"]),o.renderTag("option","foptions").textContent="Trivial",o.renderTag("option","foptions").textContent="Easy",o.renderTag("option","foptions").textContent="Medium",o.renderTag("option","foptions").textContent="Hard",o.renderTag("label","new-task-form",null,["col-12","col-l-2","minibox","column"]).textContent="Due Date:",o.renderTag("input","new-task-form","datepicker",["col-12","col-l-2"]);let e=o.renderTag("input","new-task-form","fsubmit",["col-11","col-l-4"]);e.type="button",e.value="Create Task"},unrenderNewTaskForm:function(){document.getElementById("new-task-form-container").remove()},renderNewTaskBtn:()=>{o.renderTag("div","tasks-tab","new-task-container",["minibox","col-12","end"]),o.renderTag("button","new-task-container","new-task-btn","col-2").innerHTML="Add Task"},renderNewProjectButton:()=>{o.renderTag("div","content","project-btn-container",["box","end","col-12"]),o.renderTag("button","project-btn-container","new-project-btn",["minibox","center","col-12"]),o.renderTag("span","new-project-btn",null).textContent="New Project"}}})();var c=(()=>{const e=e=>e.replace(/\s/g,"-"),t=()=>{let t=document.getElementById("project-name");if(""!=t.value){new a.a(e(t.value)).saveDataToCache(),l.unrenderProjectsForm(),l.renderProject(e(t.value))}else alert("Invalid Data"),l.unrenderProjectsForm()},n=e=>{Object.keys(localStorage).forEach(t=>{JSON.parse(localStorage.getItem(t)).forEach((n,o)=>{JSON.parse(n).name===e&&(((e,t)=>{let n=JSON.parse(localStorage.getItem(e));n.splice(t,1),localStorage.removeItem(e),localStorage.setItem(e,JSON.stringify(n))})(t,o),document.getElementById("task-container-"+e).remove())})})},o=()=>{Object.keys(localStorage).forEach(e=>{document.getElementById(e)&&document.getElementById(e).remove(),l.renderAllProjects(e);let t=JSON.parse(localStorage.getItem(e));t.forEach(t=>{let n=JSON.parse(t);!1===n.completed&&(l.renderAllTasks(n,e),u(n.name))}),t.forEach(t=>{let n=JSON.parse(t);!0===n.completed&&(l.renderAllTasks(n,e),l.swapBtns(n.name,n.completed),m(n.name))})})},r=(e,t)=>{let n=JSON.parse(localStorage.getItem(e)),o=null;return n.forEach(e=>{JSON.parse(e).name==t&&(o=e)}),JSON.parse(o)};function c(){return{name:e(document.getElementById("fname").value),description:document.getElementById("fdescription").value,difficulty:document.getElementById("foptions").value,date:document.getElementById("datepicker").value,completed:!1}}function i(e){return""!=e.name&&""!=e.description&&""!=e.difficulty&&""!=e.date||(alert("Invalid Data, all fields must be filled"),!1)}const d=e=>{let t=!1;return Object.keys(localStorage).forEach(n=>{JSON.parse(localStorage.getItem(n)).forEach(n=>{JSON.parse(n).name===e&&(t=!0)})}),t},s=e=>{let t=r(document.getElementById("task-container-"+e).parentElement.id,e);l.renderNewTaskForm(),function(e){document.getElementById("fname").value=e.name.replace(/-+/g," "),document.getElementById("fdescription").value=e.description,document.getElementById("foptions").value=e.difficulty,document.getElementById("datepicker").value=e.date}(t),document.getElementById("fsubmit").addEventListener("click",()=>{let o=c();i(o)?d(o.name)?(o.description==t.description&&o.difficulty==t.difficulty&&o.date==t.date||(f(document.getElementById("task-container-"+e)),n(e)),l.unrenderNewTaskForm()):(f(document.getElementById("task-container-"+e)),console.log(localStorage),n(e),console.log(localStorage)):(alert("Task can't be equal"),l.unrenderNewTaskForm())})};const m=e=>{document.getElementById("undo-task-btn-"+e).addEventListener("click",()=>{!function(e){let t=document.getElementById("task-container-"+e).parentElement.id,a=r(t,e);a.completed=!1,n(e);let l=JSON.parse(localStorage.getItem(t));localStorage.removeItem(t),l.push(JSON.stringify(a)),localStorage.setItem(t,JSON.stringify(l)),o()}(e)})},u=e=>{document.getElementById("delete-task-btn-"+e).addEventListener("click",()=>{n(e)}),document.getElementById("edit-task-btn-"+e).addEventListener("click",()=>{s(e)}),document.getElementById("complete-task-btn"+e).addEventListener("click",()=>{!function(e){let t=document.getElementById("task-container-"+e).parentElement.id,a=r(t,e);a.completed=!0,n(e);let l=JSON.parse(localStorage.getItem(t));localStorage.removeItem(t),l.push(JSON.stringify(a)),localStorage.setItem(t,JSON.stringify(l)),o()}(e)})},f=e=>{let t=c();if(i(t))if(d(t.name))alert("Name of the task must be unique"),l.unrenderNewTaskForm();else{let n=e.parentElement.id,r=JSON.parse(localStorage.getItem(n));localStorage.removeItem(n),r.push(JSON.stringify(t)),localStorage.setItem(n,JSON.stringify(r)),l.unrenderNewTaskForm(),o(),u(t.name)}};return 0===localStorage.length?(l.renderNewProjectButton(),l.renderNoProjectWarning()):(l.renderNewProjectButton(),o()),document.getElementById("new-project-btn").addEventListener("click",()=>{document.getElementById("project-form-container")&&l.unrenderProjectsForm(),document.getElementById("project-form-container")||(l.renderProjectsForm(),document.getElementById("project-submit-btn").addEventListener("click",t))}),{convertToValidId:e,displayTaskForm:e=>{if(!document.getElementById("new-task-form")){l.renderNewTaskForm();document.getElementById("fsubmit").addEventListener("click",(function(){f(e)}))}},enableTaskListeners:u}})()}]);