// Change the style of buttons and text to yellow
const style = document.createElement('style');
style.innerHTML = `
    .v-application .primary {
    background-color: #F7C40A !important;
    color: white !important;
  }
    .v-application .info {
    background-color: #F7C40A !important;
    color: white !important;
  }
    .v-application .primary--text {
    color: #F7C40A !important;
  }

  .v-application a {
    color: #F7C40A;
  }

`;
document.head.appendChild(style);

