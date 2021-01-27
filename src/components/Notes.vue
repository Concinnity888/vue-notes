<template>
  <div class="notes">
    <div class="note" :class="{ full: !grid }" v-for="(note, idx) in getNotes" :key="idx">
      <div class="note__header note-header" :class="{ full: !grid }">
        <p>{{ note.title }}</p>
        <button @click="removeNote(idx)" type="button">X</button>
      </div>
      <div class="note__body">
        <p>{{ note.desc }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    grid: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getNotes'])
  },
  methods: {
    ...mapActions(['removeNote'])
  }
}
</script>

<style lang="scss">
.notes {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}

.note {
  width: 48%;
  margin-bottom: 20px;
  padding: 18px 20px;

  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba( 0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 30px 30px rgba( 0, 0, 0, 0.4);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }

  &.full {
    width: 100%;
    text-align: center;
  }
}

.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 22px;

    color: #402caf;
  }

  svg {
    margin-right: 12px;
    color: #999999;
    cursor: pointer;
    transition: 0.25s all easy;

    &.active {
      color: #402caf;
    }

    &:hover {
      opacity: 0.75;
      transition: 0.25s all easy;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &.full {
    justify-content: center;

    p {
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.25s all easy;

    &:hover {
      opacity: 0.75;
      transition: 0.25s all easy;
    }
  }
}

.note__body {
  p {
    margin: 20px 0;
  }

  span {
    font-size: 14px;

    color: #999999;
  }
}
</style>
