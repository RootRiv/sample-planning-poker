<template>
<div>
  <ul>
    <li>
      <router-link :to="{ path: '/'}">HOME</router-link>
    </li>
    <li>
      <router-link :to="{ path: '/about'}">About</router-link>
    </li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script></script>