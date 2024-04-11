import { Popconfirm } from "antd";
import { BaseButton } from "components/common/BaseButton/BaseButton";
interface ActionBtnProps {
  handleDelete: (key: string | number) => void;
  itemKey: string | number;
}

const ActionBtn: React.FC<ActionBtnProps> = ({ handleDelete, itemKey }) => {
  return (
    <div className="card__action-top">
      <Popconfirm
        title={"Bạn có chắc muốn xoá không?"}
        onConfirm={() => handleDelete(itemKey)}
      >
        <BaseButton size="large" className="btn-delete">
          Xóa
        </BaseButton>
      </Popconfirm>

      <BaseButton size="large" className="btn-accept">
        Duyệt
      </BaseButton>
    </div>
  );
};

export default ActionBtn;
