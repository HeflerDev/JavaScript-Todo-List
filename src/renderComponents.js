/*
 * This Module contain rendering helpers to make the code cleaner in
 * other modules
 */

const renderComponents = (() => {
    // Function that Works as a helper to create tags
    const renderTag = (tagName, tagParent = 'content', tagId = null, tagClass = null) => {
        let tag = document.createElement(tagName);
        document.getElementById(tagParent).appendChild(tag);
        if (tagId) {
            tag.id = tagId;
        }
        if (Array.isArray(tagClass)){
            tagClass.forEach(item => tag.classList.add(item));
        } else if (tagClass) {
            tag.classList.add(tagClass);
        }
    };
})();
