export const environment = {
  production: false,
  emailjs: {
    publicKey: import.meta.env.NG_APP_EMAILJS_PUBLIC_KEY,
    templateId: import.meta.env.NG_APP_EMAILJS_TEMPLATE_ID,
    serviceId: import.meta.env.NG_APP_EMAILJS_SERVICE_ID,
  },
};
