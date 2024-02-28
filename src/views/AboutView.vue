<template>
  <main class="about-main">
    <div class="about container">
      <h1>Создан как финальное задание для школы Beeline front-end dev</h1>
      <img src="../img/Heart-red.png" alt="">
    </div>
  </main>
</template>

<style>

.about-main{
  position: relative;
  height: 400px;
}
.about{
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translate(0, -50%);
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;

}
.about img{
  width: 30px;
  height: 30px;
  margin: 0 auto;
}
</style>
