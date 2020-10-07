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
            
        <div id="loading"
             style="background: rgba(0, 0, 0, 0.54);
             display:none;
             pointer-events: none;
             top: 0;
             left: 0;
             height: 100%;
             width: 100%;
             position: fixed;
             z-index: 99999;">
            <div id="save" style="position:fixed; overflow: hidden;
            margin: 0 0 6px; padding: 15px 15px 15px 50px; width: 300px; right: 0;
                  border-radius: 3px 3px 3px 3px;
                  background-position: 15px center;
                  height: 70px;
                  background-repeat: no-repeat;
                  background-size: 24px;
                  box-shadow: 0 0 12px #999999;
                  font-weight: bold;
                  text-align: center;
                  color: #FFFFFF;">Aguarde...</div>
        </div>
        </div>
    </div>
`);
