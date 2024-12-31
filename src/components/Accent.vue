<template>
    <span class="accent">
        <slot></slot>
    </span>
</template>
  
<script>
export default {
    name: "Accent",
};
</script>
  
<style lang="less" scoped>
@import '../css/variables.less';

.accent {
    color: @accentColor; // Use the color from project.less
    font-weight: bold; // Optional: mimic <strong>
}
</style>
  