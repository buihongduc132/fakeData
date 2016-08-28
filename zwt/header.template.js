function renderHeaderTemplate(name, time, text, avatar) {
    var headerTemplate = '<div class="list-contact" id="left_menu" style="height: 922px;"> ' +
        '    <div class="nano has-scrollbar" id="nano1"> ' +
        '        <div class="overthrow nano-content" id="left_container" tabindex="0" style="right: -15px;"><ul class="clearfix"><li class="clearfix" id="li_7479683659103669000"><a href="#" class="active" id="cl_7479683659103669000" onclick="ZWebChat.selectChatItem(\'7479683659103669000\',false);return false;"><span class="img"><img src="'+avatar+'"></span><h2><span>'+name+'</span><span class="timer" id="t7479683659103669000" rel="1472351182268"></span></h2><p class="summary"><span style="opacity: 1;">'+text+'</span><span class="num" style="opacity: 1;"></span></p></a><a href="javascript:;" class="remove-func" title="Xóa" onclick="ZWebChat.msgChatDelete(event,\'7479683659103669000\');return false;">Xóa</a></li></ul></div> ' +
            '            <div class="nano-pane" style="display: none;"><div class="nano-slider" style="height: 907px; transform: translate(0px, 0px);"></div></div></div> ' +
            '    </div> '
}
