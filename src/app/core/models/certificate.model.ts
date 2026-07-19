export interface CertificateItemModel {
  title: string;
  date: string;
  institute: string;
  url: string;
  imageUrl: string;
  featured: boolean;
}

interface CertificateData {
  title: 'Certificates';
  featured: 'Featured';
  showAll: 'Show All';
  items: CertificateItemModel[];
}

export interface CertificateModel {
  en: CertificateData;
  es: CertificateData;
}
