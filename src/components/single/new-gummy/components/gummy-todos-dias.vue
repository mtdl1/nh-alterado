<template>
  <div class="full" >
    <div class="texto-dividido container">
      <div class="row align-items-center">
        <div class="texto col-md-8 pb-3">
          <h2 class="pb-1" >Porquê tomar New Hair Gummy todos os dias?</h2>
          <p class="mt-3" v-if="$route.path == '/new-hair-gummy-morango-vitamina-em-goma-para-cabelos-e-unhas.html' ">Com apenas uma goma capilar New Hair Gummy, é possível ter cabelos lindos e saudáveis. Ao ser ingerida, o organismo absorve rapidamente os 8 ativos da fórmula, proporcionando resultados que podem ser notados em poucos dias. <br>
          A goma capilar possui vitaminas importantes para a saúde do cabelo. Conte com o poder das vitaminas A, B5 (Ácido Pantotênico), B6, B7 (Biotina), B12, C, D, E, e ácido hialurônico, para qualidade do seu cuidado diário. <br>
          Não há malefícios em ingerir gomas para crescimento capilar todos os dias, pois, o produto passou por diversos testes para garantir a sua segurança e eficácia.
          <p class="mt-3" v-else-if="$route.path == '/new-hair-gummies-vitamina-em-goma-para-cabelos-e-unhas-feminino-tratamento-90-dias-brinde.html'">Potentes, poderosas e eficazes. Esses são os três melhores adjetivos para definir a vitamina para o cabelo em goma New Hair Gummy, as mais consumidas e amadas do País que estão renovando a autoestima de milhares de mulheres. <br>
          As oito vitaminas e o ácido hialurônico presentes na fórmula evitam a queda de cabelos, revitalizam o brilho e aceleram o crescimento dos fios. Por esses e outros motivos é que consumir todos os dias é muito benéfico!. <br>
          A dose diária a ser tomada é de uma goma para cabelo por dia, pois apesar de seguro, a New Hair Gummy é um suplemento vitamínico e não pode ser consumido em excesso. <br>
          Como a absorção dos nutrientes é facilitada no período da manhã, é melhor fazer o uso da gominha New Hair após a primeira refeição do dia, para otimizar e potencializar os resultados. Não é necessário ingerir água ou outro líquido. </p>
          <p v-else>Potentes, poderosas e eficazes. Os três melhores adjetivos para definir o as gominhas mais consumidas e amadas do país. Com 9 vitaminas, 3 minerais essenciais e ácido hialurônico, as gomas de New Hair vão transformar a saúde dos seus cabelos, pele e unhas para sempre! <br> Conte com o poder das vitaminas A, B2, B5, B6, B7, B9, B12, D3, E, com o reforço do Cromo, Selênio e Zinco.</p>
        </div>
        <div v-if="!singleCapsFem" class="imagem col-md-4">
          <img class=" position-absolute img-todos-dias" src="@/assets/img/novas-gomas/single/New-Hair-Vitamin-Gomas-3-Potes-Desktop.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GummyTodosDias",
  data() {
			return {
				url: "",
				singleCapsFem: false,
			}
		},

  mounted(){
  // Identifica o diretorio do site após o dominio
    this.url = window.location.href;
    this.url = this.url.split("/");
    this.url = this.url[3]
    if(this.url.includes("new-hair-caps-feminino-tratamento-30-dias")){
      this.singleCapsFem = true;
    }
  },
};
</script>

<style scoped>
.full {
    background-color: #FF4289;
}

.texto-dividido {
    display: flex;
    align-items: center;
    padding: 20px 0;
}

.texto-dividido h2 {
    font: normal normal bold 32px/40px Open Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
    font-weight: bold!important;
}

.texto-dividido p {
    font: normal normal normal 18px/24px Open Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
    padding-right: 120px;
}

.img-todos-dias{
  margin-left: -1px;
 bottom: -1px;
 height: 235px;
 width: 360px;
}

.imagem {
  background-color: #FFFFFF;
  border-radius: 5px;
  height: 190px;
 

}

@media (max-width: 600px) {

  h2{
    font: normal normal bold 24px/26px Open sans !important;
    text-align: center;
    margin-bottom: -10px !important;
  }

  .texto-dividido p {
    font: normal normal normal 16px/22px Open Sans;
    color: #FFFFFF;
}
  .texto-dividido {
    padding-right: 15px !important;
    padding-left: 15px !important;
  }

  .texto-dividido p {
    padding-right: 0 !important;
  }


  .img-todos-dias{
  right: -2%;
  height: 220px;
  width: 300px;
  }

  .imagem {
    background-color: #FFFFFF;
    border-radius: 5px;
    height: 200px;
    width: 78%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>