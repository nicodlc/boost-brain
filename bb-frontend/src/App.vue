<script setup lang="ts">

import { ref, reactive, computed } from 'vue';
const PLATFORMS = [
  {text: '(PC) STEAM', value: 'steam'},
  {text: '(PC) EPIC', value: 'epic'},
  {text: 'PLAYSTATION', value: 'ps4'},
]

const card = reactive({
  playerName: '',
  platform: '',
  analyzed: '-',
  wins: 0,
  losses: 0,
  winrate: 0.0,
  avgGoals: 0.0,
  avgSaves: 0.0,
  avgShots: 0.0,
  shotPct: 0.0
})

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

  <div id="grid">
    <div class="box box-hi" id="player-card">
      <div class="box-title">Player Card</div>
      <div class="pc-name" id="pc-name"> {{ card.playerName || '-' }}</div>
      <div class="pc-platform" id="pc-platform">
        {{ card.platform || 'Enter a username to begin' }}
      </div>
      <div class="pc-rank-badge">
        <span class="rank-label">-</span>
        <span class="rank-sub">Awaiting Data</span>
      </div>

      <hr class="pc-divider"/>

      <div class="wl-bar-wrap">
        <div class="wl-bar-label">
          <span id="wl-w-label">W — </span>
          <span id="wl-l-label">L —</span>
        </div>
        <div class="wl-bar">
          <div class="w" id="wl-bar-w" style="width:0%"></div>
          <div class="l" id="wl-bar-l" style="width:0%"></div>
        </div>
      </div>

      <div class="pc-stat">
        <span class="k">Win %</span>
        <span class="v" id="pc-winrate"> {{ card.winrate }} </span>
      </div>

      <div class="pc-stat">
        <span class="k">Avg Goals</span>
        <span class="v" id="pc-goals"> {{ card.avgGoals }}</span>
      </div>

      <div class="pc-stat">
        <span class="k">Avg Saves</span>
        <span class="v" id="pc-saves"> {{ card.avgSaves }}</span>
      </div>

      <div class="pc-stat">
        <span class="k">Avg Shots</span>
        <span class="v" id="pc-shots"> {{ card.avgShots }} </span>
      </div>

      <div class="pc-stat">
        <span class="k">Shot %</span>
        <span class="v" id="pc-shotpct"> {{ card.shotPct }}</span>
      </div>

    </div>

    <!--TODO: Fit in metrics / graph of recent matches. Sort by win/loss or score? -->
    <div class="box" id="match-metrics">
      <div class="box-title">Metrics</div>
    </div>

    <!---TODO: Finish AI panel implementation-->
    <div class="box" id="ai-panel">
      <div class="box-title">BRAIN.GG</div>
      <div class="ai-header">
        <span class="ai-badge">KIMI K2</span>
        <span class="ai-description">YOUR (OPEN SOURCE) RL COACH</span>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
