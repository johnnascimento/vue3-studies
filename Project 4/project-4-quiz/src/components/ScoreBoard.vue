<template>
    <div>
        <section class="score">
            Player 
            <span>{{this.winCount}}</span>
            x
            <span>{{this.loseCount}}</span>
            Computer
        </section>
    </div>
</template>

<script>
    export default {
        props: {
            winCount: Number,
            loseCount: Number
        }
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