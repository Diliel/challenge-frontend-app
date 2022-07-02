<template>
  <div class="col-md-9 my-auto">
    <div class="card d-flex">
      <div class="card-header">
        <b-icon icon="calendar2-date" aria-hidden="true"></b-icon> &nbsp; Vuelos
        en fechas cercanas desde US$ 546
      </div>
      <div
        class="card-body align-items-center"
        v-for="item in listAirlineData"
        :key="item.id"
      >
        <b-card-group deck>
          <b-row class="d-flex align-items-center">
            <b-col cols="8">
              <b-card>
                <template #header>
                  <strong
                    ><em>{{ item.nameAirline }}</em></strong
                  >
                </template>
                <b-row align-v="center">
                  <b-col cols="6">
                    <b-img
                      v-bind="mainProps"
                      fluid
                      :src="item.imageAirline"
                    ></b-img>
                  </b-col>
                  <b-col cols="6">
                    <b-row class="d-flex align-items-center">
                      <b-col cols="6">
                        <span
                          :id="item.targetTooltip"
                          class="d-inline-block"
                          tabindex="0"
                        >
                          <b-button variant="info" disabled>
                            <b-icon
                              icon="briefcase-fill"
                              aria-hidden="true"
                            ></b-icon>

                            &nbsp; Detalles
                          </b-button>
                        </span>
                        <b-tooltip :target="item.targetTooltip">
                          <b-row>
                            <b-col cols="12">
                              {{ item.hometown }}
                              <b-icon
                                icon="arrow-right"
                                aria-hidden="true"
                              ></b-icon>
                              {{ item.destination }}
                            </b-col>
                          </b-row>
                        </b-tooltip>
                      </b-col>
                      <b-col cols="6">
                        <b-button variant="warning" disabled>
                          <b-icon icon="diagram2" aria-hidden="true"></b-icon>
                          &nbsp; {{ item.scale }}
                        </b-button>
                      </b-col>
                    </b-row>

                    <br />
                    <b-row v-for="itemTime in item.timeFly" :key="itemTime.id">
                      <b-col cols="6">
                        <b-form-checkbox>
                          &nbsp; {{ itemTime.exitAt }}
                          <b-icon
                            icon="arrow-right"
                            aria-hidden="true"
                          ></b-icon>
                          {{ itemTime.returnAt }}
                        </b-form-checkbox>
                      </b-col>

                      <b-col cols="6">
                        &nbsp;
                        <b-icon
                          icon="clock-history"
                          aria-hidden="true"
                        ></b-icon>
                        {{ itemTime.time }}
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
                <template #footer>
                  <em>Mejora tu vuelo con EQUIPAJE Y FLEXIBILIDAD </em>
                </template>
              </b-card>
            </b-col>
            <b-col cols="4">
              <b-card>
                <b-card-body class="text-center">
                  <b-card-title
                    >US$ <strong>{{ item.price }}</strong></b-card-title
                  >

                  <b-card-text> {{ item.titlePrice }} </b-card-text>

                  <b-button variant="danger"> Elegir</b-button>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BTooltip,
  BCollapse,
  BCardGroup,
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
  BLink,
  BImg,
  BAlert,
} from "bootstrap-vue";
import vSelect from "vue-select";
import store from "/src/store";
import TicketStoreModule from "/src/components/tickets/ticket-index/TicketStoreModule";
export default {
  components: {
    BAlert,
    BImg,
    BLink,
    BCollapse,
    BCardGroup,
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
    BTooltip,
  },
  data() {
    return { listAirlineData: [], mainProps: { width: 200, height: 100 } };
  },
  created() {
    this.getAirlineData();
  },
  methods: {
    getAirlineData() {
      const MODULE_NAME = "app-airline";
      if (!store.hasModule(MODULE_NAME))
        store.registerModule(MODULE_NAME, TicketStoreModule);

      store
        .dispatch("app-airline/fetchAirlines")
        .then((response) => {
          this.listAirlineData = response.data;
        })
        .catch((error) => {});
    },
  },
};
</script>
