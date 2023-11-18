class RayHatcherImagesGrid extends HTMLElement {

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' });

        const tokens = [
            ["QmZr3gwEH2pbUs1WxG4jDud2jXHi1nEXDt7Y23uydJYmbb", "FX1-80228"],
            ["QmZhmSuoVTuZWbNamgPawNVQKfajA7a87wvPeHjak8Azpm", ""],
            ["QmYaJLCvwAQVSDJMnwz3nr7LfPBgmyAzgpnbJwo8BXUzRf", ""],
            ["QmWck95JyJkwuUK6amDnDffqv377EogXXTkxSV5fGHHRX9", ""],
            ["QmV22xEzPqsKsDGgqngKYNsHiisCvD71Fpz96WFW7k7L1B", ""],
            ["QmeJR7cKQJ2L4C3K9jAHLm9jRnXzU8tjdyCCfXpptsXJcZ", ""],
            ["QmeMaHF2k3Wy7kSyxoZX7KhLvFRBBfGPEttCtjxeDBesRy", ""],
            ["QmZBJ2JyaFkdEZLefoD3L2t8X7Rakxpijw5ZqVyfLS75Z8", ""],
            ["QmS2iZJhBYJaMheJyXiLHSg18DfxRLpRqFK4SjXY73No6V", ""],
            ["QmUzNnveLh46bZgtTZF2ruoWaT8p6Zb26oLM6TSCdWdHG6", ""],
            ["QmcgLwY3HQYnnFUsoB4KYakM3DAPJsFwsDTJ5pffLQGzV3", ""],
            ["QmQjXzKx2dWwoSmt9yNGz1w6LFvGX6BpW6yv3exWY2NSBr", ""],
            ["QmYS3Kx5SK38SR7wnPHWwLZQx9ZQsv4Y3sbzPDHTwhxycA", ""],
            ["Qmc9kTWNzgvaUXpk3DdiRWmt5YewS4JYQuUedhGinZPRfm", ""],
        ];

        shadow.innerHTML = `

<style>
    * {
        --s-16-9-w: 600px;
        --ratio-16-9: calc(9 / 16);
        --s-16-9-h: calc(var(--s-16-9-w) * var(--ratio-16-9));
    }
    .grid {
        display: grid; 
        grid-template-columns: var(--s-16-9-w) var(--s-16-9-w) ;
    }
    img {
        width: var(--s-16-9-w); height: var(--s-16-9-h);
    }
</style>

<div class="grid">${tokens.map(([img, url]) => `
    <a href="https://www.fxhash.xyz/gentk/${url}">
        <img src="https://media.fxhash.xyz/w_768/${img}">
    </a>
`).join("")}</div>

`;

    }

}

customElements.define( 'ray-hatcher-images-grid', RayHatcherImagesGrid );