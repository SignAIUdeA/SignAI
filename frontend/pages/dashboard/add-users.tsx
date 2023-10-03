import FormAddUser from "@/components/form-add-user/FormAddUser";
import Layoutp from "@/layouts/Layout";
import styles from "@/styles/adminstrator-index.module.css";

const AddUsers = () => {
  return (
    <Layoutp>
      <FormAddUser className={styles.WrapperFormAddUser} />
    </Layoutp>
  );
};

export default AddUsers;
