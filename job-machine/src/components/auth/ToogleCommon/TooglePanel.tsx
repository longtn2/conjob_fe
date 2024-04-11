import ToogleImplement from './ToogleImplement';
import { ContainerToogle } from './Toogle.styled';
import { TypeActivePanel } from 'interfaces/interfaces';
interface TooglePanelProps {
  returnTypePanel: () => TypeActivePanel;
  handleChange: () => void;
}

const TooglePanel = ({ handleChange, returnTypePanel }: TooglePanelProps) => {
  const onChange = () => handleChange();

  const state = returnTypePanel();
  const isSignIn = state === 'sign-in';
  return (
    <ContainerToogle className={`${isSignIn ? '' : 'active'}`}>
      <div className={`toogle`}>
        <ToogleImplement
          state='sign-in'
          handleClick={onChange}
          isActive={isSignIn}
        />
        <ToogleImplement
          state='sign-up'
          handleClick={onChange}
          isActive={isSignIn}
        />
      </div>
    </ContainerToogle>
  );
};

export default TooglePanel;
