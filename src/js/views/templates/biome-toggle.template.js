module.exports = (data) => `
<div class="biome__toggle">
    <label for="biome__toggle">Biome</label>
    <select class="biome__toggle" id="biome__toggle">
        ${data.grids.map((item) => `
            <option value="${item}"}>${item}</option>
        `)}
    </select>
</div>
`;

