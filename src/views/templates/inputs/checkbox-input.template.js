module.exports = (data) => 
`
<div class="monster-configurator__group monster-configurator__group--checkbox">
    <input type="checkbox" class="monster-configurator__input monster-configurator__input--checkbox" id="${data.name}" ${data.value ? 'checked': ''} ${data.disabled ? 'disabled':''}>
    <label for="${data.name}">${data.label}</label>
</div>
`;