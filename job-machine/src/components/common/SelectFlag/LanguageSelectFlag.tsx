import { ValueSelectFlags } from '@/interfaces/interfaces';
import { Select, Image } from 'antd';
import { useTranslation } from 'react-i18next';
import { LANGUAGES_OPTIONS } from '@/constants/constants';

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language: ValueSelectFlags) => {
    i18n.changeLanguage(language);
  };

  return (
    <Select
      defaultValue={i18n.language as ValueSelectFlags}
      style={{ padding: '0', width: '10vw' }}
      onChange={(value: ValueSelectFlags) => changeLanguage(value)}
    >
      {LANGUAGES_OPTIONS?.map(value => {
        return (
          <Select.Option value={value.value}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '0.5rem'
              }}
              className="select-options-container"
            >
              <div>
                <Image
                  src={value.flag}
                  width="2vw"
                  height="2vw"
                  style={{ padding: '0.5rem' }}
                  preview={false}
                />
              </div>
              <div>
                <span style={{ fontSize: '0.8vw' }}>{value.label}</span>
              </div>
            </div>
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default LanguageSelect;
