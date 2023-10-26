<template>
    <div class="mob">
        <a :href="linkTarja">
            <video autoplay muted loop playsinline>
                <source src="@/assets/img/banners/home/mob/Mes-do-Cliente-New-Hair-Masculino-Mobile.mp4" type="video/mp4">
            </video>
        </a>
        <header class="mobf justify-content-around" id="mobMenu">
            <li class="">
                <i class="fa fa-bars icomenu"></i>
            </li>
            <a href="/">
                <img class="logoMob" src="@/assets/img/logo_newhair.png" alt="">
            </a>
            <a :href="`${$siteUrl}/checkout/carrinho/`" @click.prevent="openCarrinho()">
                <img class="svgCart" width="28.5" src="@/assets/img/bag-menu.png" alt="">
                <div class="headerContainerTop-carrinho-num"> {{ dadosCarrinho.quantidadeItens }} </div>
            </a>
            <div class="overlayMenu"></div>
            <ul class="itensMenu">
                <div class="menuicon">
                    <div class="col-12 d-flex">
                           <img src="@/assets/img/menumob/iconemenu.svg" alt="" class="iconemenu ml-2" >
                           <div class=" row ml-3">
                            <a class="cadastre mr-1"  :href="`${$siteUrl}checkout/acesso/`">Entre </a>
                            <p class="cadastre mr-1">ou</p> 
                            <a :href="`${$siteUrl}checkout/acesso/`" class="cadastre">cadastre-se</a>
                            <p class="subt mt-1">para ver seus pedidos</p>
                            </div>
                    </div>
                     <div class="quadrado">
                        <span class="closebtn">X</span>
                    </div>
                </div>
                <div class="nh bg-white pb-3">
                <a class="links" href="/vitamina-para-cabelo-e-unha-em-comprimido">
                    <li>Vitamina com Ácido Hialurônico</li>
                </a>
                <a class="links" href="/new-hair-gummy-vitamina-em-goma-para-cabelo">
                    <li>Vitamina em Gomas</li>
                </a>
                <a class="links" href="/vitamina-para-gestante-e-lactantes">
                    <li>Vitamina para Mamães</li>
                </a>
                <a class="links" href="/new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina">
                    <li><a href="/new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina">Vitamina para Homens</a></li>
                </a>
                <a class="links" href="/serum-facial">
                    <li><a href="/serum-facial">Sérum Facial</a></li>
                </a>
                <a class="links" href="/tratamento-capilar-linha-essentiall">
                    <li><a href="/tratamento-capilar-linha-essential">Linha Essential</a></li>
                </a>
               <div class="todosProd ml-3 "> <li class="prods"><a class="prod"  style="color: white;" href="">Todos os produtos</a></li></div>
                </div>
                <div class="institucionais mb-2">
                    <li class="links"> <img class="mr-2"  src="@/assets/img/menumob/fale_conosco.svg" alt=""><a href="/pagina/atendimento">Fale Conosco</a></li>
                    <li class="links"> <img class="mr-2"  src="@/assets/img/menumob/perguntas_frequentes.svg" alt=""><a href="/pagina/duvidas-frequentes">Perguntas Frequentes</a></li>
                    <li class="links"> <img class="mr-2"  src="@/assets/img/menumob/politicas_de_privacidade.svg" alt=""><a href="/pagina/politica-de-privacidade">Políticas de Privacidade</a></li>
                    <li class="links"><img  class="mr-2" src="@/assets/img/menumob/termos_e_condicoes.svg" alt=""><a href="/pagina/termos">Termos e Condições</a></li>
                    <li class="links"><img  class="mr-2" src="@/assets/img/menumob/quem_somos.svg" alt=""><a href="/quem-somos">Quem Somos</a></li>
                    <li class="links"><img  class="mr-2" src="@/assets/img/menumob/referencias_cientificas.svg" alt=""><a href="/pagina/referencias-cientificas">Referências Científicas</a></li>
                    <li class="links"><img  class="mr-2" src="@/assets/img/menumob/blog.svg" alt=""><a href="https://blog.newhair.com.br/">Blog</a></li>
                </div>
            </ul>
        </header>
    </div>
</template>
<script>
import comunicacao from "@/comunicacao.js";
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      config: false,
      dadosCarrinho: false,
    };
  },
    components: {
    },
  computed: {
    ...mapState(['screenWidth', 'menuLoaded', 'dadosUser'])
  },
  methods: {
    ...mapMutations(['changeStatusMenu']),
    openMenu() {
      comunicacao.$emit("openMenu");
    },
    openCarrinho() {
      comunicacao.$emit("toggleCarrinho", { show: true });
    },
  },
  mounted() {
    var icon = document.querySelectorAll('.fa.icomenu');
    var overlay = document.querySelector('.overlayMenu');
    var menu = document.querySelector('.itensMenu');
    var closebtn = document.querySelector('.quadrado')
    icon.forEach(element => {
        element.addEventListener('click', () => {
        overlay.classList.toggle('activeOverlay');
        menu.classList.toggle('activeMenu');
        });
    });
    overlay.addEventListener('click', () => {
        overlay.classList.toggle('activeOverlay');
        menu.classList.toggle('activeMenu');
    });

    closebtn.addEventListener('click', () =>{
        overlay.classList.toggle('activeOverlay');
        menu.classList.toggle('activeMenu')
    });

    comunicacao.$on("updateSubTotal", (response) => {
      this.subTotalCarrinho = response.valor;
    });
    this.$requestSend(
      "get",
      "/v2/front/checkout/cart",
      {},
      (success, response) => {
        this.dadosCarrinho = response.data;
        if (
          response.data &&
          response.data.subtotal &&
          response.data.subtotal.valor
        ) {
          this.dadosSubTotal = response.data.subtotal.valor;
        }
        comunicacao.$emit("carrinhoCarregado", response.data);
      }
    );
    comunicacao.$on("configCarregada", (response) => {
      this.config = response.configuracoes;
    });

    this.$requestSend(
      "get",
      "/v2/front/checkout/cart",
      {},
      (success, response) => {
        this.dadosCarrinho = response.data;
        comunicacao.$emit("carrinhoCarregado", response.data);
      }
    );
  },
  created() {
    comunicacao.$on(
      "updateNumCarrinho",
      (qtd) => (this.dadosCarrinho.quantidadeItens = qtd)
    );
  },
};
</script>
<style lang="scss" scoped>

video{
    max-width: 100%;
}

    .itensMenu{
        transition: 0.5s ease;
        position:fixed;
        width:0;
        height:0;
        left:-200%;
        background-color:#f5f5f5;
        li{
            list-style-type: none;
            padding: 13px 0px 13px 30px;
            border-top: 1px solid #eee;
            color: #000 !important;

        }

        .prods {
            padding: 8px 6px 8px 12px;
        }

        .cadastre {
            color:#FFFFFF !important;
            font: normal normal normal 17px/16px Open-Sans, sans-serif !important;
            
        }

        .subt {
             color:#FFFFFF !important;
            font: normal normal normal 12px/16px Open-Sans, sans-serif !important;
            letter-spacing: -0.10x;
        }

        .links{
            text-decoration: none;
            font-size:14px;
            color: #000 !important;
        }
    }
    .itensMenu{
        left:-200%;
        top:0;
    }
    .itensMenu.activeMenu{
        width:75vw;
        height:100vh;
        left:0;
        top:0;
        z-index:15;
    }
    .overlayMenu{
        transition:0.5s ease;
        width:100vw;
        height:100%;
        position:fixed;
        top:0;
        left:-200%;
        background-color:rgba(42,2,47, 0.5);
    }
    .overlayMenu.activeOverlay{
        left:0;
        top:0;
        z-index:10;
    }
    .mobf{
        display: none;
    }
    .logoMob{
        position:relative;
        right:-5px;
    }
    .headerContainerTop-carrinho-num {
        position: absolute;
        top: 6%;
        right: 27px;
        font-size: 10px;
        color: #234380;
        background-color: #fffc00;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:1px 5px;        
    }

    .faixadestaquemenu{
        background-color: #ffd516;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .faixadestaquemenu p{
        font-size: 13px;
        font-family: 'Open Sans', sans-serif;
        line-height: 24px;
        color: #000;
        font-weight: bold;
    }

    .todosProd{
        background-color: #333333;
        width: 90% !important;
        height: 36px;
        border-radius: 5px;

    }

    .prod a {
        color: #f5f5f5 !important;
        
    }

    .institucionais  {
        background-color:  #f5f5f5 !important;
         padding-top: 15px;


    }

    .institucionais li {
        height: 36px;
        border: none;
       
    }

    .quadrado {
  position: absolute;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0 15px 0 20px;
  transform: translateX(100%);
  right:0;
  top: 0;
  height: 4%;
  background-color: #234380;
}

.closebtn {
  color: #fff !important;
  z-index: 5;

}

header.mobf{
    padding:10px 0px;
    background-color:#234380;
    align-items:center;
    .menuicon{
        .col-12.d-flex{
            padding:20px;
           background-color:#234380;
        }
    
    i{
        color:#234380;
        font-size:35px;
    }
        }
        i{
            color:#fff;
            font-size:25px;
        }
        li{
            list-style-type: none;
        }
        .svgCart{
            position:relative;
            left:-5px;
        }
    }
    @media screen and (max-width: 800px){
    .mobf{
        display: flex;
    }
    }
.faixa-destaque-black-friday {
    padding: 5px 0;
    background-color: #edbf2c;
}

.faixa-destaque-black-friday p {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
}

.faixa-destaque-black-friday img {
    width: 15px;
    margin: 0 5px;
}


</style>