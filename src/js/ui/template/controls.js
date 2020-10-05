export default ({locale, biImage, loadButtonStyle, downloadButtonStyle, saveButtonStyle}) => (`
    <div class="tui-image-editor-controls">
        <!--<div class="tui-image-editor-controls-logo">
            <img src="${biImage}" />
        </div>-->
        <ul class="tui-image-editor-menu"></ul>

        <div class="tui-image-editor-controls-buttons">
            <div style="width: 20px;
            position: absolute; 
            z-index: 2; 
            padding-left: 12px; 
            height: 38px;
            line-height: 4;
            text-align: center;">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"/></svg>
            </div>
            <div style="${loadButtonStyle}">
                ${locale.localize('Carregar')}
                <input type="file" class="tui-image-editor-load-btn" />
            </div>
            <button class="tui-image-editor-download-btn" style="${downloadButtonStyle}">
            <div style="width: 20px;
    height: 38px;
    line-height: 4;
    text-align: center;">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/>
                </svg>
            </div>            
                ${locale.localize('Baixar')}
            </button>
            <button class="tui-image-editor-save-btn" style="${saveButtonStyle};">            
                ${locale.localize('Salvar')}
            </button>
        </div>
    </div>
`);
