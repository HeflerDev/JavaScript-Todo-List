!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){this.name=e,this.listOfTasks=[],this.isObject=function(e){return null!==e&&("function"==typeof e||"object"==typeof e)},this.addTaskToProject=function(e){return!!this.isObject(e)&&(this.listOfTasks.push(e),!0)},this.saveDataToCache=function(){"string"==typeof this.name?localStorage.setItem(e,JSON.stringify(this.listOfTasks)):alert("Error: Report Error")}}},function(e,t,n){"use strict";n.r(t);var o={renderTag:(e,t="content",n=null,o=null)=>{const r=document.createElement(e);return document.getElementById(t).appendChild(r),n&&(r.id=n),Array.isArray(o)?o.forEach(e=>r.classList.add(e)):o&&r.classList.add(o),r}},r=n(0),a=n.n(r);var c=(()=>{const e=(e,t,n,r,a)=>{o.renderTag("div",a,"task-container-"+e,["box","task-container"]),o.renderTag("div","task-container-"+e,"sub-task-container"+e,["sub-task-container","minibox","flex-grid"]),o.renderTag("h2","sub-task-container"+e,"task-title"+e,["minibox","col-10","text-left"]).textContent=e.replace(/-+/g," "),o.renderTag("button","sub-task-container"+e,"complete-task-btn"+e,"col-2").textContent="Done!",o.renderTag("div","sub-task-container"+e,"task-content"+e,["minibox","flex-grid","col-12"]),o.renderTag("span","task-content"+e,"task-description"+e,["minibox","col-12","col-m-9"]).innerHTML=t,o.renderTag("div","task-content"+e,"btn-container"+e,["col-12","col-m-3","minibox","column"]),o.renderTag("button","btn-container"+e,"edit-task-btn-"+e,"col-12").innerHTML="Edit",o.renderTag("button","btn-container"+e,"delete-task-btn-"+e,"col-12").innerHTML="Delete",o.renderTag("div","task-content"+e,"task-info-container"+e),o.renderTag("span","task-info-container"+e,"xp-info"+e).textContent="30xp",o.renderTag("span","task-info-container"+e,"difficulty-info"+e).textContent=n,o.renderTag("span","task-info-container"+e,"points-info"+e).textContent="1000 Points",o.renderTag("span","task-info-container"+e,"date-info"+e).textContent=r};return{renderAllTasks:(t,n)=>{e(t.name,t.description,t.difficulty,t.date,n)},swapBtns:(e,t)=>{if(t){const t=document.getElementById("complete-task-btn"+e);t.id="undo-task-btn-"+e,t.innerHTML="Undo Task",document.getElementById("task-container-"+e).classList.add("completed-task")}else{const t=document.getElementById("undo-task-btn-"+e);t.id="complete-task-btn"+e,t.innerHTML="Done!",document.getElementById("task-container-"+e).classList.remove("completed-task")}},renderNoProjectWarning:()=>{o.renderTag("h1","content",null,["box","col-12"]).textContent="No Project to display"},renderProjectsForm:()=>{o.renderTag("div","content","project-form-container",null),o.renderTag("form","project-form-container","project-form",["flex-grid","around","box","row","col-l-5","col-12"]);o.renderTag("label","project-form",null,["col-12","col-m-4","col-l-4"]).textContent="Project Name",o.renderTag("input","project-form","project-name",["col-12","col-m-8","col-l-8"]);const e=o.renderTag("input","project-form","project-submit-btn",["col-12"]);e.type="button",e.value="Create Project"},unrenderProjectsForm:()=>{document.getElementById("project-form-container").remove()},renderAllProjects:e=>{o.renderTag("div","content",""+e,["flex-grid","col-12","project-box"]);o.renderTag("h2",""+e,"project-"+e,["minibox","col-12","col-l-10","project-name-box"]).textContent=e.replace(/-+/g," ");o.renderTag("button",""+e,"new-task-btn-"+e,["col-12","col-l-2"]).textContent="New Task"},renderTask:e,renderNewTaskForm:()=>{o.renderTag("div","content","new-task-form-container"),o.renderTag("form","new-task-form-container","new-task-form",["box","row","start","flex-grid"]),o.renderTag("label","new-task-form","taskname",["minibox","col-12","col-l-2"]).textContent="Name of the Task",o.renderTag("input","new-task-form","fname",["minibox","col-12","col-l-10"]).type="text",o.renderTag("label","new-task-form","desclabel",["col-12","col-l-2","minibox"]).textContent="Description",o.renderTag("textarea","new-task-form","fdescription",["col-12","col-l-10"]),o.renderTag("label","new-task-form","diflabel",["col-12","col-l-2","minibox","column"]).textContent="Difficulty",o.renderTag("select","new-task-form","foptions",["col-12","col-l-2","minibox","column"]),o.renderTag("option","foptions").textContent="Trivial",o.renderTag("option","foptions").textContent="Easy",o.renderTag("option","foptions").textContent="Medium",o.renderTag("option","foptions").textContent="Hard",o.renderTag("label","new-task-form",null,["col-12","col-l-2","minibox","column"]).textContent="Due Date:",o.renderTag("input","new-task-form","datepicker",["col-12","col-l-2"]);const e=document.getElementById("datepicker");new TheDatepicker.Datepicker(e).render();const t=o.renderTag("input","new-task-form","fsubmit",["col-11","col-l-4"]);t.type="button",t.value="Create Task"},unrenderNewTaskForm:function(){document.getElementById("new-task-form-container").remove()},renderNewTaskBtn:()=>{o.renderTag("div","tasks-tab","new-task-container",["minibox","col-12","end"]),o.renderTag("button","new-task-container","new-task-btn","col-2").innerHTML="Add Task"},renderNewProjectButton:()=>{o.renderTag("div","content","project-btn-container",["box","end","col-12"]),o.renderTag("button","project-btn-container","new-project-btn",["minibox","center","col-12"]);o.renderTag("span","new-project-btn",null).textContent="New Project"}}})();(()=>{const e=e=>e.replace(/\s/g,"-"),t=(e,t)=>{const n=JSON.parse(localStorage.getItem(e));let o=null;return n.forEach(e=>{JSON.parse(e).name===t&&(o=e)}),JSON.parse(o)},n=e=>{Object.keys(localStorage).forEach(t=>{JSON.parse(localStorage.getItem(t)).forEach((n,o)=>{JSON.parse(n).name===e&&(((e,t)=>{const n=JSON.parse(localStorage.getItem(e));n.splice(t,1),localStorage.removeItem(e),localStorage.setItem(e,JSON.stringify(n))})(t,o),document.getElementById("task-container-"+e).remove())})})};function o(){return{name:e(document.getElementById("fname").value),description:document.getElementById("fdescription").value,difficulty:document.getElementById("foptions").value,date:document.getElementById("datepicker").value,completed:!1}}function r(e){return""!==e.name&&""!==e.description&&""!==e.difficulty&&""!==e.date}const l=e=>{let t=!1;return Object.keys(localStorage).forEach(n=>{JSON.parse(localStorage.getItem(n)).forEach(n=>{JSON.parse(n).name===e&&(t=!0)})}),t},i=()=>{Object.keys(localStorage).forEach(e=>{document.getElementById(e)&&document.getElementById(e).remove(),c.renderAllProjects(e);const t=document.getElementById("new-task-btn-"+e);t.addEventListener("click",()=>{m(t)});const n=JSON.parse(localStorage.getItem(e));n.forEach(t=>{const n=JSON.parse(t);!1===n.completed&&(c.renderAllTasks(n,e),function(e){const t=e.match(/\d+/g),n=parseInt(t[2],10),o=parseInt(t[1],10)-1,r=parseInt(t[0],10),a=new Date(n,o,r);return!(new Date<a)}(n.date)&&document.getElementById("task-container-"+n.name).classList.add("late-task"),s(n.name))}),n.forEach(t=>{const n=JSON.parse(t);!0===n.completed&&(c.renderAllTasks(n,e),c.swapBtns(n.name,n.completed),document.getElementById("edit-task-btn-"+n.name).disabled=!0,u(n.name))})})},d=e=>{const t=o();if(r(t))if(l(t.name))c.unrenderNewTaskForm();else{const n=e.parentElement.id,o=JSON.parse(localStorage.getItem(n));localStorage.removeItem(n),o.push(JSON.stringify(t)),localStorage.setItem(n,JSON.stringify(o)),c.unrenderNewTaskForm(),i(),s(t.name)}},s=e=>{document.getElementById("delete-task-btn-"+e).addEventListener("click",()=>{n(e)}),document.getElementById("edit-task-btn-"+e).addEventListener("click",()=>{const a=t(document.getElementById("task-container-"+e).parentElement.id,e);c.renderNewTaskForm(),function(e){document.getElementById("fname").value=e.name.replace(/-+/g," "),document.getElementById("fdescription").value=e.description,document.getElementById("foptions").value=e.difficulty,document.getElementById("datepicker").value=e.date}(a),document.getElementById("fsubmit").addEventListener("click",()=>{const t=o();r(t)?l(t.name)?(t.description===a.description&&t.difficulty===a.difficulty&&t.date===a.date||(d(document.getElementById("task-container-"+e)),n(e)),c.unrenderNewTaskForm()):(d(document.getElementById("task-container-"+e)),n(e)):c.unrenderNewTaskForm()})}),document.getElementById("complete-task-btn"+e).addEventListener("click",()=>{const o=document.getElementById("task-container-"+e).parentElement.id,r=t(o,e);r.completed=!0,n(e);const a=JSON.parse(localStorage.getItem(o));localStorage.removeItem(o),a.push(JSON.stringify(r)),localStorage.setItem(o,JSON.stringify(a)),i()})},m=e=>{document.getElementById("new-task-form")||(c.renderNewTaskForm(),document.getElementById("fsubmit").addEventListener("click",()=>{d(e)}))};const u=e=>{document.getElementById("undo-task-btn-"+e).addEventListener("click",()=>{!function(e){const o=document.getElementById("task-container-"+e).parentElement.id,r=t(o,e);r.completed=!1,n(e);const a=JSON.parse(localStorage.getItem(o));localStorage.removeItem(o),a.push(JSON.stringify(r)),localStorage.setItem(o,JSON.stringify(a)),i()}(e)})},g=()=>{const t=document.getElementById("project-name");if(""!==t.value){new a.a(e(t.value)).saveDataToCache(),c.unrenderProjectsForm(),i()}else c.unrenderProjectsForm()};0===localStorage.length?(c.renderNewProjectButton(),c.renderNoProjectWarning()):(c.renderNewProjectButton(),i()),document.getElementById("new-project-btn").addEventListener("click",()=>{document.getElementById("project-form-container")&&c.unrenderProjectsForm(),document.getElementById("project-form-container")||(c.renderProjectsForm(),document.getElementById("project-submit-btn").addEventListener("click",g))})})()}]);