! function() {
    function f() {
        var a = document.createElement("div");
        a.id = "levelmaxblock";
        a.innerHTML = '<div class="inner"> <div class="header"> </div> <div class="isi"> <p>المعذرة ! المرجو تعطيل أداة منع الإعلانات.</p> <div class="tombol"><button class="2">تحديث الصفحة</button></div></div></div> ';
        document.body.append(a);
        document.body.style.overflow = "hidden";
        var b = a.querySelectorAll("button");
        a.querySelector(".close");
        var d = a.querySelectorAll(".caranya > div");
        for (a = 0; a < b.length; a++) b[a].addEventListener("click", function(a) {
            a.preventDefault();
            a = this.getAttribute("class").split(" ")[0];
            for (var c = 0; c < d.length; c++) d[c].classList.remove("active"), b[c].classList.remove("active");
            b[a - 1].classList.add("active");
            d[a - 1].classList.add("active")
        })
    }
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    b.onerror = function() {
        f();
        window.adblock = !0
    };
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e)
}();
