<template>
    <div class="popupexit_box" id="popupexit_box">
        <div class="content-pop">
            <div class="img-popUp">
                <img src="@/assets/exitPopup/bg-PopUp.png" style="width:679px; height:480px;border-radius:32px;border:0 !important;">
                <a href="https://www.newhair.com.br/produtos">
                    <div class="popupexit_eu_quero">COMPRAR AGORA</div>
                </a>
                <div class="popupexit_fechar">
                    <img id="popupexit_fechar" src="@/assets/exitPopup/close.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExitPop',
    mounted(){
    function addEvent(obj, evt, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(evt, fn, false);
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn);
        }
    }
    addEvent(document, 'mouseout', function (evt) {
        if (getCookie("cookiePopupexit") === "true") {
            return;
        }
        if (evt.toElement == null && evt.relatedTarget == null) {
            setCookie("cookiePopupexit", true, 3);
            document.getElementById("popupexit_box").style.display = "flex";
        }
    });

    document.getElementById("popupexit_fechar").addEventListener('click', () => {
        document.getElementById("popupexit_box").style.display = 'none';
    });

    function setCookie(nomeCookie, valorGravado, diasExpira) {
        var d = new Date();
        d.setTime(d.getTime() + (diasExpira * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = nomeCookie + "=" + valorGravado + ";" + expires + ";path=/";
    }

    function getCookie(nomeCookie) {
        var name = nomeCookie + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    }
}
</script>


<style scoped>
@media screen and (max-width: 768px) {
    .popupexit_box {
        display: none !important;
    }
}

.popupexit_box {
    display: none;
    position: fixed;
    z-index: 99999999;
    text-align: center;
    border: none;
    box-shadow: none !important;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    padding: 0;
    transform: scale(1.03);
}

.img-popUp {
    position: relative;
    width: 680px;
    margin: 0 auto;
}

.popupexit_fechar {
    position: absolute;
    top: -25px;
    right: -25px;
    transition: 0.1s;
}

.popupexit_fechar img{
    width: 40px;
    cursor: pointer;
    transition: 0.1s;
}

.popupexit_fechar img:hover{
    transform: scale(1.2);
    transition: 0.1s;
}

.popupexit_eu_quero {
    position: absolute;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #00ba00;
    cursor: pointer;
    font-weight: bold;
    padding: 15px 35px;
    bottom: 8%;
    left: 0;
    right: 0;
    width: max-content;
    margin: 0 auto;
    border-radius: 10px;
    border: 1px solid #12ac53;
    transition: 0.5s;
}

.popupexit_eu_quero:hover {
    background-color: #00000000;
    color: #ffffff;
    font-size: 22px;
    transform: scale(1.2);
    transition: 0.5s;
    border: 1px solid #fff;
}
</style>