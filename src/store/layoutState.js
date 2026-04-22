import {reactive} from "vue";

const layoutState = reactive({
  modalError: 0,
  modalSuccess: 0,
  isLoading: false,
  sidebarMini: false,
  sidebarHover: false,
  modalDelete: null,
  modalDeleteResult: false,

  modalDeleteLead: null,
  modalDeleteLeadResult: false,

  mobileSidebar: false,
  modalWarning: 0,  
  modalPolicyDocumentId: null, 
});

export default layoutState;
