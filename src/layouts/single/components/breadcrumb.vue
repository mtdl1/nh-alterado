<template>
  <div>
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">início</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/produtos">produtos</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <a href="#">{{ nome }}</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    nome: {
      type: String,
      default: 'New Hair',
    },
  },
}
</script>

<style scoped>
nav{
  width: fit-content;
}
.breadcrumb{
  background-color: #fafafb;
}
.breadcrumb-item a{
  font-family: "Open Sans";
  text-transform: lowercase;
  letter-spacing: -0.72px;
  color: #6c757d 
}
.breadcrumb-item.active a{
  color: #FF4289;
}
.breadcrumb-item a:hover{
  color: #FF4289;
}
</style>