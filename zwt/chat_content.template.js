var messages = [
    
]

function renderContentTemplate(index, content, messages) {
    // chat_content
    var chatContent = '';
    var myImg = getMyAvatar();
}

function chatTemplate(avatar, messages, isMe) {
    var timmer = '';
    var firstMessage = '<p class="first">' + getMessageContent(messages[0]) + '</p>';
    var laterMessages = constructLaterMessage(messages);
    var isMeClass = '';
    var avatar = getImg(avatar);

    if (isMe) {
        isMeClass = 'isme';
        avatar = getMyAvatar();
    }

    var template =
        '    <div class="isyou ' + isMeClass + '"><span class="avatar"><' + avatar + ' data-pin-nopin="true"><i class="timer">' + timmer + '</i></span>' +
        '    <div' +
        '        class="desc">' +
        firstMessage +
        '        <p>Ai bảo 24/24 đâu.</p>' +
        '        <p>Với lại cái chính là giữ cho da đẹp, đẹp thì khỏi son phấn gì luôn trai nó cũng theo <img src="http://stc.web.zalo.zdn.vn/images/emoticon/zing_01.png">)</p>' +
        '        <div' +
        '            class="clear"></div>' +
        '    </div>' +
        '    </div>';
}

function constructHeadTemplate(name, avatar) {
    var loginTime = '';
    var template =
        '<div class="head-msg">' +
        '    <span class="img"><img ' + getImg(avatar) + ' data-pin-nopin="true"></span>' +
        '    <h2>' + name + '</h2>' +
        '    <p id="lasttime_7479683659103669000">' + loginTime + '</p>' +
        '    <div class="action-group clearfix"><a id="notify_conv" class="func-default func-off-notify">Tắt thông báo</a><a id="group_action" class="func-default func-add-group"' +
        '            href="#" title="Thêm vào nhóm" style="display: none;">Thêm vào nhóm</a></div>' +
        '</div>';
    
    return template;
}

function initHeadTemplate(name, avatar) {
    var head = constructHeadTemplate(name, avatar);
}


function constructLaterMessage(messages) {
    var laterMessages = '';

    for (var i = 1; i < messages.length; i++) {
        laterMessages += '<p>' + getMessageContent(messages[i]) + '</p>';
    }

    return laterMessages;
}

function getMessageContent(message) {
    return message;
}

function getMyAvatar() {
    return '<img src="//avatar.talk.zdn.vn/d/9/a/2/2/75/035460b2f33ff21d2ce605b31b846820.jpg">';
}

function getImg(url) {
    return '<img src="' + url + '">'
}

function icons() {
    return {
        ':)': 'http://stc.web.zalo.zdn.vn/images/emoticon/zing_01.png'
    }
}