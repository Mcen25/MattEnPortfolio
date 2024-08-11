<template>
  <h1>You can contact me via my email: men@umass.edu or matthew.en.c@gmail.com</h1>

  <BContainer>
    <BRow align-v="center">
      <BCol>
        <BCard
          title="Linkedin link"
          :img-src="linkedinLogo"
          img-alt="Image"
          img-top
          tag="Linkedin"
          style="max-width: 20rem"
        >
          <BButton href="https://www.linkedin.com/in/matthewen25/" target="_blank" variant="primary"
            >To Linkedin</BButton
          >
        </BCard>
      </BCol>
      <BCol>
        <BCard
          title="Github link"
          :img-src="githubLogo"
          img-alt="Image"
          img-top
          tag="Github"
          style="max-width: 20rem"
        >
          <BCardText> </BCardText>

          <BButton href="https://github.com/Mcen25" target="_blank" variant="primary"
            >To Github</BButton
          >
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
  <h1>Or you can reach me through this contact form:</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BContainer, BRow, BCol, BCard, BCardText, BButton } from 'bootstrap-vue-next'

import linkedinLogo from '../assets/LinkedIn_icon.svg.png'
import githubLogo from '../assets/GitHub_Invertocat_Logo.svg.png'

export default defineComponent({
  name: 'ContactView',
  components: {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardText,
    BButton
  },
  data() {
    return {
      linkedinLogo,
      githubLogo
    }
  }
})
</script>

<style scoped></style>
