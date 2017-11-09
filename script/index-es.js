"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
    Thumb;
};

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    //命名父类PriseButton

    function PraiseButton(num, element) {
        _classCallCheck(this, PraiseButton);

        this.num = num;
        this.element = element;
    }

    _createClass(PraiseButton, [{
        key: "clickAction",
        value: function clickAction() {
            var _this = this;

            this.element.click(function () {
                if (_this.num < 10) {
                    //点赞手势有颜色，数值加1,增加+1的动作出现
                    _this.element.css("-webkit-filter", 'grayscale(0)'); //点赞手势亮
                    $("#animation").addClass('num'); //添加+1动作
                    _this.num = add(_this.num); //操作点赞数量增加一个
                    setTimeout(function () {
                        $("#animation").removeClass("hide");
                    }, 1000); //删除+1动作
                } else {
                        //点赞手势置灰，数值为0
                        _this.element.css("-webkit-filter", 'grayscale(1)'); //点赞手势置灰
                        _this.num = 0; //点赞数量置为0
                    }
                console.log(_this.num);
            });
        }
    }]);

    return PraiseButton;
}();

;

//编写子类

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb(num, element) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
    }

    return Thumb;
}(PraiseButton());

; //Thumb继承父类PriceButton的方法

var f = new Thumb(0, $("#thumb"));
f.clickAction();
;
