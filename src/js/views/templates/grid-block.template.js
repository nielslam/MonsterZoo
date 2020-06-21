module.exports = (data) => `
<div 
    class="zoo-grid__block ${data.type} ${data.class ? data.class:''}"
    ${(data.dataPos != null || data.dataPos != undefined) ? `data-pos="${data.dataPos}"`:''}
>
${data.type == 'obstacle' ? `<div class="zoo-grid__obstacle obstacle obstacle--${Math.round(Math.random() * 9)}"></div>`:``}

</div>
`;

