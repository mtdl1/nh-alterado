<template>
  <div
    :class="[
      'banner-lateral position-relative',
      {
        bgVitamin: bg == 'bgVitamin',
        bgBiotina: bg == 'biotina',
        bgGummy: bg == 'gummy',
        bgVitaminMasc: bg == 'vitaminmasc',
        bgLinhaEssential: bg == 'bgLinhaEssential',
        bgGummyMasc: bg == 'bgGummyMasc',
        bgSerum: bg == 'bgSerum',
        alteraespacos: alteraespacos,
      },
    ]"
  >
    <h3>{{ this.titulo }}</h3>
    <h4>{{ this.subtitulo }}</h4>
    <p class="destaque">{{ this.destaque }}</p>
    <p class="texto">{{ this.texto }}</p>
    <img
      v-lazy="imgBanner"
      v-if="$route.name == 'homeTesteB'"
      class="position-absolute desk"
      :alt="alt"
      :title="title"

    />
    <img
      :src="require(`@/assets/img/banners/banner-lateral/${img}`)"
      v-else
      class="position-absolute desk"
      loading="lazy"
      :alt="alt"
      :title="title"
    />
    <img
      v-lazy="imgBannerMob"
      v-if="$route.name == 'homeTesteB'"
      class="position-absolute mob"
      loading="lazy"
      :alt="alt"
      :title="title"
    />
    <img
      :src="require(`@/assets/img/banners/banner-lateral/mob/${img}`)"
      v-else
      class="position-absolute mob"
      loading="lazy"
      :alt="alt"
      :title="title"
    />

  </div>
</template>

<script>
import loadingBannerDesk from "../../../assets/img/geral/preloader.svg"

export default {
  components: {},
  name: "BannerLateral",
  props: {
    bg: String,
    titulo: String,
    subtitulo: String,
    destaque: String,
    texto: String,
    img: String,
    alteraespacos: Boolean,
    alt:String,
    title:String,
  },
  data() {
    return {
      imgBanner: {
				src: require(`@/assets/img/banners/banner-lateral/${this.img}`),
				error: loadingBannerDesk,
				loading: loadingBannerDesk,
			},
      imgBannerMob: {
				src: require(`@/assets/img/banners/banner-lateral/mob/${this.img}`),
				error: loadingBannerDesk,
				loading: loadingBannerDesk,
			},
    };
  },
};
</script>

<style scoped>
.banner-lateral {
  width: 24%;
  background: linear-gradient(180deg, #ffffff 0%, #ea5c9c 100%);
  padding: 20px;
  border-radius: 15px;
  /* box-shadow: 0px 5px 10px #0000000D; */
  padding-top: 50px;
}

.banner-lateral.bgBiotina {
  background: linear-gradient(155deg, #ea5c9c 0%, #f9cee1 100%);
}

.banner-lateral.bgSerum {
  background: linear-gradient(180deg, #fdeef5 0%, #ed73a9 100%);
}

.banner-lateral.bgLinhaEssential {
  background: linear-gradient(180deg, #764f9e 0%, #4a3164 100%);
}

.banner-lateral.bgGummy {
  background: linear-gradient(180deg, #f05226 0%, #6acc0a 100%);
}

.banner-lateral.bgVitaminMasc {
  background: linear-gradient(155deg, #13509f 0%, #13509f 35%, #f3f6fa 100%);
}

.banner-lateral.bgGummyMasc {
  background: linear-gradient(155deg, #18abf8 0%, #0c5379 100%);
}

h3 {
  text-align: center;
  font: normal normal 800 44px/48px Open Sans;
  letter-spacing: -1.76px;
  color: #fff;
  text-transform: lowercase;
}

h4 {
  text-align: center;
  font: normal normal normal 18px/22px Open Sans;
  letter-spacing: -0.88px;
  color: #fff;
}

.destaque {
  background-color: #ea5c9c;
  padding: 4px 16px;
  border-radius: 15px;
  font: normal normal bold 16px/20px Open Sans;
  letter-spacing: -0.64px;
  color: #ffffff;
  text-align: center;
  width: fit-content;
  margin: 10px auto;
  text-transform: lowercase;
}

.texto {
  text-align: center;
  font: normal normal normal 16px/20px Open Sans;
  letter-spacing: -0.16px;
  color: #fff;
  text-transform: lowercase;
}

.bgVitamin h3,
.bgVitamin h4,
.bgVitamin .texto,
.bgSerum h3,
.bgSerum .texto {
  color: #333;
}

.bgBiotina .destaque {
  background-color: white;
  color: #ea5c9c;
}

.bgSerum .destaque,
.bgLinhaEssential .destaque {
  display: none;
}

.bgGummy .destaque {
  background-color: #fff;
  color: #f05226;
}

.bgVitaminMasc .destaque {
  background-color: #fff;
  color: #13509f;
}

.bgGummyMasc .destaque {
  background-color: #fff;
  color: #6acc0a;
}

img {
  max-width: 90%;
  bottom: 10px;
}

.alteraespacos {
  padding-top: 90px;
}

.alteraespacos img {
  bottom: 60px;
}

/* resposivo */
@media (max-width: 1200px) {
  .banner-lateral {
    width: 50%;
    position: unset !important;
    text-align: center;
    padding: 0 !important;
    padding: 18% 10px 0 !important;
    margin-top: 20px;
  }
  img {
    max-width: 95% !important;
    margin: 0 auto !important;
    position: unset !important;
    margin-top: 40px !important;
  }

  h3 {
    font: normal normal 800 28px/27px Open Sans;
    letter-spacing: -1.12px;
  }

  h4 {
    font: normal normal normal 14px/13px Open Sans;
    letter-spacing: -0.56px;
  }

  .destaque {
    font: normal normal bold 10px/8px Open Sans;
    letter-spacing: -0.4px;
    padding: 5px 10px;
  }

  .texto {
    font: normal normal normal 10px/14px Open Sans;
    letter-spacing: -0.1px;
  }
}
</style>