<template>
    <main class="container">
        <div class="row">
            <div class="col-md-12 banner_col">
                <div class="banner_container">
                    <h1>Большой заголовок</h1>
                    <p>небольшой слоган</p>
                    <div class="banner_buttons_container">
                        <a href="#" class="banner_button button_to">К товарам</a>
                        <a href="#" class="banner_button button_about">О проекте</a>
                    </div>
                </div>
                
            </div>
        </div>
        
    </main>
</template>

<style scoped>
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
}

.banner_container{
    position: absolute;
    padding: 40px;
    min-width: 300px;
    max-width: 80%;
    border-radius: 10px;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}
.banner_col{
    height: 440px;
    position: relative;
}

.banner_buttons_container{
    padding: 15px 0;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    gap: 30px;
}
.banner_button{
    padding: 8px 30px;
    border-radius: 6px;
    /* margin-left: 30px; */
    background-color: rgba(33, 167, 0, 0.74);
    text-decoration: none;
    color: white;
    font-weight: 700;
    box-shadow: 0 0px 3px #00000071;
    text-align: center;
}

@media (max-width:992px) {
    .banner_col_1_container{
        padding: 5px;
    }
}
@media (max-width:320px) {
    .banner_button{
    padding: 4px 20px;
}
}

</style>