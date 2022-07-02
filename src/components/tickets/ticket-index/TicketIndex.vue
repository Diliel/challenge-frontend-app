<template>
  <div>
    <b-card
      overlay
      img-src="https://www.rd.com/wp-content/uploads/2017/10/Why-Are-Commercial-Airplanes-White-_493536652-Jag_cz.jpg"
      img-alt="Card Image"
    >
      <div class="row h-100">
        <TicketFilter />

        <div class="col-md-9 my-auto">
          <div class="card d-flex">
            <div class="card-header">
              <b-icon icon="calendar2-date" aria-hidden="true"></b-icon> &nbsp;
              Vuelos en fechas cercanas desde US$ 546
            </div>
            <div class="card-body align-items-center">
              <b-card-group deck>
                <b-row class="d-flex align-items-center">
                  <b-col cols="8">
                    <b-card>
                      <template #header>
                        <strong><em>LATAM AIRLINES</em></strong>
                      </template>
                      <b-row align-v="center">
                        <b-col cols="6">
                          <b-img
                            v-bind="mainProps"
                            src="https://www.aeroermo.com/home/wp-content/uploads/2019/02/LATAM-Airlines-horizontal-positivo-CMYK.jpg"
                          ></b-img>
                        </b-col>
                        <b-col cols="6">
                          <b-row class="d-flex align-items-center">
                            <b-col cols="6">
                              <span
                                id="disabled-wrapper"
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
                              <b-tooltip target="disabled-wrapper">
                                <b-row>
                                  <b-col cols="12">
                                    Guayaquil
                                    <b-icon
                                      icon="arrow-right"
                                      aria-hidden="true"
                                    ></b-icon>
                                    Quito
                                  </b-col>
                                </b-row>
                              </b-tooltip>
                            </b-col>
                            <b-col cols="6">
                              <b-button variant="warning" disabled>
                                <b-icon
                                  icon="diagram2"
                                  aria-hidden="true"
                                ></b-icon>
                                &nbsp; 1 escala
                              </b-button>
                            </b-col>
                          </b-row>

                          <br />
                          <b-row>
                            <b-col cols="6">
                              <b-form-checkbox>
                                &nbsp; 23:59
                                <b-icon
                                  icon="arrow-right"
                                  aria-hidden="true"
                                ></b-icon>
                                11:04
                              </b-form-checkbox>
                            </b-col>

                            <b-col cols="6">
                              &nbsp;
                              <b-icon
                                icon="clock-history"
                                aria-hidden="true"
                              ></b-icon>
                              10h 05min
                            </b-col>
                            <b-col cols="6">
                              <b-form-checkbox>
                                &nbsp; 08:00
                                <b-icon
                                  icon="arrow-right"
                                  aria-hidden="true"
                                ></b-icon>
                                13:35
                              </b-form-checkbox>
                            </b-col>
                            <b-col cols="6">
                              &nbsp;
                              <b-icon
                                icon="clock-history"
                                aria-hidden="true"
                              ></b-icon>
                              10h 05min
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
                        <b-card-title>US$ <strong>516</strong></b-card-title>

                        <b-card-text>
                          Precio por Adulto Ida y vuelta
                        </b-card-text>

                        <b-button variant="danger"> Elegir</b-button>
                      </b-card-body>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card-group>
            </div>
          </div>
        </div>
      </div>
    </b-card>
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
import TicketFilter from "/src/components/tickets/ticket-index/TicketFilter.vue";
import axios from "axios";
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
    TicketFilter,
    BTooltip,
  },
  data() {
    return { mainProps: { width: 200, height: 100 } };
  },
  created() {
    axios.get("/ticket/data").then((result) => {
      console.log(result.data);
    });
  },
  methods: {},
};
</script>
