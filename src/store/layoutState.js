import {reactive} from "vue";

const layoutState = reactive({
  modalError: 0,
  modalSuccess: 0,
  contentSuccess: null,
  isLoading: false,
  sidebarMini: false,
  sidebarHover: false,
  modalDelete: null,
  modalDeleteResult: false,

  modalDeleteLead: null,
  modalDeleteLeadResult: false,
});

export default layoutState;
