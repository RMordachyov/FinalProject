<template>
    <div class="modall-message">
        <p class="modall-message__text">{{ message }}</p>
    </div>
</template>

<script>
export default{
    props:[
        'message'
    ],
}
</script>

<style>
.modall-message{
    position: fixed;
    z-index: 100000;
    top: 10%;
    right: 20px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    /* box-shadow: 0 0px 1px #00000071; */
    background-color: white;
    border: 1px solid lightgrey;
}

.modall-message__text{
    font-size: 17px;
    margin: 0;
}
</style>