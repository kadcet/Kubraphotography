<script setup>


</script>

<template>

<nav uk-dropnav>
    <ul class="uk-tab">
        <li class="uk-active"><a href="#">Active</a></li>
        <li>
            <a href>Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a href>Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Item</a></li>
    </ul>
</nav>


  
</template>

<style scoped>
</style>
