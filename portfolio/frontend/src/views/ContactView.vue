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

  <BForm @submit="onSubmit" @reset="onReset" v-if="show">
    <BFormGroup
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <BFormInput
        id="input-1"
        v-model="form.email"
        type="email"
        placeholder="Enter email"
        required
      />
    </BFormGroup>

    <BFormGroup id="input-group-2" label="Your Name:" label-for="input-2">
      <BFormInput id="input-2" v-model="form.name" placeholder="Enter name" required />
    </BFormGroup>
    <BFormGroup id="input-group-3" label="Food:" label-for="input-3">
      <BFormSelect id="input-3" v-model="form.food" :options="foods" required />
    </BFormGroup>

    <BFormGroup id="input-group-4">
      <BFormCheckboxGroup v-model="form.checked" id="checkboxes-4">
        <BFormCheckbox value="me">Check me out</BFormCheckbox>
        <BFormCheckbox value="that">Check that out</BFormCheckbox>
      </BFormCheckboxGroup>
    </BFormGroup>
    <BButton type="submit" variant="primary">Submit</BButton>
    <BButton type="reset" variant="danger">Reset</BButton>
  </BForm>

  <BCard class="mt-3" header="Form Data Result">
    <pre class="m-0">{{ form }}</pre>
  </BCard>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormCheckboxGroup,
  BFormCheckbox,
  BCardText
} from 'bootstrap-vue-next'

import linkedinLogo from '../assets/LinkedIn_icon.svg.png'
import githubLogo from '../assets/GitHub_Invertocat_Logo.svg.png'
import { reactive } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'ContactView',
  components: {
    BContainer,
    BRow,
    BCol,
    BCard,
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BFormCheckboxGroup,
    BFormCheckbox,
    BCardText
  },
  data() {
    return {
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      linkedinLogo,
      githubLogo,
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      show: true
    }
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event: Event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      nextTick(() => {
        this.show = true
      })
    }
  }
})
</script>

<style scoped></style>
