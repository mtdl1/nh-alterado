<template>
<div id="accordion" class="container pt-2">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Tabela Nutricional </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body px-0">
         <img src="@/assets/img/tabelas-nutricionais/tabela-nutricional-uva-verde-masculina.png" alt="" />
      </div>
    </div>
  </div>
 
</div>
</template>

<script>
export default {
  name: "TabelaNutricionalGomaMasc",
};
</script>


<style scoped>

.btn.btn-link {
margin: 0;
padding: 0;
color: black;
font: normal normal bold 24px/22px Open Sans;
letter-spacing: 0px;
color: #333333;
display: block;
width: 25%;
text-align: left;
text-decoration: none;
outline: none;
box-shadow: none;
border: 0;
}

.card-header{
  border: 0;
  background-color: unset;
  padding: 20px 0;
}

button.btn.btn-link::after {
  font-family: fontAwesome;
  content: "\f106";
  font-family: "Font Awesome 5 Free";
    font-weight: 900;
}

button.btn.btn-link.collapsed::after {
  font-family: fontAwesome;
  content: "\f107";
  font-family: "Font Awesome 5 Free";
    font-weight: 900;
}

.card{
  margin: 20px 0 0;
  border: 0;
  border-radius: 20px;
}

@media (max-width: 600px) {
  button.btn.btn-link {
    width: 100%;
    font-size: 16px;
    margin-right: 5px;
  }

  .card {
    margin-top: 0!important;
  }

  .card-header {
      padding-top: 0!important;
  }

}


</style>