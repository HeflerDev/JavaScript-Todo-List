!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){this.name=e,this.listOfTasks=[],this.isObject=function(e){return null!==e&&("function"==typeof e||"object"==typeof e)},this.addTaskToProject=function(e){return!!this.isObject(e)&&(this.listOfTasks.push(e),!0)},this.saveDataToCache=function(){"string"==typeof this.name?localStorage.setItem(e,JSON.stringify(this.listOfTasks)):alert("Error: Report Error")},this.getDataFromCache=function(){JSON.parse(localStorage.getItem(e))}}},function(e,t,n){"use strict";n.r(t);var o={renderTag:(e,t="content",n=null,o=null)=>{let r=document.createElement(e);return document.getElementById(t).appendChild(r),n&&(r.id=n),Array.isArray(o)?o.forEach(e=>r.classList.add(e)):o&&r.classList.add(o),r}},r=n(0),a=n.n(r);var i=(()=>{function e(){o.renderTag("div","content","project-btn-container",["box","end","col-12"]),o.renderTag("button","project-btn-container","new-project-btn",["minibox","center","col-12"]),o.renderTag("span","new-project-btn",null).textContent="New Project"}!function(){if(0===localStorage.length){e(),o.renderTag("h1","content",null,["box","col-12"]).textContent="No Project to display"}else e(),Object.keys(localStorage).forEach((function(e,t){o.renderTag("div","content","project-container-"+t,["flex-grid","col-12"]),o.renderTag("h2","project-container-"+t,"project-"+t,["minibox","col-12","col-l-10"]).textContent=e;let n=o.renderTag("button","project-container-"+t,"new-task-btn-"+t,["col-12","col-l-2"]);n.textContent="New Task",n.addEventListener("click",(function(){c.displayTaskForm(n)}))}))}();return{renderProjectsForm:()=>{o.renderTag("form","content","projects-form-container",["flex-grid","around","box","row","col-l-5","col-12"]),o.renderTag("label","projects-form-container",null,["col-12","col-m-4","col-l-4"]).textContent="Project Name",o.renderTag("input","projects-form-container","project-name",["col-12","col-m-8","col-l-8"]);let e=o.renderTag("input","projects-form-container","project-submit-btn",["col-12"]);e.type="button",e.value="Create Project"},unrenderProjectsForm:()=>{document.getElementById("projects-form-container").remove()}}})();var c=(()=>{const e=()=>{document.getElementById("projects-form-container")||(i.renderProjectsForm(),document.getElementById("project-submit-btn").addEventListener("click",t))},t=()=>{let e=document.getElementById("project-name");new a.a(e.value).saveDataToCache(),i.unrenderProjectsForm()},n=e=>{let t={name:document.getElementById("fname"),description:document.getElementById("fdescription"),difficulty:document.getElementById("foptions"),date:document.getElementById("datepicker")};l.renderTask(t.name.value,t.description.value,t.difficulty.value,t.date.value,e)};return window.onload=function(){document.getElementById("new-project-btn").addEventListener("click",e)},{generateUniqueId:()=>{let e=new Date;return`Task-${e.getFullYear()}${e.getMonth()}${e.getMinutes()}${e.getMilliseconds()}`},displayTaskForm:e=>{if(!document.getElementById("new-task-form")){l.renderNewTaskForm();document.getElementById("fsubmit").addEventListener("click",(function(){n(e)}))}}}})();var l={renderTask:(e,t,n,r,a)=>{let i=c.generateUniqueId();o.renderTag("div",a.parentElement.id,"task-container"+i,"box"),o.renderTag("div","task-container"+i,"sub-task-container"+i,["minibox","flex-grid"]),o.renderTag("h2","sub-task-container"+i,"task-title"+i,["minibox","col-10","text-left"]).textContent=e,o.renderTag("button","sub-task-container"+i,"complete-task-btn"+i,"col-2").textContent="Done!",o.renderTag("div","sub-task-container"+i,"task-content"+i,["minibox","flex-grid","col-12"]),o.renderTag("span","task-content"+i,"task-description"+i,["minibox","col-12","col-m-9"]).innerHTML=t,o.renderTag("div","task-content"+i,"btn-container"+i,["col-12","col-m-3","minibox","column"]),o.renderTag("button","btn-container"+i,"edit-task-btn"+i,"col-12").innerHTML="Edit",o.renderTag("button","btn-container"+i,"delete-task-btn"+i,"col-12").innerHTML="Delete",o.renderTag("div","task-content"+i,"task-info-container"+i),o.renderTag("span","task-info-container"+i,"xp-info"+i).textContent="30xp",o.renderTag("span","task-info-container"+i,"difficulty-info"+i).textContent=n,o.renderTag("span","task-info-container"+i,"points-info"+i).textContent="1000 Points",o.renderTag("span","task-info-container"+i,"date-info"+i).textContent=r},renderNewTaskForm:()=>{o.renderTag("form","content","new-task-form",["box","row","start","flex-grid"]),o.renderTag("label","new-task-form","taskname",["minibox","col-12","col-l-2"]).textContent="Name of the Task",o.renderTag("input","new-task-form","fname",["minibox","col-12","col-l-10"]).type="text",o.renderTag("label","new-task-form","desclabel",["col-12","col-l-2","minibox"]).textContent="Description",o.renderTag("textarea","new-task-form","fdescription",["col-12","col-l-10"]),o.renderTag("label","new-task-form","diflabel",["col-12","col-l-2","minibox","column"]).textContent="Difficulty",o.renderTag("select","new-task-form","foptions",["col-12","col-l-2","minibox","column"]),o.renderTag("option","foptions").textContent="Trivial",o.renderTag("option","foptions").textContent="Easy",o.renderTag("option","foptions").textContent="Medium",o.renderTag("option","foptions").textContent="Hard",o.renderTag("label","new-task-form",null,["col-12","col-l-2","minibox","column"]).textContent="Due Date:",o.renderTag("input","new-task-form","datepicker",["col-12","col-l-2"]);const e=document.getElementById("datepicker");new TheDatepicker.Datepicker(e).render();let t=o.renderTag("input","new-task-form","fsubmit",["col-11","col-l-4"]);t.type="button",t.value="Create Task"},renderNewTaskBtn:()=>{o.renderTag("div","tasks-tab","new-task-container",["minibox","col-12","end"]),o.renderTag("button","new-task-container","new-task-btn","col-2").innerHTML="Add Task"}}}]);