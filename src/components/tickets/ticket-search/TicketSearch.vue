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

                      <RoundTrip />
                    </b-tab>
                    <b-tab>
                      <template #title>
                        <span>Solo ida</span>
                        &nbsp;
                        <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
                      </template>
                      <RoundTrip
                    /></b-tab>
                    <b-tab>
                      <template #title>
                        <span>Múltiples destinos</span>
                        &nbsp;
                        <b-icon icon="arrows-move" aria-hidden="true"></b-icon>
                      </template>
                      <RoundTripMultiple />
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
import RoundTrip from "/src/components/tickets/ticket-search/RoundTrip.vue";
import RoundTripMultiple from "/src/components/tickets/ticket-search/RoundTripMultiple.vue";
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
    RoundTrip,
    RoundTripMultiple,
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