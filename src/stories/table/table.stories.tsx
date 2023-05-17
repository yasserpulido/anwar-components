import { ColumnProp, Table } from "../../design-system";

export default {
  title: "Table",
  component: Table,
};

const Template = () => (
  <Table
    columns={columns}
    data={data}
    isLoading={false}
    onSelect={(e) => console.log(e)}
  />
);

export const Default = Template.bind({});

type Human = {
  id: string;
  firstname: string;
  lastname: string;
};

const columns: Array<ColumnProp<Human>> = [
  { heading: "Id", value: "id" },
  { heading: "First Name", value: "firstname" },
  { heading: "Last Name", value: "lastname" },
];

const data: Array<Human> = [
  {
    id: "1",
    firstname: "Irad",
    lastname: "Ortiz",
  },
  {
    id: "2",
    firstname: "Emisael",
    lastname: "Jaramillo",
  },
];
