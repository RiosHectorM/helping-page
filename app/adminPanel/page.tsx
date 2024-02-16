import MenusAdmins from '@/components/PanelAdmin/MenusAdmins';
import NavAdmin from '@/components/PanelAdmin/NavAdmin';
import UserTable from '@/components/shared/UserTable';

const page = () => {
  return (
    <div>
      <NavAdmin />
      <MenusAdmins />
    </div>
  );
};

export default page;
