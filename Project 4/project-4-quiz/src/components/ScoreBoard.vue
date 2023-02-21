<template>
    <div>
        <section class="score">
            Player 
            <span>0</span>
            x
            <span>0</span>
            Computer
        </section>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    section.score {
        border-bottom: 1px solid black;
        padding: 24px;
        font-size: 18px;
    }

    section.score span {
        padding: 8px;
        font-weight: bold;
        border: 1px solid black;
    }
</style>