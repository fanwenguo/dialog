function Dialog(options) {
    //默认参数
    var defaults = {
        background: '#ccc',
        width: 400,
        height: 200
    }
    var data = {};
    for (var key in defaults) {
        data[key] = defaults[key];
    }
    for (var k in options) {
        data[k] = options[k];
    }
    this.width = data.width;
    this.height = data.height;
    this.background = data.background;
    this.close = data.close;
    this.winw = document.body.clientWidth || document.documentElement.clientWidth;
    this.winh = document.body.clientHeight || document.documentElement.clientHeight;
    this.init();
}
Dialog.prototype = {
    constructor: Dialog,
    init: function() {
        var div = document.createElement('div');
        var mark = document.createElement('div');
        var close = document.createElement('span');
        close.className = 'close';
        close.innerHTML = this.close;
        mark.className = 'mark';
        div.className = 'dialog';
        div.style = 'width:' + this.width + 'px;' + 'height:' + this.height + 'px;' + 'background:' + this.background + ';left:' + (this.winw - this.width) / 2 + 'px;top:' + (this.winh - this.height) / 2 + 'px';
        document.body.appendChild(mark);
        document.body.appendChild(div);
        div.appendChild(close);
        this.addEvent();
    },
    addEvent: function() {
        var clo = document.querySelector('.close');
        var mark = document.querySelector('.mark');
        var dialog = document.querySelector('.dialog');
        clo.onclick = function() {
            document.body.removeChild(mark);
            document.body.removeChild(dialog);
        }
    }
}