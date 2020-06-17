module.exports = (data) => 
`
<div class="monster-configurator__group">
    <label for="${data.name}">${data.label}</label>
    <select class="monster-configurator__input" id="${data.name}">
        ${data.options.map((item) => `
            <option value="${item.value}">${item.name}</option>
        `)}
    </select>
</div>
`;