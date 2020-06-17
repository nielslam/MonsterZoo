module.exports = (data) => 
`
<div class="monster-configurator__group monster-configurator__group--checkbox">
    <input type="checkbox" id="${data.name}" checked>
    <label for="${data.name}">${data.label}</label>
</div>
`;