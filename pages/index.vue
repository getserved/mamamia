<!-- eslint-disable require-await -->
<!-- eslint-disable require-await -->
<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="px-2 py-4 d-flex justify-center">
        <v-form ref="form" @submit.prevent="submit">
          <v-row fluid justify="center" align="center">
            <v-col cols="12" sm="12" md="8">
              <v-text-field
                v-model="innerValue"
                label="Input Something"
                placeholder="Input Something"
                :rules="rules"
              />
            </v-col>
            <v-col cols="12" sm="12" md="4">
              <v-btn
                elevation="2"
                type="submit"
                :loading="loading"
                :disabled="loading || !formValid"
              >
                Click Me
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
      <v-card class="px-2 py-4 d-flex justify-center">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="12" md="12">
            Your last input: {{ items[0]?.text }}
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { where, collection, query, onSnapshot } from 'firebase/firestore'
import { db, projectId, region } from '../plugins/firebase.js'

export default {
  name: 'IndexPage',
  data () {
    return {
      innerValue: '',
      items: [],
      uuid: null,
      loader: null,
      loading: false,
      unsubscribe: null,
      rules: [val => (val || '').length > 0 || 'This field is required']
    }
  },
  computed: {
    formValid () {
      return this.innerValue
    }
  },
  methods: {
    submit () {
      this.uuid = this.generateIdentifer()
      this.getDocs()
      this.$axios({
        method: 'post',
        url: `/${projectId}/${region}/addDoc`,
        data: {
          text: this.innerValue,
          uuid: this.uuid
        }
      })
      this.loader = null
      this.innerValue = null
      this.$refs.form.reset()
    },
    // eslint-disable-next-line require-await
    async getDocs () {
      const q = query(collection(db, 'mamamia'), where('uuid', '==', this.uuid))
      onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            this.items.push(change.doc.data())
          }
        })
        // unsub()
      })
    },

    generateIdentifer () {
      return uuidv4()
    }
  }
}
</script>
