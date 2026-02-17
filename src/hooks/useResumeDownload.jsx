import { useLanguage } from '../context/LanguageContext';

const useResumeDownload = () => {
  const { language } = useLanguage();

  const downloadResume = () => {
    const cvUrl =
        language === 'en'
        ? '/GabrielWitt_CV_US.pdf'
        : '/GabrielWitt_CV_ES.pdf';

    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = cvUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { downloadResume };
};

export default useResumeDownload;
