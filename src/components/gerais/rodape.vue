<template lang="html">
	<footer>
		<section class="footer_links"
			style="background-color:#fafafb;padding:30px 0px;border-bottom:1px solid #ebebf3;">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-sm-3 ">
						<div class="col-sm-12 p-0">
							<p class="ajusteLeft my-2" style="color:#1A1A1A;font-weight:bold !important;font-size:17px; ">New Hair</p>
							<p class="ajusteLeft my-2" style="font: normal normal normal 14px/18px Open Sans; letter-spacing: 0px; color: #555555;">© 2021 NEW HAIR COSMETICOS LTDA. Rod. Fernão Dias, S/N, Galpão G40 Modulo A e B, Extrema - MG, CEP: 37.640-000.CNPJ: 44.336.526/0001-12.</p>
							<p class="ajusteLeft mt-3" style="color:#1A1A1A;font-weight:bold !important;font-size:17px; ">Segue a gente lá</p>

							<div class="mt-2 socialnetwork" v-if="!masculino">
								<a href="https://facebook.com/newhairvitamin/" target="_blank">
									<img class="mx-2" src="@/assets/img/facePink.png" loading="lazy">
								</a>
								<a href="https://instagram.com/newhaircaps" target="_blank">
									<img class="mx-2" src="@/assets/img/instaPink.png" loading="lazy">
								</a>
								<a href="https://www.tiktok.com/@newhaircaps" target="_blank">
									<img class="mx-2" src="@/assets/img/tiktok.png" width="30px" loading="lazy">
								</a>
								<a href="https://www.youtube.com/channel/UCzspD0_7dbFaDTaNOGjvurQ" target="_blank">
									<img class="mx-2" src="@/assets/img/youtube.png" width="35px" loading="lazy">
								</a>
							</div>
							
							<div class="mt-2 socialnetwork" v-if="masculino">
								<a href="https://facebook.com/newhairvitamin/" target="_blank">
									<img class="mx-2" src="@/assets/img/newhair-masculino/sociais/Facebook.png" loading="lazy">
								</a>
								<a href="https://instagram.com/newhaircaps" target="_blank">
									<img class="mx-2" src="@/assets/img/newhair-masculino/sociais/inatagram.png" loading="lazy">
								</a>
								<a href="https://www.tiktok.com/@newhaircaps" target="_blank">
									<img class="mx-2" src="@/assets/img/newhair-masculino/sociais/Tiktok.png" loading="lazy">
								</a>
								<a href="https://www.youtube.com/channel/UCzspD0_7dbFaDTaNOGjvurQ" target="_blank">
									<img class="mx-2" src="@/assets/img/newhair-masculino/sociais/Youtube.png" loading="lazy">
								</a>
							</div>
						</div>
					</div>
					<div class="col-sm-3 colLinks" style="padding-left: 69px;">
						<div class="col-sm-12 links_r">
							<p style="color:#1A1A1A;font-weight:bold;font-size:17px;" class="my-2">Links Úteis</p>
							<a href="https://rastreio.newhair.com.br" target="_blank">Rastreio</a>
							<a href="/checkout/acesso">Meus Pedidos</a>
              <a href="/quem-somos">Quem Somos</a>
							<a href="/pagina/duvidas-frequentes">Perguntas Frequentes</a>
							<a href="/pagina/politica-de-privacidade">Políticas de Privacidade</a>
							<a href="/pagina/termos">Termos e Condições</a>
							<a href="https://blog.newhair.com.br/">Blog New Hair</a>
							<a href="https://trabalheconosco.vagas.com.br/vitabe" target="_blank">Trabalhe Conosco</a>
							<a href="https://www.newhair.com.br/pagina/referencias-cientificas" target="_blank" v-if="$route.name =='homeTaboola'">Referências Científicas</a>
						</div>
					</div>
					<div class="col-sm-3 colrela" style="padding-left: 37px;">
						<div class="col-sm-12 colRelacionamento">
							<p style="color:#1A1A1A;font-weight:bold;font-size:17px;" class="my-2">Relacionamento.</p>
							<p class="horario pb-2"><strong>Televendas:</strong> <br> 0800 878 2363</p>
							<p class="horario pb-2"><strong>Central de Atendimento:</strong> <br> (11) 4395-6747</p>
							<p class="horario"><strong>Horário de atendimento:</strong> <br> Segunda a sexta-feira das
								<br> 8h às 18h.</p>
							<!-- Botão Hichat -->
							<a class="chatbtn btnHichat d-none"
								style="display:inline-block;background-color:#18c161;color:#fff;border-radius:6px;padding:10px;margin-top:20px;">CHAT
								ONLINE</a>
							<!-- Botão WhatsApp -->
							<a v-show="!masculino" href="https://api.whatsapp.com/send?phone=551143956747&text=Ol%C3%A1%2C%20poderiam%20me%20ajudar%3F"
								class="chatbtn" target="_blank"
								style="display:inline-block;background-color:#18c161;color:#fff;border-radius:6px;padding:10px;margin-top:20px;">CHAT
								ONLINE</a>
							<a v-show="masculino" href="https://api.whatsapp.com/send?phone=551143956747&text=Ol%C3%A1%2C%20poderiam%20me%20ajudar%3F"
								class="chatbtn" target="_blank"
								style="display:inline-block;background-color:#234380;color:#fff;border-radius:6px;padding:10px;margin-top:20px;">CHAT
								ONLINE</a>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="col-sm-12 colPagamentos">
							<p style="color:#1A1A1A;font-weight:bold;font-size:17px;">Formas de pagamento.</p>
							<img class="imgResponsive" src="@/assets/img/PAYMENT.png" loading="lazy">
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--links--->
		<section class="final_footer" style="background-color:#fafafb;padding: 20px 0px;">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="col-sm-12">
							<p style="color:#000;font-size:16px;"><strong>Copyright © <span id="changeY"></span> New Hair. Todos os direitos reservados.</strong></p>
							<p class="text-rodape"> Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, layout, aqui veículados são de propriedade exclusiva da NEW HAIR COSMETICOS LTDA. É vedada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização. A violação de qualquer direito mencionado implicará na responsabilização cível e criminal nos termos da Lei.<br><br> Rod. Fernão Dias, S/N, Galpão G40 Modulo A e B, Extrema - MG, CEP: 37.640-000 <br> CNPJ: 44.336.526/0001-12.</p>
							<p class="text-rodape">Produto dispensado da obrigatoriedade de registro conforme RDC 27/2010.</p>
							<p class="text-rodape mt-4">Preços e condições de pagamento exclusivos para compras via internet. Ofertas válidas até o término de nossos estoques para internet. Vendas sujeitas à análise e confirmação de dados. Em caso de divergência de preços no site, o valor válido é o do Carrinho de Compras. Os valores dos produtos podem ser alterados no site a qualquer momento, sem aviso <span @click="showPopup"> prévio</span>. Estes produtos não são medicamentos.</p>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="col-sm-12 selos-rodape">
							<p style="color:#000;font-size:16px;"><strong>Certificados de Segurança</strong></p>
							<div class="selo"><img class="imgResponsive" src="@/assets/img//selos-rodape/Google-Safe.png" loading="lazy"></div>
							<div class="selo text-center"><a href="https://www.reclameaqui.com.br/empresa/new-hair-caps/" target="_blank"><img class="imgResponsive" src="@/assets/img//selos-rodape/Selo-RA-1000.png" width="150" loading="lazy"></a></div>
							<div class="selo"><img class="imgResponsive" src="@/assets/img//selos-rodape/Compra-Segura.png" loading="lazy"></div>
							<div class="selo"><img class="imgResponsive" src="@/assets/img//selos-rodape/Nao-Testamos-Em-Animais.png" loading="lazy"></div>
							<!-- <div class="selo"><img class="imgResponsive" src="@/assets/img//selos-rodape/Certificado-SSL.png"></div> -->
						</div>
					</div>
				</div>
				<!--row-->
				<div class="row justify-content-center text-center my-4">
					<div class="col-sm-12">
						<img v-if="!masculino" src="@/assets/img/logo_nh.png" style="max-width:100% !important;" />
						<img v-if="masculino" src="@/assets/img/newhair-masculino/logo-new-hair-masculino.png" style="max-width:100% !important;" />
					</div>
					<div class="logo-wap col-sm-12 mt-3 mb-2">
						<a href="https://wapstore.com.br/?utm_source=vitabe&utm_medium=site&utm_content=footesite&utm_campaign=referencia_cliente" target="_blank" ><img src="@/assets/img/logo-wap-store.svg" width="70px" loading="lazy"/></a>
					</div>
				</div>
			</div>
			<!--container-->
		</section>
		<!-- Modal -->
		<NewsPopup v-if="popup" />
	</footer>
</template>

<script>
import $ from "jquery";
// import FormModalMobile from "@/components/gerais/FormModalMobile.vue";
import NewsPopup from "@/components/gerais/popups/newsPopup.vue";

export default {
  data() {
    return {
      popup: false,
      url: "",
      masculino: false,
    };
  },

  components: {
    // FormModalMobile,
    NewsPopup,
  },

  methods: {
    openModal() {
      this.$refs.modalMobile.show();
    },

    showPopup() {
      this.popup = true;
    },
  },

  mounted() {
    $(function () {
      $(".btnHichat").click(function () {
        $("#dtbot-iframe")
          .css("visibility", "visible")
          .css("opacity", 1)
          .css("right", "0px")
          .css("left", "auto");
      });
    });

    // Identifica o diretorio do site após o dominio
    this.url = window.location.href;
    this.url = this.url.split("/");
    this.url = this.url[3];
    if (
      this.url == "newhair-masculino" ||
      this.url == "produtos-masculino" ||
      this.url ==
        "new-hair-gummy-uva-verde-vitamina-em-goma-para-cabelos.html" ||
      this.url ==
        "new-hair-vitamina-capilar-com-acido-hialuronicoebiotina-masculino.html" ||
      this.url.includes("new-hair-caps-masculino")
    ) {
      this.masculino = true;
    }
  },
};
</script>

<style scoped>
.sacMob {
  display: none;
}
.chatbtn {
  text-decoration: none;
  cursor: pointer;
  /* opacity: 1; */
}
.btn-sub {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.horario {
  font: normal normal normal 14px/18px Open Sans;
  letter-spacing: 0px;
  color: #555555;
}
.horario strong {
  font: normal normal 600 14px/18px Open Sans;
  letter-spacing: 0px;
  color: #000000;
}
.socialnetwork:hover {
  opacity: 0.9;
}
.chatbtn:hover {
  opacity: 0.9;
}
.btn-sub:hover {
  opacity: 0.9;
}
#newsletterHair {
  width: 77%;
  padding: 25px;
}

#newsletterHair::placeholder {
  padding-left: 5px;
}
.text-rodape {
  color: #666666;
  font-size: 14px;
  font-weight: normal !important;
}

.col-sm-2 {
  padding-left: 12px !important;
}
.colLinks p,
a {
  font-family: "Roboto", sans-serif !important;
}
.colLinks a {
  font-weight: normal !important;
}
.ajusteLeft {
  font-family: "Roboto Regular", sans-serif !important;
  padding-left: 0 !important;
  font-weight: normal !important;
  font-size: 13px;
  text-align: left;
  font-weight: normal !important;
  color: #666;
}
.final_footer p {
  font-family: "Roboto Regular", sans-serif !important;
  font-weight: normal !important;
}
.formNews {
  padding-left: 12px !important;
}
.form-control {
  border: 1px solid #ff4289;
  margin-left: 0 !important;
  padding-left: 0 !important;
}
.col-sm-12 {
  margin-left: 0 !important;
  padding-left: 0 !important;
}

footer img {
  max-width: 100% !important;
}
.footer_links input#newsletter {
  border-radius: none !important;
  width: 70%;
  display: inline-block;
  padding-left: 15px;
  height: 45px;
}
.links_r {
  padding: 0px;
}
.links_r a {
  font: normal normal normal 14px/18px Open Sans;
  letter-spacing: 0px;
  color: #555555;
  display: block;
  margin-bottom: 5px;
}
.selos-rodape {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.selos-rodape p {
  width: 100%;
}

.selo {
  width: 48%;
  padding: 20px 0;
  text-align: left !important;
}

@media screen and (max-width: 568px) {
  .sacMob {
    display: flex;
  }
}
@media screen and (max-width: 768px) {
  .colLinks {
    padding-left: 25px !important;
  }
  .ajusteLeft {
    padding-left: 15px;
  }
  .colrela {
    margin-top: 20px;
    padding-left: 25px !important;
  }
  .colPagamentos {
    margin-top: 20px;
  }
  .selo {
    width: 50%;
    text-align: center;
  }
  .logo-wap {
    padding-bottom: 40px;
  }
}
</style>
