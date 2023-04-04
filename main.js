$(function () {
    sideBarClickHandler();
});

const sideBarClickHandler = () => {
    $(".color-item").on("click",function(){
       let class_title =  $(this).find('.color-item--title').text();
       let classLists = $(".callout-title").prop('classList');
        console.log(classLists.length);
        for (let i = 0; i < classLists.length; i++) {
            const className = classLists[i].className;
            console.log(ok);
        }
        // classLists.map(function(class_list){
        //     console.log(class_list);
        // });
       $(".callout-title").addClass(class_title);
    });
}
