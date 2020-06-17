module.exports = (data) => 
`
<div class="monster-configurator__group">
    <label for="${data.name}">${data.label}</label>
    <input class="monster-configurator__input" type="text" id="${data.name}"/>
</div>
`;