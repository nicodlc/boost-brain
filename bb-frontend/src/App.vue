<script setup lang="ts">

import { ref } from 'vue';
const PLATFORMS = [
  {text: '(PC) STEAM', value: 'steam'},
  {text: '(PC) EPIC', value: 'epic'},
  {text: 'PLAYSTATION', value: 'ps4'},
]

const PLAYLISTS = [
  {text: 'Ranked 1s', value: 'ranked-solo-standard'},
  {text: 'Ranked 2s', value: 'ranked-duos'},
  {text: 'Ranked 3s', value: 'ranked-standard'},
]

const selectedPlatform = ref('')
const selectedPlaylist = ref('')

</script>

<template>
  <div class="topbar">

    <div class="tb-inputs">
      <div class="tb-logo">BoostBrain.GG</div>
      <!--- topbar--->
      <div class="tb-field">
        <div class="description-field">
          <span class="desc">Get insights on your ranked games</span>
        </div>
      </div>

      <div class="tb-field">
        <label>USERNAME</label>
        <input id="input-username" type="text" placeholder="Platform ID">
      </div>

      <div class="tb-field">
        <label>PLATFORM</label>
        <select id="input-platform" v-model="selectedPlatform">
          <option disabled value="">Choose One!</option>
          <option v-for="P in PLATFORMS" :value="P.value" :key="P.text">
            {{ P.text }}
          </option>
        </select>
      </div>

      <div class="tb-field">
        <label>PLAYLIST</label>
        <select id="input-playlist" v-model="selectedPlaylist">
          <option disabled value="">Choose One!</option>
          <option v-for="p in PLAYLISTS" :value="p.value" :key="p.text">
            {{p.text}}
          </option>
        </select>
      </div>

      <div class="tb-field">
        <label>MATCHES</label>
        <input type="number" min="5" max="10" placeholder="5-10"/>
      </div>

      <button class="tb-btn">➤ GO!</button>

    </div>
  </div>
</template>

<style scoped>

</style>
