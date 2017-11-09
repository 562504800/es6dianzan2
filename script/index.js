class PraiseButton { //命名父类PraiseButton
    constructor(num, element) {
        this.num = num;
        this.element = element;
    } //此处不加标点符号，否则报错
    clickAction() {
        this.element.click(() => {
            if (this.num < 10) {
                //点赞手势有颜色，数值加1,增加+1的动作出现
                this.element.css("-webkit-filter", 'grayscale(0)'); //点赞手势亮
                $("#animation").addClass('num'); //添加+1动作
                this.num = add(this.num); //操作点赞数量增加一个
                setTimeout(function() {
                    $("#animation").removeClass("num");
                }, 1000); //删除+1动作
            } else {
                //点赞手势置灰，数值为0
                this.element.css("-webkit-filter", 'grayscale(1)'); //点赞手势置灰
                this.num = 0; //点赞数量置为0
            }
            console.log(this.num);
        });
    };
};

//编写子类
class Thumb extends PraiseButton() {
    constructor(num, element) {
        super(num, element);
    }
}; //Thumb继承父类PriceButton的方法


export
default { //export default输出thumb类的写法
    Thumb
}

// let f = new Thumb(0, $("#thumb"));
// f.clickAction();