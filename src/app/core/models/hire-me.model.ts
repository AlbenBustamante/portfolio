export interface FormItemModel {
  label: string;
  placeholder: string;
}

interface HireMeData {
  title: string;
  media: string;
  message: string;
  form: {
    fullName: FormItemModel;
    email: FormItemModel;
    subject: FormItemModel;
    message: FormItemModel;
  };
  cta: string;
  ctaSending: string;
}

export interface HireMeModel {
  en: HireMeData;
  es: HireMeData;
}
