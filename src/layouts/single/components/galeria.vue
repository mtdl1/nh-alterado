<template>
  <div class="col-md-7">
    <lingallery v-if="items.length > 0" :iid.sync="currentId" :items="items" leftControlClass="prev" rightControlClass="next"/>
    <p v-else>Nenhuma imagem disponível.</p>
  </div>
</template>

<script>
import Lingallery from "lingallery";
export default {
  name: "Galeria",
  data() {
    return {
      currentId: null,
      items: [],
    };
  },
  props: {
    galeriaImagens: {
      type: Array,
      default: null,
    },
  },
  components: {
    Lingallery,
  },

  watch: {
    galeriaImagens: {
      handler: function (val) {
        this.items = val.map((imagem, index) => ({
          src: imagem.arquivos.big, // Use a propriedade big da imagem
          thumbnail: imagem.arquivos.big, // Você pode ajustar a miniatura se necessário
          caption: ``, // Adicione legendas personalizadas, se desejar
          id: `someid${index}`,
        }));
      },
      deep: true,
    },
  },
};
</script>

<style>
.lingallery_thumbnails_content_elem img {
    border-radius: 10px;
}
.lingalleryContainer .lingallery figure a.control{
  display: block!important;
}
.lingalleryContainer .lingallery figure a.control span {
  text-shadow: 2px 2px 8px rgba(255, 66, 137, 1);
}
/* adicionar hover com mais sombra */
.lingalleryContainer .lingallery figure a.control:hover span {
  text-shadow: 4px 2px 6px rgba(255, 66, 137, 1),9px 2px 10px rgba(255, 66, 137, 1);
}
.lingalleryContainer .lingallery figure a.control.prev {
  background-image: url(../../../assets/img/icones/prev2.png);
  background-position: center;
  background-repeat: no-repeat;
}
.lingalleryContainer .lingallery figure a.control.next {
  background-image: url(../../../assets/img/icones/next2.png);
  background-position: center;
  background-repeat: no-repeat;
}
</style>
