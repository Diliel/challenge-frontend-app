<template>
  <div>
    <b-card
      overlay
      img-src="https://www.rd.com/wp-content/uploads/2017/10/Why-Are-Commercial-Airplanes-White-_493536652-Jag_cz.jpg"
      img-alt="Card Image"
    >
      <div class="row h-100">
        <div class="col-md-12 my-auto">
          <div class="card d-flex">
            <div class="card-body align-items-center">
              <b-row>
                <b-col lg="12" md="12">
                  <b-tabs pills card>
                    <b-tab active>
                      <template #title>
                        <span>Ida y vuelta</span>
                        &nbsp;
                        <b-icon
                          icon="arrow-left-right"
                          aria-hidden="true"
                        ></b-icon>
                      </template>
                      <b-row align-v="end">
                        <b-col>
                          <b-form-group
                            label="Ciudad de origen"
                            label-for="basicInput"
                          >
                            <b-form-input
                              id="input-live"
                              placeholder="Origen"
                              trim
                            ></b-form-input
                          ></b-form-group>
                        </b-col>

                        <b-col>
                          <b-form-group
                            label="Ciudad de destino"
                            label-for="basicInput"
                          >
                            <b-form-input
                              id="input-live"
                              placeholder="Destino"
                              trim
                            ></b-form-input></b-form-group
                        ></b-col>

                        <b-col>
                          <b-form-group
                            label="Fecha de salida"
                            label-for="basicInput"
                          >
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
                          <b-form-group
                            label="Fecha de retorno"
                            label-for="basicInput"
                          >
                            <b-form-datepicker
                              id="datepicker-dateformat2"
                              :date-format-options="{
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                              }"
                              locale="es" /></b-form-group
                        ></b-col>
                        <b-col
                          lg="2"
                          md="2"
                          class="d-flex justify-content-center"
                        >
                          <b-button class="mt-0 mt-md-2" variant="info">
                            <b-icon icon="search" aria-hidden="true"></b-icon>
                          </b-button> </b-col></b-row
                    ></b-tab>
                    <b-tab>
                      <template #title>
                        <span>Solo ida</span>
                        &nbsp;
                        <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
                      </template>
                      <b-row align-v="end">
                        <b-col>
                          <b-form-group
                            label="Ciudad de origen"
                            label-for="basicInput"
                          >
                            <b-form-input
                              id="input-live"
                              placeholder="Origen"
                              trim
                            ></b-form-input
                          ></b-form-group>
                        </b-col>

                        <b-col>
                          <b-form-group
                            label="Ciudad de destino"
                            label-for="basicInput"
                          >
                            <b-form-input
                              id="input-live"
                              placeholder="Destino"
                              trim
                            ></b-form-input></b-form-group
                        ></b-col>

                        <b-col>
                          <b-form-group
                            label="Fecha de salida"
                            label-for="basicInput"
                          >
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
                          <b-form-group
                            label="Fecha de retorno"
                            label-for="basicInput"
                          >
                            <b-form-datepicker
                              id="datepicker-dateformat2"
                              :date-format-options="{
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                              }"
                              locale="es" /></b-form-group
                        ></b-col>
                        <b-col
                          lg="2"
                          md="2"
                          class="d-flex justify-content-center"
                        >
                          <b-button class="mt-0 mt-md-2" variant="info">
                            <b-icon icon="search" aria-hidden="true"></b-icon>
                          </b-button> </b-col></b-row
                    ></b-tab>
                    <b-tab>
                      <template #title>
                        <span>Múltiples destinos</span>
                        &nbsp;
                        <b-icon icon="arrows-move" aria-hidden="true"></b-icon>
                      </template>

                      <b-row>
                        <b-col cols="10" class="mb-3">
                          <b-button variant="success" @click="repeateAgain">
                            <span>Agregar</span>
                          </b-button>
                        </b-col>
                        <b-col
                          lg="2"
                          md="2"
                          class="d-flex justify-content-center"
                        >
                          <b-button class="mt-0 mt-md-2" variant="info">
                            <b-icon icon="search" aria-hidden="true"></b-icon>
                          </b-button>
                        </b-col>
                      </b-row>

                      <b-row
                        align-v="end"
                        v-for="(item, index) in items"
                        :id="item.id"
                        :key="item.id"
                      >
                        <b-col>
                          <b-form-group
                            label="Ciudad de origen"
                            label-for="basicInput"
                          >
                            <b-form-input
                              id="input-live"
                              placeholder="Origen"
                              trim
                            ></b-form-input
                          ></b-form-group>
                        </b-col>

                        <b-col>
                          <b-form-group
                            label="Ciudad de destino"
                            label-for="basicInput"
                          >
                            <b-form-input
                              id="input-live"
                              placeholder="Destino"
                              trim
                            ></b-form-input></b-form-group
                        ></b-col>

                        <b-col>
                          <b-form-group
                            label="Fecha de salida"
                            label-for="basicInput"
                          >
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
                          <b-form-group
                            label="Fecha de retorno"
                            label-for="basicInput"
                          >
                            <b-form-datepicker
                              id="datepicker-dateformat2"
                              :date-format-options="{
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                              }"
                              locale="es" /></b-form-group
                        ></b-col>

                        <b-col
                          class="d-flex justify-content-center"
                          lg="2"
                          md="2"
                          v-if="index || (!index && items.length > 1)"
                        >
                          <b-button
                            class="mt-0 mt-md-2"
                            variant="danger"
                            @click="removeItem(index)"
                          >
                            <b-icon
                              icon="trash-fill"
                              aria-hidden="true"
                            ></b-icon>
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-tab>
                  </b-tabs>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </div>
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
  props: {
    msg: String,
  },
  data() {
    return {
      items: [
        {
          hometown: "",
          destination: "",
          exit_at: "",
          passengers: "",
        },
      ],
    };
  },
  methods: {
    repeateAgain() {
      this.items.push({
        hometown: "",
        destination: "",
        exit_at: "",
        passengers: "",
      });
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>