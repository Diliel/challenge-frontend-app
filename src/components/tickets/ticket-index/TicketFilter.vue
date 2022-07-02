<template>
  <div class="col-md-3 my-auto">
    <div class="card d-flex">
      <div class="card-body align-items-start">
        <b-row>
          <b-col cols="12">
            <h6 class="filter-heading d-none d-lg-block">
              <b-icon icon="filter" aria-hidden="true"></b-icon> Filtros
            </h6>
          </b-col>
          <hr />
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-button block v-b-toggle.accordion-1 variant="outline-secondary"
                >Escalas</b-button
              >

              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-row>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; Sin escalas</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 1,378 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 1 escala</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 631 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 2 o más escalas</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 528 </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-button block v-b-toggle.accordion-2 variant="outline-secondary"
                >Duración max. del viaje</b-button
              >
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-row>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="7">
                          <b-form-input
                            id="type-range"
                            type="range"
                          ></b-form-input>
                        </b-col>
                        <b-col cols="5"> 15h 10min </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-button block v-b-toggle.accordion-3 variant="outline-secondary"
                >Horas de salida</b-button
              >
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-row>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="12">
                          <h6 class="filter-heading d-none d-lg-block">
                            <small> DE IDA </small>
                          </h6>
                        </b-col>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 00:00 - 08:00
                          </b-form-checkbox>
                        </b-col>
                        <b-col cols="4"> $ 1,378 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 12:00 - 18:00
                          </b-form-checkbox>
                        </b-col>
                        <b-col cols="4"> $ 631 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 18:00 - 00:00</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 528 </b-col>
                      </b-row>
                    </b-col>
                    <hr />

                    <b-col cols="12">
                      <b-row>
                        <b-col cols="12">
                          <h6 class="filter-heading d-none d-lg-block">
                            <small> VUELTA </small>
                          </h6>
                        </b-col>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 00:00 - 08:00</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 1,378 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 12:00 - 18:00</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 631 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 18:00 - 00:00</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 528 </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-button block v-b-toggle.accordion-4 variant="outline-secondary"
                >Horas de llegada</b-button
              >
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-row>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="12">
                          <h6 class="filter-heading d-none d-lg-block">
                            <small> DE IDA </small>
                          </h6>
                        </b-col>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 00:00 - 08:00
                          </b-form-checkbox>
                        </b-col>
                        <b-col cols="4"> $ 1,378 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 12:00 - 18:00
                          </b-form-checkbox>
                        </b-col>
                        <b-col cols="4"> $ 631 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 18:00 - 00:00</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 528 </b-col>
                      </b-row>
                    </b-col>
                    <hr />

                    <b-col cols="12">
                      <b-row>
                        <b-col cols="12">
                          <h6 class="filter-heading d-none d-lg-block">
                            <small> VUELTA </small>
                          </h6>
                        </b-col>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 00:00 - 08:00</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 1,378 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 12:00 - 18:00</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 631 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; 18:00 - 00:00</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 528 </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-button block v-b-toggle.accordion-5 variant="outline-secondary"
                >Aereolineas
              </b-button>
              <b-collapse
                id="accordion-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-row>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="12">
                          <h6 class="filter-heading d-none d-lg-block">
                            <small> AEROLÍNEAS </small>
                          </h6>
                        </b-col>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; Copa Airlines</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 1,378 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; Amercian Airlines</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 631 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; Avianca</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 528 </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-button block v-b-toggle.accordion-6 variant="outline-secondary"
                >Aereopuertos
              </b-button>
              <b-collapse
                id="accordion-6"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-row>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="12">
                          <h6 class="filter-heading d-none d-lg-block">
                            <small> AEROPUERTOS </small>
                          </h6>
                        </b-col>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; Newark Liberty
                          </b-form-checkbox>
                        </b-col>
                        <b-col cols="4"> $ 1,378 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; John F. Kennedy</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 631 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; LaGuardia</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 528 </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-button block v-b-toggle.accordion-7 variant="outline-secondary"
                >Aereopuertos de conexión
              </b-button>
              <b-collapse
                id="accordion-7"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-row>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="12">
                          <h6 class="filter-heading d-none d-lg-block">
                            <small> AEROPUERTOS DE CONEXION </small>
                          </h6>
                        </b-col>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; El Salvador
                          </b-form-checkbox>
                        </b-col>
                        <b-col cols="4"> $ 1,378 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; El Dorado</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 631 </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="12">
                      <b-row>
                        <b-col cols="8">
                          <b-form-checkbox value="me">
                            &nbsp; Miami</b-form-checkbox
                          >
                        </b-col>
                        <b-col cols="4"> $ 528 </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import {
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
} from "bootstrap-vue";
import vSelect from "vue-select";
export default {
  components: {
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
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

