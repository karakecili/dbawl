import { defineStore } from 'pinia';

export const useContacts = defineStore('contact', {
  state: () => ({
    forms: [],
  }),
  getters: {
    getForms: (state) => state.forms,
  },
  actions: {
    async sendForm(payload) {
      try {
        const response = await $fetch(`${baseURL}/form.json`, {
          headers: {
            Accepts: 'application/json',
          },
          method: 'POST',
          body: payload,
        });

        return response;
      } catch (error) {
        return { isError: true, message: error.toString() };
      }
    },
  },
});

const baseURL =
  'https://bwadll-default-rtdb.europe-west1.firebasedatabase.app/';
