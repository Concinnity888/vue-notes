<template>
  <form
    class="form"
    @submit.prevent="addNoteItem"
  >
    <Message v-if="message" :message="message" />

    <label for="field-title">Title</label>
    <input id="field-title" v-model="note.title" type="text">

    <label for="field-desc">Description</label>
    <textarea id="field-desc" v-model="note.desc"></textarea>

    <button
      class="btn btn--primary"
      type="submit"
    >
      New note
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import Message from '@/components/Message.vue'

export default {
  data: () => ({
    note: {
      title: '',
      desc: ''
    },
    message: null
  }),
  components: {
    Message
  },
  methods: {
    ...mapActions(['addNote']),
    addNoteItem () {
      const { title, desc } = this.note

      if (!title.trim()) {
        this.message = 'title can\'t be blank'
        return false
      }

      const newNote = {
        title,
        desc,
        date: new Date(Date.now()).toLocaleString()
      }

      this.addNote(newNote)
      this.note.title = ''
      this.note.desc = ''
      this.message = null
    }
  }
}
</script>

<style lang="scss">
.form {
  margin-bottom: 56px;
  text-align: center;

  textarea {
    margin-bottom: 30px;
  }
}
</style>
