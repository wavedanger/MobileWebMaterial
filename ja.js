var ImgIputHandler={     
    facePath:[     
        {faceName:"不错",facePath:"images\不错.png"},     
        {faceName:"愤怒",facePath:"images\愤怒.png"},     
        {faceName:"憨笑",facePath:"images\憨笑.png"},     
        {faceName:"汗",facePath:"images\汗.png"},     
        {faceName:"呵呵",facePath:"images\呵呵.png"},     
        {faceName:"黑线",facePath:"images\黑线.png"},     
        {faceName:"滑稽",facePath:"images\滑稽.png"},     
        {faceName:"惊恐",facePath:"images\惊恐.png"},     
        {faceName:"委屈",facePath:"images\委屈.png"}
    ]     
    ,     
    Init:function(){     
        var isShowImg=false;     
        $(".Input_text").focusout(function(){     
            $(this).parent().css("border-color", "#cccccc");     
            $(this).parent().css("box-shadow", "none");     
            $(this).parent().css("-moz-box-shadow", "none");     
            $(this).parent().css("-webkit-box-shadow", "none");     
        });     
        $(".Input_text").focus(function(){     
        $(this).parent().css("border-color", "rgba(19,105,172,.75)");     
        $(this).parent().css("box-shadow", "0 0 3px rgba(19,105,192,.5)");     
        $(this).parent().css("-moz-box-shadow", "0 0 3px rgba(241,39,232,.5)");     
        $(this).parent().css("-webkit-box-shadow", "0 0 3px rgba(19,105,252,3)");     
        });     
        $(".imgBtn").click(function(){     
            if(isShowImg==false){     
                isShowImg=true;     
                $(this).parent().prev().animate({marginTop:"-125px"},300);     
                if($(".faceDiv").children().length==0){     
                    for(var i=0;i<ImgIputHandler.facePath.length;i  ){     
                        $(".faceDiv").append("<img title=\"" ImgIputHandler.facePath[i].faceName "\" src=\"face/" ImgIputHandler.facePath[i].facePath "\" />");     
                    }     
                    $(".faceDiv>img").click(function(){     
                              
                        isShowImg=false;     
                        $(this).parent().animate({marginTop:"0px"},300);     
                        ImgIputHandler.insertAtCursor($(".Input_text")[0],"[" $(this).attr("title") "]");     
                    });     
                }     
            }else{     
                isShowImg=false;     
                $(this).parent().prev().animate({marginTop:"0px"},300);     
            }     
        });     
        $(".postBtn").click(function(){     
            alert($(".Input_text").val());     
        });     
    },     
    insertAtCursor:function(myField, myValue) {     
    if (document.selection) {     
        myField.focus();     
        sel = document.selection.createRange();     
        sel.text = myValue;     
        sel.select();     
    } else if (myField.selectionStart || myField.selectionStart == "0") {     
        var startPos = myField.selectionStart;     
        var endPos = myField.selectionEnd;     
        var restoreTop = myField.scrollTop;     
        myField.value = myField.value.substring(0, startPos)   myValue   myField.value.substring(endPos, myField.value.length);     
        if (restoreTop > 0) {     
            myField.scrollTop = restoreTop;     
        }     
        myField.focus();     
        myField.selectionStart = startPos   myValue.length;     
        myField.selectionEnd = startPos   myValue.length;     
    } else {     
        myField.value  = myValue;     
        myField.focus();     
    }     
}     
}