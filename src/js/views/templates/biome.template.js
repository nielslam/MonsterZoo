module.exports = (data) => `
<div class="biome>
<div class="biome__info>
    Temperatuur: ${data.weather.main.temp} &#8451;
</div>
<div class="biome__toggle">
    <label for="biome__toggle">Biome</label>
    <select class="biome__toggle" id="biome__toggle">
        ${data.grids.map((item) => `
            <option value="${item}" ${item == data.currentBiome ? 'selected':''}>${item}</option>
        `)}
    </select>
</div>
</div>

`;

