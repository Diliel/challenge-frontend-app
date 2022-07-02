<template>
  <b-row align-v="end">
    <b-col>
      <b-form-group label="Ciudad de origen" label-for="basicInput">
        <b-form-input id="input-live" placeholder="Origen" trim></b-form-input
      ></b-form-group>
    </b-col>

    <b-col>
      <b-form-group label="Ciudad de destino" label-for="basicInput">
        <b-form-input
          id="input-live"
          placeholder="Destino"
          trim
        ></b-form-input></b-form-group
    ></b-col>

    <b-col>
      <b-form-group label="Fecha de salida" label-for="basicInput">
        <b-form-datepicker
          id="datepicker-dateformat2"
          :date-format-options="{
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }"
          locale="es" /></b-form-group
    ></b-col>
    <b-col>
      <b-form-group label="Fecha de retorno" label-for="basicInput">
        <b-form-datepicker
          id="datepicker-dateformat2"
          :date-format-options="{
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }"
          locale="es" /></b-form-group
    ></b-col>
    <b-col lg="2" md="2" class="d-flex justify-content-center">
      <b-button class="mt-0 mt-md-2" variant="info">
        <b-icon icon="search" aria-hidden="true"></b-icon>
      </b-button> </b-col
  ></b-row>
</template>

<script>
import {
  BFormSpinbutton,
  BInputGroup,
  BInputGroupAppend,
  BFormDatepicker,
  BDropdown,
  BDropdownItem,
  BTab,
  BTabs,
  BCardTitle,
  BIcon,
  BSpinner,
  BForm,
  BFormSelect,
  BFormSelectOption,
  BFormCheckbox,
  BContainer,
  BNavbarNav,
  BNavbarBrand,
  BRow,
  BCol,
  BFormGroup,
  BFormTextarea,
  BFormInput,
  BCardText,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import vSelect from "vue-select";
export default {
  components: {
    BFormSpinbutton,
    BInputGroup,
    BInputGroupAppend,
    BFormDatepicker,
    BDropdown,
    BDropdownItem,
    BTab,
    BTabs,
    BCardText,
    BCardTitle,
    BIcon,
    BSpinner,
    BForm,
    vSelect,
    BFormSelect,
    BFormSelectOption,
    BFormCheckbox,
    BContainer,
    BNavbarNav,
    BNavbarBrand,
    BRow,
    BCol,
    BFormGroup,
    BFormTextarea,
    BFormInput,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
