

    // $(".box2").click((e) => {
    //     DownloadFile("https://drive.google.com/file/d/1nXOsNQNEXfb-t1ckwyuJzlqNwaxjBs1n/view?usp=drive_link");
        
    //             // e.preventDefault(); 
                  
    //             // window.location.href  
    //             //     = "D:\\Portfolio\\Admit-Card.pdf"; 

    //            // download();
           
    // });

    $(".cv1").click(() => {

        $(".resume").attr("src", "C:\\Users\\DELL\\Downloads\\image.jpg");
        $(".reshow").css({"display":"block" , "z-index" : "2"});
        $(".curtain").css({"display":"block"});
    })

    $(".curtain").click(() => {
        $(".reshow").css({"display":"none"});
        $(".curtain").css({"display":"none"});
    })

    $(".short").click(() => {
        $(".reshow").css({"display":"none"});
        $(".curtain").css({"display":"none"});
    })


    let blinkInterval ;

    function blink(){  

        $("#eyes").css("color", "black");
        var out= setTimeout(() => {$("#eyes").css("color", "white");} , 400);
           
    }

    $(".cv1").on("mouseover", () => {
        blinkInterval = setInterval(blink, 720);
        
    })

    $(".cv1").on("mouseout", () => {
        clearInterval(blinkInterval);
    })


    ///////////////////////////////   
    function download() {

        axios({
            url: "https://drive.google.com/file/d/1nXOsNQNEXfb-t1ckwyuJzlqNwaxjBs1n/view?usp=drive_link", 
            method: 'GET',
            responseType: 'blob'
        })
            .then((response) => {
                const url = window.URL
                    .createObjectURL(new Blob([response.data]));
                const linki = document.createElement('a');
                linki.href = url;
                linki.setAttribute('download', 'res.pdf');
                document.body.appendChild(linki);
                linki.click();
            })
    }

    function DownloadFile(fileName) {
            //Set the File URL.
        
            var url = "File/" + fileName;
 
            $.ajax({
                url: url,
                cache: false,
                xhr: function () {
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState == 2) {
                            if (xhr.status == 200) {
                                xhr.responseType = "blob";
                            } else {
                                xhr.responseType = "text";
                            }
                        }
                    };
                    return xhr;
                },
                success: function (data) {
                    //Convert the Byte Data to BLOB object.
                    var blob = new Blob([data], { type: "application/octetstream" });
 
                    //Check the Browser type and download the File.
                    var isIE = false || !!document.documentMode;
                    if (isIE) {
                        window.navigator.msSaveBlob(blob, fileName);
                    } else {
                        var url = window.URL || window.webkitURL;
                        link = url.createObjectURL(blob);
                        var a = $("<a />");
                        a.attr("download", fileName);
                        a.attr("href", link);
                        $("body").append(a);
                        a[0].click();
                        $("body").remove(a);
                    }
                }
            });
        };
    ///////////////////////////////

    $(".learn").click(async () => {

        try{

            var x = $(".givename").val();
             const response = await fetch(x);
             const file = await response.blob();
             const pink = document.createElement("a");
             pink.href = URL.createObjectURL(file);
             pink.download = new Date().getTime();
             pink.click();

        } catch(error){
             alert("Failed to download the file!");
        }
    });


    //////////////

    $(".search").mouseenter(() => {
        $(".inp").css({"width":"160px"});
    });
   

    $(".inp").keypress(() => {
        $(".inp").css({"width":"160px", "outline": "none"});
    });

    //////////////

    $(".totop").click(() => {
        $("html, body").animate({ scrollTop: 0 }, 800);
        // window.scrollTo(0,0);
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $(".totop").fadeIn('slow');
        } else {
            $(".totop").fadeOut('slow');
        }
    });

    $(".one").click(() => {
        if($(".accord1").hasClass("active") ){
            $(".accord1").removeClass("active");
            $(".prr > i").removeClass("fa-angle-up");
            $(".prr > i").addClass("fa-angle-down");
        }
        else{
            $(".accord1").addClass("active");
            $(".prr > i").removeClass("fa-angle-down");
            $(".prr > i").addClass("fa-angle-up");
        }
    });

    
    $(".two").click(() => {
        if($(".accord2").hasClass("active") ){
            $(".accord2").removeClass("active");
            $(".prr2 > i").removeClass("fa-angle-up");
            $(".prr2 > i").addClass("fa-angle-down");            
        }
        else{
            $(".accord2").addClass("active");  
            $(".prr2 > i").removeClass("fa-angle-down");
            $(".prr2 > i").addClass("fa-angle-up");         
        }
    });


    ///////////////////
    $('.inp').keyup(function(){
         paget = $('.port').text();
         searchedText = $('.inp').val();
        //  $("body:contains('"+searchedText+"')").css("color", "white");
         console.log("----", paget);

    $("div:contains('"+searchedText+"')").each( function( i, element ) {
      var content = $(element).text();
      content = content.replace( searchedText, '<span class="search-found">' + searchedText + '</span>' );
      element.html( content );
      });
    });

    $(".tul > li").mouseover(() => {
        $(".tul > li").addClass("sonty");
    });


    window.addEventListener("scroll", () => {
        console.log("======uima...........");
        const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
        const scrolen = (scrollTop / (scrollHeight - clientHeight) * 100);
        var nt = `${scrolen}`;
        var yt = nt + "%";
        // console.log("====scrollTop====", scrollTop);
        // console.log("====clientHeight====", clientHeight);
        // console.log("====scrollHeight====", scrollHeight);
        $(".scr").css({"width" : yt}) ;
        if(yt == "100%"){
            $(".scr").css({"width" : "102%"}) ;
        }
    });

    const drag = $(".popbox");
    let o, p;
    function draggable(e){
        console.log("--in draggable---");
        drag.css({"margin-left" : `${e.clientX - o}px` , "margin-top" : `${e.clientY - p}px`})
    }

    $(".popbox").mousedown((e) => {
        var k =  drag.offset();
        o = e.clientX - k.left;
        p = e.clientY - k.top;
        console.log("---o---", k.left);
        console.log("---p---", k.top);
        document.addEventListener("mousemove", draggable);
    })
    
     document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", draggable);
     })

    $(".popup").click( () => {
        $(".popbox").css({ "display" : "inline-block", "margin-left" : "700px"});
    });

    $(".popclos").click(() => {
        $(".popbox").css({ "display" : "none"});
    })
 
