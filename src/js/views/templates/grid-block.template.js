module.exports = (data) => `
<div 
    class="zoo-grid__block ${data.obstacle ? 'zoo-grid__block--obstacle':''}"
    draggable="${(!data.obstacle && data.item)}"
>
</div>
`;

