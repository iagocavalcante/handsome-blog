<template>
  <div>
    <div class="cent-mid-content animation"></div>
    <h3 align="center">Carregando {{mensagem}}...</h3>
  </div>
</template>

<script>
export default {
  props: {
    mensagem: {
      type: String,
      default: 'Postages'
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.animation {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid #5abb63;
  border-top-color: #fff;
  border-bottom-color: #fff;
  animation: rotation 1.8s linear infinite;
}

@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>
