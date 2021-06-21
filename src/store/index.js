import { createApp } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state: {
    tontacts: [],
    contacts: [
      {
        id: 1,
        title: "Sam",
      },
      {
        id: 2,
        title: "Mike",
      },
      {
        id: 3,
        title: "May",
      },
    ],
  },
  getters: {
    allTContacts: (state) => state.tcontacts,
    allContacts: (state) => state.contacts,
  },
  actions: {
    
    addContact({ commit }, contact) {
      commit("add_contact", contact);
    },
    deleteContact({ commit }, id) {
      commit("delete_contact", id);
    },
    updateContact({ commit }, contact) {
      commit("update_contact", contact);
    },
  },
  mutations: {
    add_contact(state, contact) {
      state.contacts.push(contact);
      state.tcontacts = state.contacts;
    },
    delete_contact(state, id) {
      state.contacts = state.contacts.filter((contact) => contact.id != id);
      state.tcontacts = state.contacts;
    },
    update_contact(state, contact) {
      let index = state.contacts.findIndex((t) => t.id == contact.id);
      if (index != -1) {
        state.contacts[index] = contact;
      }
    },
  },
});

const app = createApp({});
app.use(store);
export default store;