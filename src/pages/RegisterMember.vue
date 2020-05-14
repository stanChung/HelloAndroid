<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width:300px">
        <q-input outlined v-model="MemAccount" label="帳號" />
        <q-input outlined v-model="MemName" label="姓名" />
        <div>
          <q-btn label="保存" color="primary" @click="savef=true" />
        </div>
      </div>
    </div>
    <q-dialog v-model="savef" transition-show="rotate" transition-hide="rotate">
      <q-card style="width:300px">
        <q-card-section>
          <div class="text-h6">帳號：{{MemAccount}}</div>
        </q-card-section>

        <q-card-section>
          <div class="text-h6">姓名：{{MemName}}</div>
        </q-card-section>
        <q-separator />
        <q-card-section align="right" class="bg-white text-teal">
          <q-btn flat label="關閉" v-close-popup /> 
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      MemAccount: "",
      MemName: "",
      savef: false
    };
  },
  methods: {
    saveForm() {}
  }
};
</script>
