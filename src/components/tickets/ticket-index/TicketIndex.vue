<template>
  <div>
    <b-card
      overlay
      img-src="https://www.rd.com/wp-content/uploads/2017/10/Why-Are-Commercial-Airplanes-White-_493536652-Jag_cz.jpg"
      img-alt="Card Image"
    >
      <div class="row h-100">
        <TicketFilter />

        <TicketAirline />
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
import TicketAirline from "/src/components/tickets/ticket-index/TicketAirline.vue";
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
    TicketAirline,
    BTooltip,
  },
};
</script>
