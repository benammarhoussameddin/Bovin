export function downloadVCard() {
  const vcardContent = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:TECHNOOTIZ Bovins',
    'ORG:TECHNOOTIZ Sarl-s',
    'TITLE:Pôle Import - Export Bovins',
    'TEL;TYPE=WORK,VOICE:+352661497947',
    'TEL;TYPE=CELL,VOICE:+352691320929',
    'TEL;TYPE=HOME,VOICE:+213696521212',
    'EMAIL;TYPE=PREF,INTERNET:importexportbovin@technootiz.com',
    'ADR;TYPE=WORK:;;2 RUE DES FRANCISCIANS;ESCH-SUR-ALZETTE;;L-4125;LUXEMBOURG',
    'END:VCARD'
  ].join('\n');

  const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'TECHNOOTIZ_Bovins.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
